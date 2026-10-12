import React from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { Phone, Clock } from 'lucide-react';
import { GovernanceType } from './GovernanceModal';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenGovernance: (type: GovernanceType) => void;
  onSelectTreatment: (treatmentName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenGovernance,
  onSelectTreatment,
}) => {
  return (
    <footer className="w-full bg-[#29202D] text-[#FAF9F7] pt-16 pb-12 border-t border-[#FAF9F7]/10">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Clinic Center Info */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl text-[#FAF9F7] font-normal tracking-tight">
                {CLINIC_CONFIG.name}
              </span>
              <span className="font-label-caps text-[#CCC4CB] tracking-widest mt-1 text-[10px]">
                {CLINIC_CONFIG.tagline.toUpperCase()}
              </span>
            </div>

            <p className="font-body-sm text-[#C6C6CC] max-w-sm mt-2 leading-relaxed">
              {CLINIC_CONFIG.address.formatted}
            </p>

            <div className="flex items-center gap-2 mt-2 font-body-sm text-[#FAF9F7]">
              <Phone className="w-4 h-4 text-[#CCC4CB]" />
              <a
                href={CLINIC_CONFIG.contact.phoneTelLink}
                className="hover:underline font-medium"
              >
                {CLINIC_CONFIG.contact.phoneDisplay}
              </a>
            </div>

            {/* Operating Badge */}
            <div className="inline-flex items-center gap-2 font-label-caps text-[#CCC4CB] tracking-wider bg-[#242327]/80 border border-[#FAF9F7]/10 px-3.5 py-2 rounded-lg w-fit mt-3 text-[10px]">
              <Clock className="w-3.5 h-3.5 text-[#EDDDF0]" />
              <span>{CLINIC_CONFIG.schedule.dailySchedule} · By Appointment</span>
            </div>
          </div>

          {/* Clinical Expertise */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-label-caps tracking-widest text-[#CCC4CB] mb-2 text-[11px]">
              Clinical Expertise
            </span>
            <button
              onClick={() => onSelectTreatment('Dental Implants')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Immediate &amp; Guided Implants
            </button>
            <button
              onClick={() => onSelectTreatment('Teeth Whitening')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Porcelain Veneers &amp; Aesthetics
            </button>
            <button
              onClick={() => onSelectTreatment('Dental Check-up')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Microscopic Endodontics
            </button>
            <button
              onClick={() => onSelectTreatment('Dentures and Bridges')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Full-Arch Rehabilitation
            </button>
            <button
              onClick={() => onNavigateSection('implants-section')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Digitally Planned Diagnostics
            </button>
          </div>

          {/* The Atelier */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-caps tracking-widest text-[#CCC4CB] mb-2 text-[11px]">
              The Atelier
            </span>
            <button
              onClick={() => onNavigateSection('philosophy-section')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => onNavigateSection('gallery-section')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Smile Gallery
            </button>
            <button
              onClick={() => onNavigateSection('location-section')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Location &amp; Access
            </button>
            <button
              onClick={() => onNavigateSection('consultation-anchor')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Consultation Protocol
            </button>
          </div>

          {/* Governance */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-caps tracking-widest text-[#CCC4CB] mb-2 text-[11px]">
              Governance
            </span>
            <button
              onClick={() => onOpenGovernance('privacy')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenGovernance('terms')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onOpenGovernance('concierge')}
              className="text-left font-body-sm text-[#FAF9F7] hover:text-[#EDDDF0] transition-colors py-0.5"
            >
              Concierge Desk
            </button>
          </div>

        </div>

        {/* Bottom Note & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#242327]/60 border border-[#FAF9F7]/10 px-6 py-5 rounded-xl">
          <p className="font-body-sm text-[#CCC4CB] max-w-2xl text-xs leading-relaxed">
            Clinical Evaluation Note: All surgical interventions, dental implants, and aesthetic transformations are subject to prior CBCT radiographic analysis and individualized clinician assessment.
          </p>
          <span className="font-label-caps text-[#C6C6CC] whitespace-nowrap text-[10px] tracking-wider">
            © TOOTHLUXE Centre. Kudasan.
          </span>
        </div>

      </div>
    </footer>
  );
};
