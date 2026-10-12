import React from 'react';
import { MessageSquare, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  return (
    <section
      id="journey-section"
      className="w-full py-20 lg:py-24 bg-[#FAF9F7]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-3">
            CONCIERGE PROCESS
          </span>
          <h2 className="font-headline-lg text-[#120A17] tracking-tight">
            A Considered Experience, From Start to Finish.
          </h2>
        </div>

        {/* 3 Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stage 1: Connect */}
          <div className="flex flex-col p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm relative transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-3xl sm:text-4xl text-[#5D5E63]/40 font-normal">
                01
              </span>
              <div className="w-8 h-8 rounded-full bg-[#29202D] text-[#FAF9F7] flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#EDDDF0]" />
              </div>
            </div>
            <h3 className="font-headline-sm text-[#120A17] mb-3 font-medium">
              Connect
            </h3>
            <p className="font-body-md text-[#5D5E63] leading-relaxed">
              Request a consultation and share your preferred appointment time. Our concierge team responds with scheduling clarity.
            </p>
          </div>

          {/* Stage 2: Understand */}
          <div className="flex flex-col p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm relative transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-3xl sm:text-4xl text-[#5D5E63]/40 font-normal">
                02
              </span>
              <div className="w-8 h-8 rounded-full bg-[#29202D] text-[#FAF9F7] flex items-center justify-center">
                <HeartHandshake className="w-4 h-4 text-[#EDDDF0]" />
              </div>
            </div>
            <h3 className="font-headline-sm text-[#120A17] mb-3 font-medium">
              Understand
            </h3>
            <p className="font-body-md text-[#5D5E63] leading-relaxed">
              Discuss your dental concerns and explore the available treatment pathways without pressure or hurried decisions.
            </p>
          </div>

          {/* Stage 3: Plan */}
          <div className="flex flex-col p-6 sm:p-8 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm relative transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-3xl sm:text-4xl text-[#5D5E63]/40 font-normal">
                03
              </span>
              <div className="w-8 h-8 rounded-full bg-[#29202D] text-[#FAF9F7] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#EDDDF0]" />
              </div>
            </div>
            <h3 className="font-headline-sm text-[#120A17] mb-3 font-medium">
              Plan
            </h3>
            <p className="font-body-md text-[#5D5E63] leading-relaxed">
              Receive personalized clinical recommendations, transparent timelines, and agree on appropriate next steps with confidence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
