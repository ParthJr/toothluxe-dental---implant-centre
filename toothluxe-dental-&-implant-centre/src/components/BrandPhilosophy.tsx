import React from 'react';
import { Headphones, Eye, ShieldCheck } from 'lucide-react';

export const BrandPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy-section"
      className="w-full py-20 lg:py-24 bg-[#FAF9F7]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5">
            <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-3">
              THE CLINICAL PHILOSOPHY
            </span>

            <h2 className="font-headline-lg text-[#120A17] tracking-tight mb-6">
              Care Is More Than a Beautiful Smile.
            </h2>

            <p className="font-body-lg text-[#5D5E63] leading-relaxed mb-6 font-normal">
              A considered dental experience starts with listening, clear communication, and helping each patient understand their treatment options without pressure or rush.
            </p>

            <p className="font-body-md text-[#5D5E63] leading-relaxed">
              Located in Kudasan, Gandhinagar, TOOTHLUXE unites clinical rigor with architectural serenity to dispel the traditional dread of dentistry.
            </p>
          </div>

          {/* 3 Core Values Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 mt-4 lg:mt-0">
            
            {/* Value 1 */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm hover:shadow transition-shadow flex gap-5 sm:gap-6 items-start">
              <span className="w-12 h-12 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30">
                <Headphones className="w-6 h-6 text-[#120A17]" />
              </span>
              <div>
                <h3 className="font-headline-sm text-[#120A17] mb-2 font-medium">
                  Personalized Attention
                </h3>
                <p className="font-body-md text-[#5D5E63] leading-relaxed">
                  Tailored treatment consultations focused entirely on your individual oral comfort, aesthetic wishes, and medical considerations.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm hover:shadow transition-shadow flex gap-5 sm:gap-6 items-start">
              <span className="w-12 h-12 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30">
                <Eye className="w-6 h-6 text-[#120A17]" />
              </span>
              <div>
                <h3 className="font-headline-sm text-[#120A17] mb-2 font-medium">
                  Clear Treatment Explanations
                </h3>
                <p className="font-body-md text-[#5D5E63] leading-relaxed">
                  Transparent discussions about procedures, clinical rationale, recovery milestones, and itemized fees upfront.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm hover:shadow transition-shadow flex gap-5 sm:gap-6 items-start">
              <span className="w-12 h-12 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30">
                <ShieldCheck className="w-6 h-6 text-[#120A17]" />
              </span>
              <div>
                <h3 className="font-headline-sm text-[#120A17] mb-2 font-medium">
                  A Focus on Oral Health
                </h3>
                <p className="font-body-md text-[#5D5E63] leading-relaxed">
                  Conservative interventions and long-term preventative care designed for sustainable wellness and lasting natural beauty.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
