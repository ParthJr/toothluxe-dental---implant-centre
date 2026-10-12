/**
 * Consultation Types & Shared Clinical Validation
 */

export interface ConsultationPayload {
  fullName: string;
  mobileNumber: string;
  serviceInterest: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  privacyConsent: boolean;
}

export interface ConsultationResponse {
  success: boolean;
  referenceId?: string;
  message: string;
  errors?: Record<string, string>;
  receivedAt?: string;
}

export function validateConsultation(data: Partial<ConsultationPayload>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  // 1. Full name validation
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
    errors.fullName = "Please provide your full name (at least 2 characters).";
  } else if (data.fullName.length > 80) {
    errors.fullName = "Full name cannot exceed 80 characters.";
  }

  // 2. Indian mobile phone validation (10 digits starting with 6, 7, 8, or 9)
  const cleanedPhone = (data.mobileNumber || '').replace(/[\s\-+]/g, '');
  const tenDigitPhone = cleanedPhone.startsWith('91') && cleanedPhone.length === 12
    ? cleanedPhone.slice(2)
    : cleanedPhone;

  const indianMobileRegex = /^[6-9]\d{9}$/;
  if (!tenDigitPhone) {
    errors.mobileNumber = "Please provide your 10-digit mobile number.";
  } else if (!indianMobileRegex.test(tenDigitPhone)) {
    errors.mobileNumber = "Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).";
  }

  // 3. Treatment of interest
  const allowedServices = [
    "Teeth Whitening",
    "Dental Implants",
    "Dentures and Bridges",
    "Dentures & Bridges",
    "Dental Check-up",
    "Dental Check-ups",
    "Emergency Dental Enquiry",
    "Dental Extractions",
    "Other / Not Sure",
    "Other / General Consultation",
  ];
  if (!data.serviceInterest || typeof data.serviceInterest !== 'string') {
    errors.serviceInterest = "Please select a treatment focus.";
  } else if (!allowedServices.includes(data.serviceInterest.trim())) {
    errors.serviceInterest = "Please select a recognized treatment option from the list.";
  }

  // 4. Preferred Date validation (cannot be in the past)
  if (data.preferredDate) {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      errors.preferredDate = "Invalid appointment date format.";
    } else if (selectedDate < today) {
      errors.preferredDate = "Appointment date cannot be in the past.";
    }
  }

  // 5. Privacy consent
  if (data.privacyConsent !== true) {
    errors.privacyConsent = "Privacy consent is required to process clinical scheduling.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
