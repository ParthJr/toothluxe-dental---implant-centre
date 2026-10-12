import React from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { CLINIC_ASSETS } from '../assets/images';
import { Star, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onBookConsultation: () => void;
  onExploreTreatments: () => void;
  onOpenReviews: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookConsultation,
  onExploreTreatments,
  onOpenReviews,
}) => {
  return (
    <section
      id="top"
      className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-[#FAF9F7]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6 z-10">
            
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DFDFE5]/40 text-[#4A454B] font-label-caps tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#29202D]" />
              <span>{CLINIC_CONFIG.subTagline.toUpperCase()}</span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-display-hero text-[#120A17] font-normal tracking-tight mb-6">
              {CLINIC_CONFIG.heroHeadline.lead}{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-normal">{CLINIC_CONFIG.heroHeadline.emphasis}</span>
            </h1>

            {/* Brand Narrative Body */}
            <p className="font-body-lg text-[#5D5E63] max-w-xl mb-10 leading-relaxed font-normal">
              {CLINIC_CONFIG.heroDescription}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center bg-[#29202D] text-[#FAF9F7] px-8 py-3.5 rounded text-sm font-medium shadow-sm hover:bg-[#29202D]/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
              >
                Book a Consultation
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center gap-2 text-[#120A17] font-label-md group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D] rounded"
              >
                <span className="border-b border-[#CCC4CB] group-hover:border-[#120A17] transition-colors pb-0.5">
                  Explore Our Treatments
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Indicator Badge (Google Reviews 5.0) */}
            <div className="inline-flex flex-wrap items-center gap-3 py-2 px-4 rounded-xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm">
              <div
                className="flex items-center text-[#C29B38]"
                aria-label="5 out of 5 stars rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C29B38] text-[#C29B38]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-[#1A1C1B] font-body-sm">
                <span className="font-semibold text-[#120A17]">
                  {CLINIC_CONFIG.googleReputation.ratingDisplay}
                </span>
                <span className="text-[#7B757B]">·</span>
                <button
                  onClick={onOpenReviews}
                  className="text-[#5D5E63] font-medium hover:text-[#120A17] transition-colors hover:underline text-left"
                >
                  {CLINIC_CONFIG.googleReputation.reviewsText}
                </button>
              </div>

              <a
                href={CLINIC_CONFIG.googleReputation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#120A17] hover:text-[#665A6A] p-0.5"
                title="View verified reviews on Google Maps"
                aria-label="View verified Google reviews in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#5D5E63]" />
              </a>
            </div>
          </div>

          {/* Hero Editorial Asymmetric Media Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[#EFEEEC] border border-[#B8B8BE]/30">
              <img
                src={CLINIC_ASSETS.heroPortrait}
                alt="Portrait of a woman smiling comfortably in natural architectural light at TOOTHLUXE"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120A17]/35 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF9F7]/90 backdrop-blur-md shadow-md border border-[#B8B8BE]/40 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-caps text-[#5D5E63] tracking-wider text-[10px]">
                    Kudasan Sanctuary
                  </span>
                  <span className="font-title-md text-[#120A17] font-medium text-base">
                    Architectural Comfort
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#29202D] text-[#FAF9F7] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#EDDDF0]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
