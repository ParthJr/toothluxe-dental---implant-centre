import React from 'react';
import { CLINIC_ASSETS } from '../assets/images';
import { Calendar } from 'lucide-react';

interface SmileAestheticsSectionProps {
  onDiscussGoals: () => void;
}

export const SmileAestheticsSection: React.FC<SmileAestheticsSectionProps> = ({
  onDiscussGoals,
}) => {
  return (
    <section
      id="gallery-section"
      className="w-full py-20 bg-[#EFEEEC] border-y border-[#B8B8BE]/20"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-2">
            INDIVIDUAL HARMONY
          </span>
          <h2 className="font-headline-lg text-[#120A17] tracking-tight mb-4">
            Confidence Looks Different on Everyone.
          </h2>
          <p className="font-body-md text-[#5D5E63] leading-relaxed">
            Whether you are exploring whitening, restorative treatment, or routine dental care, your priorities deserve a thoughtful conversation.
          </p>
        </div>

        {/* 3 Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Clinic Space */}
          <div className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-md bg-[#FAF9F7] border border-[#B8B8BE]/30">
            <img
              src={CLINIC_ASSETS.clinicSpaceLounge}
              alt="Curated clinic space with minimalist contemporary lounge in Kudasan"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120A17]/75 via-transparent to-transparent flex items-end p-6">
              <div className="text-[#FAF9F7]">
                <span className="font-label-caps uppercase text-[#EDDDF0] text-[10px] tracking-wider block mb-1">
                  The Clinic Space
                </span>
                <h3 className="font-title-md text-lg font-medium">
                  Curated Atmosphere
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2: Restorative Success */}
          <div className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-md bg-[#FAF9F7] border border-[#B8B8BE]/30">
            <img
              src={CLINIC_ASSETS.naturalProportionsPortrait}
              alt="Natural restorative proportions and confident smile in architectural lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120A17]/75 via-transparent to-transparent flex items-end p-6">
              <div className="text-[#FAF9F7]">
                <span className="font-label-caps uppercase text-[#EDDDF0] text-[10px] tracking-wider block mb-1">
                  Restorative Success
                </span>
                <h3 className="font-title-md text-lg font-medium">
                  Natural Proportions
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3: Diagnostic Precision */}
          <div className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-md bg-[#FAF9F7] border border-[#B8B8BE]/30">
            <img
              src={CLINIC_ASSETS.digitalPlanningMonitor}
              alt="Digital CBCT planning monitor showing 3D anatomical modeling"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120A17]/75 via-transparent to-transparent flex items-end p-6">
              <div className="text-[#FAF9F7]">
                <span className="font-label-caps uppercase text-[#EDDDF0] text-[10px] tracking-wider block mb-1">
                  Diagnostic Precision
                </span>
                <h3 className="font-title-md text-lg font-medium">
                  Digital Planning
                </h3>
              </div>
            </div>
          </div>

        </div>

        {/* Discuss Your Smile Goals Action */}
        <div className="flex justify-center">
          <button
            onClick={onDiscussGoals}
            className="inline-flex items-center gap-2 bg-[#29202D] text-[#FAF9F7] px-8 py-3.5 rounded text-sm font-medium hover:bg-[#29202D]/90 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
          >
            <span>Discuss Your Smile Goals</span>
            <Calendar className="w-4 h-4 text-[#EDDDF0]" />
          </button>
        </div>

      </div>
    </section>
  );
};
