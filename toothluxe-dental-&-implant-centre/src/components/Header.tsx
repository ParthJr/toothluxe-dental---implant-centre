import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { CLINIC_ASSETS } from '../assets/images';
import { Phone, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (treatment?: string) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F7]/95 backdrop-blur-md shadow-[0_1px_12px_rgba(41,32,45,0.06)] border-b border-[#B8B8BE]/30'
            : 'bg-[#FAF9F7]/85 backdrop-blur-md shadow-[0_1px_8px_rgba(41,32,45,0.04)] border-b border-[#B8B8BE]/20'
        }`}
      >
        <div className="h-20 max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D] rounded-sm p-1"
            aria-label="TOOTHLUXE Dental & Implant Centre - Return to top"
          >
            <img
              src={CLINIC_ASSETS.logo}
              alt="TOOTHLUXE Wordmark & Emblem"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-title-md text-[#120A17] tracking-tight leading-none font-semibold">
                {CLINIC_CONFIG.name}
              </span>
              <span className="font-label-caps text-[#5D5E63] tracking-widest mt-1 text-[10px]">
                Dental &amp; Implant Centre · Kudasan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-6"
          >
            <button
              onClick={() => scrollTo('top')}
              className="font-label-md text-[#120A17] font-semibold border-b-2 border-[#29202D] pb-1 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('philosophy-section')}
              className="font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B8B8BE]"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => scrollTo('treatments-section')}
              className="font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B8B8BE]"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollTo('implants-section')}
              className="font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B8B8BE]"
            >
              Dental Implants
            </button>
            <button
              onClick={() => scrollTo('gallery-section')}
              className="font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B8B8BE]"
            >
              Smile Gallery
            </button>
            <button
              onClick={() => scrollTo('location-section')}
              className="font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors pb-1 border-b-2 border-transparent hover:border-[#B8B8BE]"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Click-to-call */}
            <a
              href={CLINIC_CONFIG.contact.phoneTelLink}
              className="hidden md:flex items-center gap-1.5 font-label-md text-[#4A454B] hover:text-[#120A17] transition-colors px-2 py-1 rounded"
              title="Call TOOTHLUXE Kudasan"
            >
              <Phone className="w-4 h-4 text-[#5D5E63]" />
              <span className="font-medium">{CLINIC_CONFIG.contact.phoneDisplay}</span>
            </a>

            {/* Book Consultation CTA */}
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center justify-center bg-[#29202D] text-[#FAF9F7] font-label-md text-xs sm:text-sm font-medium rounded px-4 sm:px-5 py-2.5 transition-all duration-200 hover:bg-[#29202D]/90 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
            >
              Book a Consultation
            </button>

            {/* Concierge Icon Indicator */}
            <div
              className="hidden sm:flex w-8 h-8 rounded-full bg-[#120A17] items-center justify-center text-[#FAF9F7]"
              title="TOOTHLUXE Clinical Concierge"
            >
              <User className="w-4 h-4" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-[#120A17] hover:bg-[#EAE6EC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 xl:hidden flex flex-col bg-[#FAF9F7] animate-in fade-in duration-200"
        >
          {/* Mobile Top Bar */}
          <div className="h-20 px-5 flex items-center justify-between border-b border-[#B8B8BE]/30">
            <div className="flex items-center gap-3">
              <img
                src={CLINIC_ASSETS.logo}
                alt="TOOTHLUXE Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-title-md text-[#120A17] font-semibold">
                {CLINIC_CONFIG.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded text-[#120A17] hover:bg-[#EAE6EC]"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              <button
                onClick={() => scrollTo('top')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('treatments-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Treatments &amp; Services
              </button>
              <button
                onClick={() => scrollTo('implants-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Dental Implants Centre
              </button>
              <button
                onClick={() => scrollTo('philosophy-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Our Clinical Philosophy
              </button>
              <button
                onClick={() => scrollTo('gallery-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Smile Aesthetics &amp; Space
              </button>
              <button
                onClick={() => scrollTo('journey-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Patient Concierge Journey
              </button>
              <button
                onClick={() => scrollTo('location-section')}
                className="text-left font-serif text-2xl text-[#120A17] hover:text-[#5D5E63] transition-colors py-1"
              >
                Location &amp; Clinic Hours
              </button>
            </nav>

            {/* Mobile Footer Contact & CTA */}
            <div className="pt-8 border-t border-[#B8B8BE]/30 flex flex-col gap-4">
              <a
                href={CLINIC_CONFIG.contact.phoneTelLink}
                className="flex items-center justify-center gap-2 w-full py-3 rounded border border-[#B8B8BE] text-[#120A17] font-label-md font-semibold hover:bg-[#EAE6EC] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#29202D]" />
                <span>Call {CLINIC_CONFIG.contact.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#29202D] text-[#FAF9F7] py-3.5 rounded font-label-md font-semibold text-center hover:opacity-95 transition-opacity"
              >
                Book a Consultation
              </button>

              <div className="text-center font-body-sm text-[#5D5E63] text-xs">
                102, Kabir Shilp, Kudasan, Gandhinagar
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
