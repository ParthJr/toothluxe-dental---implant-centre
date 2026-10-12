import React from 'react';
import { CLINIC_ASSETS } from '../assets/images';
import { CheckCircle2 } from 'lucide-react';

interface ImplantFeatureProps {
  onEnquireImplants: () => void;
}

export const ImplantFeature: React.FC<ImplantFeatureProps> = ({ onEnquireImplants }) => {
  return (
    <section
      id="implants-section"
      className="w-full bg-[#29202D] text-[#FAF9F7] py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Planning Narrative & Stages */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-label-caps text-[#EDDDF0] tracking-widest mb-4">
              RESTORATIVE DENTISTRY
            </span>

            <h2 className="font-headline-lg text-[#FAF9F7] tracking-tight mb-4">
              Thoughtful Planning.{' '}
              <br />
              <span className="italic font-normal">Restorative Possibilities.</span>
            </h2>

            <p className="font-body-md text-[#C6C6CC] leading-relaxed mb-10">
              Considering dental implants? Learn about the clinical consultation, digital bone assessment, and treatment-planning process before deciding on your next step.
            </p>

            {/* 3 Sequential Stages */}
            <div className="space-y-4 sm:space-y-6 mb-10">
              <div className="flex items-start gap-5 p-4 sm:p-5 rounded-xl bg-[#242327]/60 border border-[#FAF9F7]/10 transition-colors hover:bg-[#242327]/80">
                <span className="font-serif text-2xl text-[#EDDDF0] font-semibold tracking-wide shrink-0">
                  01
                </span>
                <div>
                  <h3 className="font-title-md text-[#FAF9F7] mb-1 font-semibold text-base sm:text-lg">
                    Initial Consultation
                  </h3>
                  <p className="font-body-sm text-[#C6C6CC] leading-relaxed">
                    Discuss your dental history, aesthetic concerns, and functional expectations in an unhurried dialogue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 sm:p-5 rounded-xl bg-[#242327]/60 border border-[#FAF9F7]/10 transition-colors hover:bg-[#242327]/80">
                <span className="font-serif text-2xl text-[#EDDDF0] font-semibold tracking-wide shrink-0">
                  02
                </span>
                <div>
                  <h3 className="font-title-md text-[#FAF9F7] mb-1 font-semibold text-base sm:text-lg">
                    Assessment and Planning
                  </h3>
                  <p className="font-body-sm text-[#C6C6CC] leading-relaxed">
                    Understand the anatomical options recommended following accurate 3D CBCT imaging and bone topology evaluation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 sm:p-5 rounded-xl bg-[#242327]/60 border border-[#FAF9F7]/10 transition-colors hover:bg-[#242327]/80">
                <span className="font-serif text-2xl text-[#EDDDF0] font-semibold tracking-wide shrink-0">
                  03
                </span>
                <div>
                  <h3 className="font-title-md text-[#FAF9F7] mb-1 font-semibold text-base sm:text-lg">
                    Treatment Discussion
                  </h3>
                  <p className="font-body-sm text-[#C6C6CC] leading-relaxed">
                    Review the proposed treatment plan, biocompatible material choices, timelines, and post-placement maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onEnquireImplants}
                className="inline-flex items-center justify-center bg-[#FAF9F7] text-[#120A17] font-label-md font-semibold px-8 py-3.5 rounded hover:bg-[#F4F3F1] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDDDF0]"
              >
                Enquire About Dental Implants
              </button>
            </div>
          </div>

          {/* Architectural Operatory Suite Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#242327] border border-[#FAF9F7]/15">
              <img
                src={CLINIC_ASSETS.operatorySuite}
                alt="Architectural operatory suite at TOOTHLUXE Kabir Shilp in Kudasan featuring travertine walls and clinical ergonomics"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A17]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#29202D]/90 backdrop-blur-md border border-[#FAF9F7]/10 flex items-center justify-between">
                <div>
                  <p className="font-title-md text-[#FAF9F7] font-medium text-sm sm:text-base">
                    Operatory Suite · Kabir Shilp
                  </p>
                  <p className="font-body-sm text-[#C6C6CC] text-xs sm:text-sm">
                    Designed for acoustic calmness and surgical hygiene
                  </p>
                </div>
                <div className="shrink-0 ml-3">
                  <CheckCircle2 className="w-6 h-6 text-[#EDDDF0]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
