import React from 'react';
import { CLINIC_CONFIG, TreatmentInfo } from '../config/clinic';
import {
  Sparkles,
  Layers,
  Compass,
  ShieldCheck,
  Zap,
  Activity,
  ArrowUpRight,
  ArrowRight,
  Info,
} from 'lucide-react';

interface TreatmentGridProps {
  onSelectTreatment: (treatmentName: string) => void;
  onOpenDetails: (treatment: TreatmentInfo) => void;
  onArrangeTriage: () => void;
}

export const TreatmentGrid: React.FC<TreatmentGridProps> = ({
  onSelectTreatment,
  onOpenDetails,
  onArrangeTriage,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#120A17]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#FAF9F7]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#120A17]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#120A17]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#120A17]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#120A17]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#120A17]" />;
    }
  };

  return (
    <section
      id="treatments-section"
      className="w-full py-20 bg-[#F4F3F1] border-y border-[#B8B8BE]/20"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-3">
              CLINICAL EXCELLENCE
            </span>
            <h2 className="font-headline-lg text-[#120A17] tracking-tight">
              Designed Around Your Dental Needs.
            </h2>
            <p className="font-body-md text-[#5D5E63] mt-3">
              Explore available dental treatments and discuss the options that suit your individual oral health profile in a peaceful environment.
            </p>
          </div>

          <button
            onClick={onArrangeTriage}
            className="font-label-md text-[#120A17] font-semibold inline-flex items-center gap-1 group pb-1 self-start md:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D] rounded"
          >
            <span className="border-b border-[#120A17]">Arrange Clinical Triage</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_CONFIG.treatments.map((treatment) => {
            const isSpecialty = treatment.badgeType === 'specialty';
            const isUrgent = treatment.badgeType === 'urgent';

            return (
              <div
                key={treatment.id}
                className="group bg-[#FFFFFF] rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md border border-[#B8B8BE]/30 transition-all duration-300"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isSpecialty
                          ? 'bg-[#29202D]'
                          : isUrgent
                          ? 'bg-[#DFDFE5]'
                          : 'bg-[#EFEEEC]'
                      }`}
                    >
                      {getIcon(treatment.iconName)}
                    </span>

                    {isSpecialty ? (
                      <span className="font-label-caps uppercase text-[#FAF9F7] tracking-wider bg-[#29202D] px-2.5 py-1 rounded text-[10px]">
                        Specialty
                      </span>
                    ) : isUrgent ? (
                      <span className="font-label-caps uppercase text-[#BA1A1A] tracking-wider bg-[#FFDAD6] px-2.5 py-1 rounded text-[10px] font-semibold">
                        Urgent Access
                      </span>
                    ) : (
                      <span className="font-label-caps uppercase text-[#7B757B] tracking-wider text-[10px]">
                        {treatment.category}
                      </span>
                    )}
                  </div>

                  {/* Title & Body */}
                  <h3 className="font-headline-sm text-[#120A17] mb-3">
                    {treatment.name}
                  </h3>
                  <p className="font-body-sm text-[#5D5E63] leading-relaxed mb-6">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#B8B8BE]/20 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectTreatment(treatment.name)}
                    className="flex-1 text-left font-label-md text-sm font-semibold text-[#120A17] flex items-center justify-between group-hover:text-[#29202D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D] rounded py-1"
                  >
                    <span>{treatment.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#5D5E63] group-hover:text-[#29202D]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenDetails(treatment)}
                    className="p-1 text-[#7B757B] hover:text-[#120A17] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
                    title={`View clinical details for ${treatment.name}`}
                    aria-label={`View clinical details for ${treatment.name}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
