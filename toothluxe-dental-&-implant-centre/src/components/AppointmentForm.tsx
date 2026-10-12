import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { submitConsultationRequest } from '../services/appointmentService';
import {
  CheckCircle,
  Phone,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  FileCheck,
} from 'lucide-react';

interface AppointmentFormProps {
  prefilledTreatment?: string;
  onClearPrefill?: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  prefilledTreatment,
  onClearPrefill,
  onOpenPrivacyPolicy,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM – 1:00 PM)');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Sync prefilled treatment from clicks on treatment cards
  useEffect(() => {
    if (prefilledTreatment) {
      setServiceInterest(prefilledTreatment);
    }
  }, [prefilledTreatment]);

  // Today's date in YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 10 digits
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(cleaned);
    if (fieldErrors.mobileNumber) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.mobileNumber;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client-side instant checks
    const errors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 letters).";
    }

    if (!mobileNumber) {
      errors.mobileNumber = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      errors.mobileNumber = "Enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).";
    }

    if (!serviceInterest) {
      errors.serviceInterest = "Please select a treatment focus.";
    }

    if (preferredDate) {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.preferredDate = "Selected appointment date cannot be in the past.";
      }
    }

    if (!privacyConsent) {
      errors.privacyConsent = "Please check the consent box to proceed with scheduling.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    // Submit to real configured backend endpoint
    setIsSubmitting(true);
    try {
      const result = await submitConsultationRequest({
        fullName: fullName.trim(),
        mobileNumber,
        serviceInterest,
        preferredDate: preferredDate || undefined,
        preferredTime,
        message: message.trim() || undefined,
        privacyConsent,
      });

      if (result.success) {
        setSubmitSuccess(true);
        setReferenceId(result.referenceId || `TLX-${Date.now()}`);
        setErrorMessage(null);
        // Clear sensitive inputs
        setFullName('');
        setMobileNumber('');
        setMessage('');
        setPrivacyConsent(false);
      } else {
        setSubmitSuccess(false);
        setErrorMessage(result.message || "Failed to process consultation. Please call directly.");
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err: any) {
      setSubmitSuccess(false);
      setErrorMessage("An unexpected network error occurred. Please call 076009 02693.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
    setReferenceId(null);
    setErrorMessage(null);
    setFieldErrors({});
    if (onClearPrefill) onClearPrefill();
  };

  return (
    <section
      id="consultation-anchor"
      className="w-full py-20 lg:py-24 bg-[#EFEEEC] border-b border-[#B8B8BE]/20 scroll-mt-16"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Form Context Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-3">
                RESERVE A VISIT
              </span>

              <h2 className="font-headline-lg text-[#120A17] tracking-tight mb-6">
                Begin With a Conversation.
              </h2>

              <p className="font-body-lg text-[#5D5E63] leading-relaxed mb-6 font-normal">
                Request a consultation and let the clinical team help you explore the next steps for your dental care in a private, measured setting.
              </p>

              <p className="font-body-sm text-[#4A454B] leading-relaxed mb-8">
                All appointments are confirmed following review of the clinic’s daily schedule. For urgent dental relief, please call our primary desk directly at{' '}
                <a
                  href={CLINIC_CONFIG.contact.phoneTelLink}
                  className="font-semibold text-[#120A17] hover:underline"
                >
                  {CLINIC_CONFIG.contact.phoneDisplay}
                </a>
                .
              </p>
            </div>

            {/* Triage Commitment Callout */}
            <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#B8B8BE]/30 shadow-sm mt-4">
              <div className="flex items-center gap-3 text-[#120A17] mb-2">
                <CheckCircle className="w-5 h-5 text-[#29202D]" />
                <h3 className="font-title-md font-semibold text-base">
                  Triage Commitment
                </h3>
              </div>
              <p className="font-body-sm text-[#5D5E63] leading-relaxed">
                No mandatory procedures or hurried sales. You receive transparent clinical counsel regarding teeth whitening, implants, or restorative wellness.
              </p>
            </div>
          </div>

          {/* Consultation Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#B8B8BE]/40">
              
              {submitSuccess ? (
                /* Success View - strictly compliant with required copy */
                <div
                  className="space-y-6 py-4 animate-in fade-in duration-300"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 rounded-full bg-[#EDDDF0] text-[#29202D] flex items-center justify-center mx-auto mb-2">
                    <FileCheck className="w-8 h-8 text-[#29202D]" />
                  </div>

                  <div className="text-center space-y-2">
                    <span className="font-label-caps text-[#5D5E63] tracking-widest text-xs block">
                      CLINICAL TRIAGE LOGGED
                    </span>
                    <h3 className="font-headline-sm text-2xl text-[#120A17]">
                      Request Received
                    </h3>
                    {referenceId && (
                      <p className="font-mono text-sm text-[#29202D] bg-[#F4F3F1] py-1.5 px-3 rounded inline-block border border-[#B8B8BE]/40 font-semibold">
                        Reference: {referenceId}
                      </p>
                    )}
                  </div>

                  {/* EXACT REQUIRED SUCCESS STATEMENT */}
                  <div className="p-5 rounded-xl bg-[#F4F3F1] border-l-4 border-[#29202D] text-[#120A17]">
                    <p className="font-body-md text-base leading-relaxed font-medium">
                      Your consultation request has been received. The clinic team will contact you to confirm availability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#B8B8BE]/30 text-xs text-[#5D5E63] space-y-1">
                    <p className="font-semibold text-[#120A17]">Next Steps:</p>
                    <p>• Our Kudasan clinic reception will review schedule availability.</p>
                    <p>• You will receive a direct phone call to confirm your exact consultation slot.</p>
                    <p>• If you have acute pain or sudden dental symptoms, please dial 076009 02693 immediately.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full py-3 rounded border border-[#B8B8BE] text-[#120A17] font-label-md font-semibold hover:bg-[#F4F3F1] transition-colors text-center"
                    >
                      Submit Another Consultation
                    </button>
                    <a
                      href={CLINIC_CONFIG.contact.phoneTelLink}
                      className="w-full py-3 rounded bg-[#29202D] text-[#FAF9F7] font-label-md font-medium hover:bg-[#29202D]/90 transition-colors text-center inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#EDDDF0]" />
                      <span>Call Desk (076009 02693)</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Booking Form */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Consultation Request Form"
                >
                  {errorMessage && (
                    <div
                      className="p-4 rounded-xl bg-[#FFDAD6] border border-[#BA1A1A]/30 text-[#93000A] flex items-start gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-sm font-body-sm leading-relaxed">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="mt-1">
                          You may also call our front desk directly at{' '}
                          <a href={CLINIC_CONFIG.contact.phoneTelLink} className="underline font-bold">
                            076009 02693
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Full Name & Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="fullName"
                        className="font-label-caps text-[#5D5E63] tracking-wider text-[11px]"
                      >
                        Full Name <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (fieldErrors.fullName) {
                            setFieldErrors((prev) => {
                              const next = { ...prev };
                              delete next.fullName;
                              return next;
                            });
                          }
                        }}
                        placeholder="e.g. Priyanshu Patel"
                        required
                        className={`bg-[#F4F3F1] px-4 py-3 rounded text-[#1A1C1B] font-body-md border transition-all focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#29202D] ${
                          fieldErrors.fullName ? 'border-[#BA1A1A]' : 'border-[#B8B8BE]/40'
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <span className="text-xs text-[#BA1A1A] font-medium">
                          {fieldErrors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="mobileNumber"
                        className="font-label-caps text-[#5D5E63] tracking-wider text-[11px]"
                      >
                        Phone Number <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <div
                        className={`flex items-center bg-[#F4F3F1] rounded border focus-within:bg-[#FFFFFF] focus-within:ring-2 focus-within:ring-[#29202D] transition-all ${
                          fieldErrors.mobileNumber ? 'border-[#BA1A1A]' : 'border-[#B8B8BE]/40'
                        }`}
                      >
                        <span className="px-3 text-[#5D5E63] font-body-md select-none border-r border-[#B8B8BE]/30">
                          +91
                        </span>
                        <input
                          id="mobileNumber"
                          type="tel"
                          inputMode="numeric"
                          value={mobileNumber}
                          onChange={handlePhoneChange}
                          placeholder="10-digit number"
                          required
                          className="w-full bg-transparent px-3 py-3 rounded text-[#1A1C1B] font-body-md focus:outline-none"
                        />
                      </div>
                      {fieldErrors.mobileNumber ? (
                        <span className="text-xs text-[#BA1A1A] font-medium">
                          {fieldErrors.mobileNumber}
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#7B757B]">
                          Verified Indian format (10 digits)
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Treatment of Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="serviceInterest"
                      className="font-label-caps text-[#5D5E63] tracking-wider text-[11px]"
                    >
                      Treatment of Interest <span className="text-[#BA1A1A]">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      value={serviceInterest}
                      onChange={(e) => {
                        setServiceInterest(e.target.value);
                        if (fieldErrors.serviceInterest) {
                          setFieldErrors((prev) => {
                            const next = { ...prev };
                            delete next.serviceInterest;
                            return next;
                          });
                        }
                      }}
                      required
                      className={`bg-[#F4F3F1] px-4 py-3 rounded text-[#1A1C1B] font-body-md border transition-all focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#29202D] ${
                        fieldErrors.serviceInterest ? 'border-[#BA1A1A]' : 'border-[#B8B8BE]/40'
                      }`}
                    >
                      <option value="" disabled>
                        Select a treatment focus...
                      </option>
                      <option value="Teeth Whitening">Teeth Whitening (Aesthetic)</option>
                      <option value="Dental Implants">Dental Implants (Restorative Specialty)</option>
                      <option value="Dentures and Bridges">Dentures &amp; Bridges</option>
                      <option value="Dental Check-up">Dental Check-up &amp; Clean (Preventive)</option>
                      <option value="Emergency Dental Enquiry">Emergency Dental Enquiry (Urgent)</option>
                      <option value="Dental Extractions">Dental Extractions (Surgical)</option>
                      <option value="Other / Not Sure">Other / General Consultation</option>
                    </select>
                    {fieldErrors.serviceInterest && (
                      <span className="text-xs text-[#BA1A1A] font-medium">
                        {fieldErrors.serviceInterest}
                      </span>
                    )}
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Preferred Date */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="preferredDate"
                        className="font-label-caps text-[#5D5E63] tracking-wider text-[11px] flex items-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#5D5E63]" />
                        <span>Preferred Date (Optional)</span>
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        min={todayStr}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (fieldErrors.preferredDate) {
                            setFieldErrors((prev) => {
                              const next = { ...prev };
                              delete next.preferredDate;
                              return next;
                            });
                          }
                        }}
                        className={`bg-[#F4F3F1] px-4 py-3 rounded text-[#1A1C1B] font-body-md border transition-all focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#29202D] ${
                          fieldErrors.preferredDate ? 'border-[#BA1A1A]' : 'border-[#B8B8BE]/40'
                        }`}
                      />
                      {fieldErrors.preferredDate && (
                        <span className="text-xs text-[#BA1A1A] font-medium">
                          {fieldErrors.preferredDate}
                        </span>
                      )}
                    </div>

                    {/* Preferred Slot */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="preferredTime"
                        className="font-label-caps text-[#5D5E63] tracking-wider text-[11px] flex items-center gap-1.5"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#5D5E63]" />
                        <span>Preferred Time Slot</span>
                      </label>
                      <select
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="bg-[#F4F3F1] px-4 py-3 rounded text-[#1A1C1B] font-body-md border border-[#B8B8BE]/40 transition-all focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#29202D]"
                      >
                        <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                      </select>
                    </div>

                  </div>

                  {/* Additional Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="messageField"
                      className="font-label-caps text-[#5D5E63] tracking-wider text-[11px]"
                    >
                      Additional Notes or Questions (Optional)
                    </label>
                    <textarea
                      id="messageField"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about previous dental work or specific symptoms..."
                      rows={3}
                      className="bg-[#F4F3F1] px-4 py-3 rounded text-[#1A1C1B] font-body-md border border-[#B8B8BE]/40 transition-all focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#29202D]"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="consentCheck"
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => {
                        setPrivacyConsent(e.target.checked);
                        if (fieldErrors.privacyConsent) {
                          setFieldErrors((prev) => {
                            const next = { ...prev };
                            delete next.privacyConsent;
                            return next;
                          });
                        }
                      }}
                      required
                      className="mt-1 w-4 h-4 rounded text-[#29202D] accent-[#29202D] cursor-pointer"
                    />
                    <label
                      htmlFor="consentCheck"
                      className="font-body-sm text-[#5D5E63] select-none text-xs sm:text-sm leading-relaxed"
                    >
                      I agree to be contacted by TOOTHLUXE regarding my appointment enquiry. Clinical scheduling is confirmed subject to slot availability.{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="text-[#120A17] underline hover:text-[#29202D] font-medium"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                  {fieldErrors.privacyConsent && (
                    <span className="text-xs text-[#BA1A1A] font-medium block">
                      {fieldErrors.privacyConsent}
                    </span>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#29202D] text-[#FAF9F7] py-4 rounded font-label-md font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D] ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#29202D]/90'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-[#EDDDF0]" />
                          <span>Verifying &amp; Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
