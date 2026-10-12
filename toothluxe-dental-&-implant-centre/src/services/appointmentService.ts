/**
 * Appointment / Consultation Request Service
 * 
 * Handles client-side validation, submission to /api/consultations,
 * fallback persistence in localStorage to avoid silent enquiry loss,
 * and transparent error reporting without misleading success claims.
 */

import { validateConsultation, ConsultationPayload, ConsultationResponse } from '../types/consultation';

export interface StoredEnquiry extends ConsultationPayload {
  id: string;
  submittedAt: string;
  status: 'confirmed_received_by_server' | 'saved_offline_pending_delivery';
  referenceId?: string;
}

const LOCAL_STORAGE_KEY = 'toothluxe_patient_enquiries';

export async function submitConsultationRequest(
  payload: ConsultationPayload
): Promise<ConsultationResponse> {
  // 1. Client-side pre-validation
  const validation = validateConsultation(payload);
  if (!validation.isValid) {
    return {
      success: false,
      message: "Please correct the highlighted errors before submitting.",
      errors: validation.errors,
    };
  }

  // 2. Network submission to real backend endpoint
  try {
    const response = await fetch('/api/consultations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data: ConsultationResponse = await response.json();
      
      // Save locally as verified submission
      saveEnquiryLocally({
        ...payload,
        id: data.referenceId || `TLX-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        status: 'confirmed_received_by_server',
        referenceId: data.referenceId,
      });

      return data;
    } else {
      // Server returned 400, 429, or 500
      let errorData: any = {};
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: `Server error (${response.status})` };
      }

      return {
        success: false,
        message: errorData.message || "Unable to complete consultation request. Please call 076009 02693.",
        errors: errorData.errors,
      };
    }
  } catch (networkError: any) {
    // Network down or offline
    console.warn("[TOOTHLUXE] Network dispatch error:", networkError);

    // Save offline to prevent silent data loss
    const offlineId = `OFFLINE-${Date.now()}`;
    saveEnquiryLocally({
      ...payload,
      id: offlineId,
      submittedAt: new Date().toISOString(),
      status: 'saved_offline_pending_delivery',
    });

    return {
      success: false,
      message:
        "Unable to reach the clinic scheduling server right now. Your details have been saved locally. Please call the clinic directly at 076009 02693 for immediate booking.",
      errors: {
        network: "Server unreachable. Please check your connection or call directly.",
      },
    };
  }
}

function saveEnquiryLocally(enquiry: StoredEnquiry) {
  try {
    const existing = getStoredEnquiries();
    existing.unshift(enquiry);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(0, 20)));
  } catch (err) {
    console.error("Failed to store enquiry in localStorage", err);
  }
}

export function getStoredEnquiries(): StoredEnquiry[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
