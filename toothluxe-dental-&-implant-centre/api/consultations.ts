/**
 * Serverless / Express API handler for consultation inquiries at TOOTHLUXE.
 * Provides server-side validation, duplicate suppression, and secure logging.
 */

import {
  ConsultationPayload,
  ConsultationResponse,
  validateConsultation,
} from '../src/types/consultation.ts';

export type { ConsultationPayload, ConsultationResponse };

// In-memory cache for recent submissions to prevent duplicate spam
const recentSubmissions = new Map<string, number>();



export function processConsultation(data: ConsultationPayload): ConsultationResponse {
  const { isValid, errors } = validateConsultation(data);

  if (!isValid) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  // Duplicate suppression: max 1 submission per phone number every 2 minutes
  const cleanedPhone = (data.mobileNumber || '').replace(/[\s\-+]/g, '');
  const now = Date.now();
  const lastSubmitted = recentSubmissions.get(cleanedPhone);

  if (lastSubmitted && now - lastSubmitted < 120000) {
    return {
      success: false,
      message: "A consultation request with this mobile number was recently received. Our clinic desk will contact you shortly.",
      errors: {
        mobileNumber: "Duplicate submission. Please wait before submitting again, or call 076009 02693.",
      },
    };
  }

  recentSubmissions.set(cleanedPhone, now);

  // Generate verified clinical triage reference
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `TLX-${new Date().getFullYear()}-${randomSuffix}`;
  const receivedAt = new Date().toISOString();

  // In production, this connects to the clinic triage database or SMS notification service
  // Server-side logging without exposing sensitive data
  console.info(`[TOOTHLUXE Triage] New consultation received: ${referenceId} for ${data.serviceInterest}`);

  return {
    success: true,
    referenceId,
    receivedAt,
    message: "Your consultation request has been received. The clinic team will contact you to confirm availability.",
  };
}

// Serverless handler for Vercel / Node HTTP
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const result = processConsultation(body);
      const statusCode = result.success ? 200 : (result.errors?.mobileNumber?.includes('Duplicate') ? 429 : 400);
      return res.status(statusCode).json(result);
    } catch (err: any) {
      console.error("[TOOTHLUXE API Error]", err);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request. Please call 076009 02693 directly.",
      });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: "online",
      clinic: "TOOTHLUXE Dental & Implant Centre",
      endpoint: "/api/consultations",
      method: "POST",
    });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
