import React from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { Star, ExternalLink } from 'lucide-react';

interface ReviewsSectionProps {
  onBookConsultation: () => void;
  onOpenReviewsModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onBookConsultation,
  onOpenReviewsModal,
}) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#F4F3F1] border-b border-[#B8B8BE]/20">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        
        {/* Google Reviews Showcase Card */}
        <div className="p-8 sm:p-10 md:p-14 rounded-2xl bg-[#FFFFFF] shadow-md border border-[#B8B8BE]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Rating Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif text-3xl sm:text-4xl text-[#120A17] font-normal leading-none">
                {CLINIC_CONFIG.googleReputation.ratingDisplay}
              </span>
              <div
                className="flex text-[#C29B38]"
                aria-label="5 stars rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C29B38] text-[#C29B38]"
                  />
                ))}
              </div>
            </div>

            <h3 className="font-title-md text-lg sm:text-xl text-[#120A17] font-semibold mb-1">
              Authentic Community Reputation
            </h3>

            <p className="font-body-md text-[#5D5E63]">
              Based on {CLINIC_CONFIG.googleReputation.reviewCount} verified Google reviews from patients in Kudasan and Gandhinagar.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <button
              onClick={onOpenReviewsModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#EFEEEC] text-[#120A17] font-label-md text-sm font-semibold hover:bg-[#EAE6EC] transition-colors border border-[#B8B8BE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#5D5E63]" />
            </button>

            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#29202D] text-[#FAF9F7] font-label-md text-sm font-medium hover:bg-[#29202D]/90 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
            >
              <span>Book Consultation</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
