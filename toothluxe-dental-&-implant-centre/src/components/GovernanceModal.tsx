import React, { useEffect } from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { X, ShieldCheck, FileText, Phone, Building } from 'lucide-react';

export type GovernanceType = 'privacy' | 'terms' | 'concierge' | null;

interface GovernanceModalProps {
  type: GovernanceType;
  onClose: () => void;
}

export const GovernanceModal: React.FC<GovernanceModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="governance-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120A17]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF9F7] rounded-2xl shadow-2xl border border-[#B8B8BE]/40 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-6 border-b border-[#B8B8BE]/20 flex items-start justify-between bg-[#F4F3F1]">
          <div>
            <span className="font-label-caps text-[#5D5E63] tracking-widest text-[11px] block mb-1">
              TOOTHLUXE GOVERNANCE &amp; CLINICAL STANDARDS
            </span>
            <h3
              id="governance-modal-title"
              className="font-serif text-2xl sm:text-3xl text-[#120A17]"
            >
              {type === 'privacy' && 'Patient Privacy Notice'}
              {type === 'terms' && 'Terms of Clinical Consultation'}
              {type === 'concierge' && 'Concierge Desk & Patient Protocol'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#5D5E63] hover:text-[#120A17] hover:bg-[#EAE6EC] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-5 text-[#343238] font-body-sm leading-relaxed">
          {type === 'privacy' && (
            <>
              <div className="flex items-center gap-2 text-[#29202D] font-semibold text-base mb-1">
                <ShieldCheck className="w-5 h-5" />
                <h4>Commitment to Confidential Health Data</h4>
              </div>
              <p>
                At <strong>TOOTHLUXE Dental &amp; Implant Centre</strong>, your personal and health consultation enquiries are treated with strict medical confidentiality.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">1. Information We Collect</h5>
              <p>
                We collect your name, mobile contact number, treatment area of interest, preferred appointment schedule, and any voluntarily shared dental notes. We do not collect unnecessary sensitive data or payment information through this website.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">2. How Your Data Is Used</h5>
              <p>
                Submitted information is used exclusively by our front desk and dental team to review appointment slot availability and communicate directly regarding your clinical triage. We never sell, lease, or distribute patient contact details to commercial advertisers.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">3. Data Retention &amp; Rights</h5>
              <p>
                You may request deletion or verification of your contact record by calling our Kudasan clinic desk directly at {CLINIC_CONFIG.contact.phoneDisplay}.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <div className="flex items-center gap-2 text-[#29202D] font-semibold text-base mb-1">
                <FileText className="w-5 h-5" />
                <h4>Clinical Evaluation &amp; Advisory Scope</h4>
              </div>
              <p>
                Welcome to TOOTHLUXE Dental &amp; Implant Centre. By reviewing this website and submitting consultation requests, you acknowledge the following clinical guidelines:
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">1. Educational Nature of Website Content</h5>
              <p>
                Information presented on this website regarding dental implants, teeth whitening, dentures, and extractions is educational. It does not constitute a definitive medical diagnosis or replace personalized chairside evaluation.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">2. In-Person Diagnostic Requirement</h5>
              <p>
                All restorative interventions and surgical procedures (including dental implants and full-arch rehabilitation) require prior in-person clinical assessment, intraoral examination, and high-resolution 3D CBCT radiographic evaluation.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">3. Appointment Confirmation</h5>
              <p>
                Online consultation requests are subject to schedule verification. A booking is confirmed only after direct telephone or in-clinic coordination by our administrative desk.
              </p>
            </>
          )}

          {type === 'concierge' && (
            <>
              <div className="flex items-center gap-2 text-[#29202D] font-semibold text-base mb-1">
                <Building className="w-5 h-5" />
                <h4>Visiting TOOTHLUXE Kudasan</h4>
              </div>
              <p>
                To provide a calm, unhurried experience for every patient, our clinic operates by scheduled appointment and clinical triage.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">Arrival &amp; Transit</h5>
              <p>
                Our centre is located at <strong>102, Kabir Shilp, opposite Landmark, Kudasan</strong>. Dedicated patient parking is available on-site. We recommend arriving 5–10 minutes prior to your scheduled time to allow for preliminary health intake.
              </p>
              <h5 className="font-semibold text-[#120A17] text-sm mt-3">Rescheduling &amp; Assistance</h5>
              <p>
                If you need to reschedule or have urgent questions regarding post-procedure instructions, please contact our primary telephone line:
              </p>
              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#B8B8BE]/30 flex items-center gap-3 mt-2">
                <Phone className="w-5 h-5 text-[#29202D]" />
                <div>
                  <p className="font-semibold text-[#120A17]">{CLINIC_CONFIG.contact.phoneDisplay}</p>
                  <p className="text-xs text-[#5D5E63]">Opens at 10:00 AM Daily</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4F3F1] border-t border-[#B8B8BE]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-[#29202D] text-[#FAF9F7] text-sm font-medium hover:bg-[#29202D]/90 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
