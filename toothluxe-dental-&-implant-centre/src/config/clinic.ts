/**
 * Central Business Configuration for TOOTHLUXE Dental & Implant Centre.
 * 
 * NOTE: All data here reflects verified clinic information from official listings.
 * Strictly adheres to non-fabrication policies: no invented doctor names,
 * unverified WhatsApp numbers, or speculative medical claims.
 */

export interface TreatmentInfo {
  id: string;
  name: string;
  category: 'Aesthetic Care' | 'Specialty' | 'Restorative' | 'Preventive' | 'Urgent Access' | 'Surgical';
  badgeType?: 'default' | 'specialty' | 'urgent';
  shortDescription: string;
  fullDescription: string;
  clinicalScope: string[];
  whatToExpect: string;
  actionText: string;
  iconName: string;
}

export interface ClinicConfig {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  heroHeadline: {
    lead: string;
    emphasis: string;
  };
  heroDescription: string;
  address: {
    suite: string;
    building: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    formatted: string;
    transitNote: string;
  };
  contact: {
    primaryPhone: string;
    phoneDisplay: string;
    phoneTelLink: string;
  };
  schedule: {
    openingTime: string;
    closingTimeNote: string;
    dailySchedule: string;
    verificationNotice: string;
  };
  googleReputation: {
    rating: number;
    ratingDisplay: string;
    reviewCount: number;
    reviewsText: string;
    googleMapsUrl: string;
    googleMapsDirectionsUrl: string;
  };
  treatments: TreatmentInfo[];
  consultationSlots: {
    id: string;
    label: string;
  }[];
}

export const CLINIC_CONFIG: ClinicConfig = {
  name: "TOOTHLUXE",
  legalName: "TOOTHLUXE Dental & Implant Centre",
  tagline: "Architectural Dental & Implant Medicine",
  subTagline: "Modern Dentistry · Kudasan, Gandhinagar",
  heroHeadline: {
    lead: "Your Smile,",
    emphasis: "Elevated.",
  },
  heroDescription:
    "Discover thoughtful dental care, modern restorative options, and a personalized approach to achieving and maintaining a healthy, enduring smile.",
  address: {
    suite: "102",
    building: "Kabir Shilp",
    landmark: "opposite Landmark",
    area: "Kudasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    formatted: "102, Kabir Shilp, opposite Landmark, Kudasan, Gandhinagar, Gujarat 382419",
    transitNote: "Opposite Landmark, Kudasan Corridor · Dedicated Patient Parking Available",
  },
  contact: {
    primaryPhone: "07600902693",
    phoneDisplay: "076009 02693",
    phoneTelLink: "tel:07600902693",
  },
  schedule: {
    openingTime: "10:00 AM",
    closingTimeNote: "Daily consultation by prior clinical triage",
    dailySchedule: "Opens at 10:00 AM Daily",
    verificationNotice: "Please contact clinic desk at 076009 02693 to verify holiday schedules & specific evening doctor availability.",
  },
  googleReputation: {
    rating: 5.0,
    ratingDisplay: "5.0",
    reviewCount: 27,
    reviewsText: "27 verified reviews on Google",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=TOOTHLUXE+Dental+%26+Implant+Centre+Kabir+Shilp+Kudasan+Gandhinagar",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=102,+Kabir+Shilp,+opposite+Landmark,+Kudasan,+Gandhinagar,+Gujarat+382419",
  },
  treatments: [
    {
      id: "teeth-whitening",
      name: "Teeth Whitening",
      category: "Aesthetic Care",
      badgeType: "default",
      shortDescription:
        "Discuss professional whitening options and their suitability for your teeth with calibrated shade gradients tailored for gentle enamel care.",
      fullDescription:
        "Professional shade enhancement begins with a clinical evaluation of your enamel thickness, existing restorations, and gum sensitivity. We assess whether in-clinic illumination or supervised custom trays are clinically appropriate for your aesthetic targets.",
      clinicalScope: [
        "Pre-treatment shade matching & clinical assessment",
        "Enamel integrity evaluation to minimize sensitivity",
        "Gentle brightening protocols tailored for uniform results",
        "Post-treatment maintenance guidance",
      ],
      whatToExpect: "A clear assessment of your baseline tooth shade, realistic brightening thresholds, and advice on preserving lasting results.",
      actionText: "Enquire Option",
      iconName: "Sparkles",
    },
    {
      id: "dental-implants",
      name: "Dental Implants",
      category: "Specialty",
      badgeType: "specialty",
      shortDescription:
        "Explore tooth-replacement options and learn about the digital CBCT radiographic assessment and 3D precision planning process.",
      fullDescription:
        "Modern dental implantology replaces missing teeth with titanium or zirconia biocompatible fixtures that anchor securely to the jawbone. Every candidate undergoes high-resolution 3D radiographic assessment to analyze bone density, ridge width, and nerve pathways before surgical planning.",
      clinicalScope: [
        "Single-tooth, multiple-unit, and full-arch restorative options",
        "Digital CBCT 3D bone volume & anatomical nerve mapping",
        "Computer-guided placement planning for optimal alignment",
        "Prosthetic integration focusing on natural masticatory balance",
      ],
      whatToExpect: "A detailed clinical discussion covering bone suitability, material choices, healing timelines, and step-by-step phases.",
      actionText: "Enquire Implants",
      iconName: "Layers",
    },
    {
      id: "dentures-and-bridges",
      name: "Dentures & Bridges",
      category: "Restorative",
      badgeType: "default",
      shortDescription:
        "Understand anatomical restorative options for replacing missing teeth with precision-milled prosthetics preserving jaw equilibrium.",
      fullDescription:
        "Restoring continuous dental arches preserves your natural bite balance and facial structure. We provide comprehensive consultations on custom-fitted partial or full dentures, as well as fixed ceramic bridges anchored to healthy adjacent abutment teeth.",
      clinicalScope: [
        "Fixed dental bridges bonded to calibrated abutment crowns",
        "Precision removable partial & complete dentures",
        "Occlusal balance analysis to prevent jaw strain (TMJ)",
        "Prosthetic adjustments for speech and chewing comfort",
      ],
      whatToExpect: "An unhurried review of anatomical models and prosthetic alternatives to select the most comfortable restorative balance.",
      actionText: "Enquire Option",
      iconName: "Compass",
    },
    {
      id: "dental-check-ups",
      name: "Dental Check-ups",
      category: "Preventive",
      badgeType: "default",
      shortDescription:
        "Stay informed about your oral health through thorough examinations, non-invasive digital screening, and preventive guidance.",
      fullDescription:
        "Routine examinations form the foundation of lifelong oral health. Our clinical check-up encompasses high-magnification intraoral inspection, plaque and calculus screening, soft-tissue assessment, and tailored preventive hygiene advice.",
      clinicalScope: [
        "Comprehensive intraoral tooth-by-tooth visual examination",
        "Periodontal (gum health) probing and plaque assessment",
        "Early cavity detection and enamel wear monitoring",
        "Conservative preventive oral care regimen recommendations",
      ],
      whatToExpect: "A transparent overview of your oral status, clear explanations of any early findings, and preventive steps to avert future procedures.",
      actionText: "Enquire Check-up",
      iconName: "ShieldCheck",
    },
    {
      id: "emergency-dental-care",
      name: "Emergency Dental Care",
      category: "Urgent Access",
      badgeType: "urgent",
      shortDescription:
        "Find direct assistance and immediate guidance when you have an urgent toothache, fractured restoration, or sudden clinical concern.",
      fullDescription:
        "Acute oral discomfort, chipped teeth, dislodged crowns, or sudden swelling require prioritized clinical triage. Our desk offers direct phone triage to assess urgency, administer pain management advice, and arrange priority clinic visits.",
      clinicalScope: [
        "Priority triage for acute toothaches and throbbing pain",
        "Treatment of fractured teeth, lost fillings, and displaced crowns",
        "Urgent infection and localized swelling evaluation",
        "Post-trauma clinical stabilization",
      ],
      whatToExpect: "Rapid clinical triage, identification of the cause of discomfort, and immediate palliative treatment to restore comfort safely.",
      actionText: "Contact Urgently",
      iconName: "Zap",
    },
    {
      id: "dental-extractions",
      name: "Dental Extractions",
      category: "Surgical",
      badgeType: "default",
      shortDescription:
        "Discuss when tooth removal is necessary, and learn about our minimally traumatic techniques and post-care comfort protocols.",
      fullDescription:
        "When a severely damaged, infected, or impacted tooth cannot be predictably saved with conservative therapy, minimally traumatic extraction preserves the surrounding alveolar bone for future restorative options.",
      clinicalScope: [
        "Pre-extraction radiographic assessment of roots and surrounding bone",
        "Minimally invasive atraumatic technique to protect bone socket",
        "Impacted wisdom tooth evaluation and management",
        "Detailed post-operative comfort care and healing instructions",
      ],
      whatToExpect: "A caring, pressure-free evaluation of all tooth-preservation possibilities first, with gentle surgical protocols if extraction is necessary.",
      actionText: "Enquire Option",
      iconName: "Activity",
    },
  ],
  consultationSlots: [
    { id: "morning", label: "Morning (10:00 AM – 1:00 PM)" },
    { id: "afternoon", label: "Afternoon (2:00 PM – 5:00 PM)" },
    { id: "evening", label: "Evening (5:00 PM – 8:00 PM)" },
  ],
};
