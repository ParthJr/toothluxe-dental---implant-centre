import React, { useEffect } from 'react';
import { TreatmentInfo } from '../config/clinic';
import { X, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface TreatmentModalProps {
  treatment: TreatmentInfo | null;
  onClose: () => void;
  onSelectForBooking: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectForBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (treatment) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
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
              {treatment.category.toUpperCase()} · CLINICAL OVERVIEW
            </span>
            <h3
              id="treatment-modal-title"
              className="font-serif text-2xl sm:text-3xl text-[#120A17]"
            >
              {treatment.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#5D5E63] hover:text-[#120A17] hover:bg-[#EAE6EC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-title-md text-[#120A17] mb-2 font-semibold text-base">
              Clinical Assessment &amp; Rationale
            </h4>
            <p className="font-body-md text-[#5D5E63] leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Clinical Scope Points */}
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#B8B8BE]/30">
            <h4 className="font-label-caps text-[#120A17] tracking-wider mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#29202D]" />
              <span>Diagnostic &amp; Procedural Scope</span>
            </h4>
            <ul className="space-y-2.5">
              {treatment.clinicalScope.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#29202D] shrink-0 mt-0.5" />
                  <span className="font-body-sm text-[#343238] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div>
            <h4 className="font-title-md text-[#120A17] mb-2 font-semibold text-base">
              What to Expect at Your Consultation
            </h4>
            <p className="font-body-sm text-[#5D5E63] leading-relaxed">
              {treatment.whatToExpect}
            </p>
          </div>

          <div className="text-xs text-[#7B757B] italic border-t border-[#B8B8BE]/20 pt-4">
            Notice: All dental treatments are subject to pre-clinical evaluation and diagnostic imaging at our Kudasan centre.
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4F3F1] border-t border-[#B8B8BE]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-[#5D5E63] hover:text-[#120A17] transition-colors text-center"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectForBooking(treatment.name);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#29202D] text-[#FAF9F7] px-6 py-2.5 rounded text-sm font-medium hover:bg-[#29202D]/90 transition-all shadow-sm"
          >
            <span>Reserve Consultation for {treatment.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
