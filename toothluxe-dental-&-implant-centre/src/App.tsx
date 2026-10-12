/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TreatmentGrid } from './components/TreatmentGrid';
import { ImplantFeature } from './components/ImplantFeature';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { SmileAestheticsSection } from './components/SmileAestheticsSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { TreatmentModal } from './components/TreatmentModal';
import { ReviewsModal } from './components/ReviewsModal';
import { GovernanceModal, GovernanceType } from './components/GovernanceModal';
import { TreatmentInfo } from './config/clinic';

export default function App() {
  const [selectedTreatmentForModal, setSelectedTreatmentForModal] = useState<TreatmentInfo | null>(null);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [governanceModalType, setGovernanceModalType] = useState<GovernanceType>(null);
  const [prefilledTreatment, setPrefilledTreatment] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (treatmentName?: string) => {
    if (treatmentName) {
      setPrefilledTreatment(treatmentName);
    }
    scrollToSection('consultation-anchor');
  };

  const handleTreatmentCardClick = (treatmentName: string) => {
    setPrefilledTreatment(treatmentName);
    scrollToSection('consultation-anchor');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#1A1C1B] flex flex-col font-sans selection:bg-[#29202D] selection:text-[#FAF9F7]">
      {/* 1. Header & Navigation */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onOpenContact={() => scrollToSection('location-section')}
      />

      {/* Main Content Sections (In Approved Sequence) */}
      <main className="flex-1 w-full pt-20">
        {/* 2. Hero: "Your Smile, Elevated." */}
        <HeroSection
          onBookConsultation={() => handleOpenConsultation()}
          onExploreTreatments={() => scrollToSection('treatments-section')}
          onOpenReviews={() => setReviewsModalOpen(true)}
        />

        {/* 3. Treatment Discovery Grid */}
        <TreatmentGrid
          onSelectTreatment={handleTreatmentCardClick}
          onOpenDetails={(treatment) => setSelectedTreatmentForModal(treatment)}
          onArrangeTriage={() => handleOpenConsultation()}
        />

        {/* 4. Dental Implants Feature */}
        <ImplantFeature
          onEnquireImplants={() => handleOpenConsultation('Dental Implants')}
        />

        {/* 5. Brand Philosophy */}
        <BrandPhilosophy />

        {/* 6. Smile Aesthetics Section */}
        <SmileAestheticsSection
          onDiscussGoals={() => handleOpenConsultation()}
        />

        {/* 7. Patient Experience Journey */}
        <PatientJourney />

        {/* 8. Google Review Summary */}
        <ReviewsSection
          onBookConsultation={() => handleOpenConsultation()}
          onOpenReviewsModal={() => setReviewsModalOpen(true)}
        />

        {/* 9. Appointment & Consultation Form */}
        <AppointmentForm
          prefilledTreatment={prefilledTreatment}
          onClearPrefill={() => setPrefilledTreatment(undefined)}
          onOpenPrivacyPolicy={() => setGovernanceModalType('privacy')}
        />

        {/* 10. Location and Contact */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenGovernance={(type) => setGovernanceModalType(type)}
        onSelectTreatment={handleTreatmentCardClick}
      />

      {/* Modals & Dialogs */}
      <TreatmentModal
        treatment={selectedTreatmentForModal}
        onClose={() => setSelectedTreatmentForModal(null)}
        onSelectForBooking={handleTreatmentCardClick}
      />

      <ReviewsModal
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
      />

      <GovernanceModal
        type={governanceModalType}
        onClose={() => setGovernanceModalType(null)}
      />
    </div>
  );
}
