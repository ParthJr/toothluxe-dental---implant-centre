import React from 'react';
import { CLINIC_CONFIG } from '../config/clinic';
import { CLINIC_ASSETS } from '../assets/images';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location-section"
      className="w-full py-20 lg:py-24 bg-[#FAF9F7]"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Address & Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label-caps text-[#5D5E63] tracking-widest block mb-3">
              LOCATION &amp; CONTACT
            </span>

            <h2 className="font-headline-lg text-[#120A17] tracking-tight mb-8">
              Visit TOOTHLUXE.
            </h2>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F4F3F1] border border-[#B8B8BE]/30 shadow-sm mb-8 space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#29202D]" />
                </span>
                <div>
                  <h3 className="font-title-md text-[#120A17] font-semibold text-base sm:text-lg">
                    Kudasan Center
                  </h3>
                  <p className="font-body-md text-[#5D5E63] mt-1 leading-relaxed">
                    {CLINIC_CONFIG.address.suite}, {CLINIC_CONFIG.address.building}, {CLINIC_CONFIG.address.landmark},<br />
                    {CLINIC_CONFIG.address.area}, {CLINIC_CONFIG.address.city}, {CLINIC_CONFIG.address.state} {CLINIC_CONFIG.address.pincode}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30 mt-0.5">
                  <Phone className="w-5 h-5 text-[#29202D]" />
                </span>
                <div>
                  <h3 className="font-title-md text-[#120A17] font-semibold text-base sm:text-lg">
                    Telephone
                  </h3>
                  <a
                    href={CLINIC_CONFIG.contact.phoneTelLink}
                    className="font-body-md text-[#120A17] hover:underline mt-1 block font-semibold text-base"
                  >
                    {CLINIC_CONFIG.contact.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#7B757B]">
                    Direct consultation &amp; appointment triage desk
                  </span>
                </div>
              </div>

              {/* Operating Schedule */}
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center shrink-0 text-[#120A17] border border-[#B8B8BE]/30 mt-0.5">
                  <Clock className="w-5 h-5 text-[#29202D]" />
                </span>
                <div>
                  <h3 className="font-title-md text-[#120A17] font-semibold text-base sm:text-lg">
                    Operating Schedule
                  </h3>
                  <p className="font-body-md text-[#5D5E63] mt-1 font-medium">
                    {CLINIC_CONFIG.schedule.dailySchedule}
                  </p>
                  <p className="font-body-sm text-[#7B757B] mt-0.5 text-xs leading-relaxed">
                    {CLINIC_CONFIG.schedule.verificationNotice}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={CLINIC_CONFIG.contact.phoneTelLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#29202D] text-[#FAF9F7] font-label-md text-sm font-medium hover:bg-[#29202D]/90 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
              >
                <Phone className="w-4 h-4 text-[#EDDDF0]" />
                <span>Call Clinic Directly</span>
              </a>

              <a
                href={CLINIC_CONFIG.googleReputation.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#EFEEEC] text-[#120A17] font-label-md text-sm font-semibold hover:bg-[#EAE6EC] transition-colors border border-[#B8B8BE]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29202D]"
              >
                <Navigation className="w-4 h-4 text-[#5D5E63]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Architectural Map Frame */}
          <div className="lg:col-span-7 mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden bg-[#EFEEEC] border border-[#B8B8BE]/40 group">
              <img
                src={CLINIC_ASSETS.mapRendering}
                alt="Map schematic of Kudasan Gandhinagar showing Kabir Shilp location and transit access"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#120A17]/10 pointer-events-none" />

              {/* Transit Callout Pill */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md p-4 rounded-xl bg-[#FAF9F7]/95 backdrop-blur-md shadow-md border border-[#B8B8BE]/40">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-label-caps uppercase text-[#5D5E63] text-[10px] tracking-wider">
                    Accessible Transit
                  </span>
                  <a
                    href={CLINIC_CONFIG.googleReputation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#29202D] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="font-body-sm text-[#120A17] font-medium text-xs sm:text-sm">
                  {CLINIC_CONFIG.address.transitNote}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
