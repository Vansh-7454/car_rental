export type FaqCategory =
  | "all"
  | "general"
  | "vehicle-info"
  | "rental-enquiries"
  | "contact-support";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  categoryLabel: string;
  question: string;
  answer: string;
  businessPolicyNote?: string;
}

export interface FaqCategoryTab {
  id: FaqCategory;
  label: string;
}

export const FAQ_CATEGORIES: FaqCategoryTab[] = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "vehicle-info", label: "Vehicle Information" },
  { id: "rental-enquiries", label: "Rental Enquiries" },
  { id: "contact-support", label: "Contact & Support" },
];

export const FAQ_ITEMS: FaqItem[] = [
  // 1. General
  {
    id: "what-is-urban-motion",
    category: "general",
    categoryLabel: "General",
    question: "What is Urban Motion?",
    answer:
      "Urban Motion is a curated car rental showcase offering reliable, self-drive Indian-market hatchbacks, executive sedans, and compact SUVs. We focus on transparent specifications, authentic photography, and direct concierge coordination for city travel, weekend escapes, and business itineraries.",
  },
  {
    id: "how-to-explore-cars",
    category: "general",
    categoryLabel: "General",
    question: "How do I explore the available cars?",
    answer:
      "You can explore our fleet directly on the homepage fleet section, filter vehicles by category (Hatchbacks, Sedans, SUVs), and click 'View Details' on any vehicle to view high-resolution photo galleries, luggage room, powertrain specs, and suitable travel use cases.",
  },
  {
    id: "how-to-enquire",
    category: "general",
    categoryLabel: "General",
    question: "How do I enquire about a vehicle?",
    answer:
      "Simply click the 'Enquire on WhatsApp' button on any car card or vehicle profile. This immediately generates a pre-filled enquiry message with your selected car model ready to send directly to our team for quick turnaround.",
  },

  // 2. Vehicle Information
  {
    id: "where-to-find-specs",
    category: "vehicle-info",
    categoryLabel: "Vehicle Information",
    question: "Where can I find vehicle specifications?",
    answer:
      "Each car has a dedicated profile page (such as /fleet/hyundai-creta or /fleet/maruti-swift) featuring comprehensive technical overviews including seating capacity, transmission (Automatic / Manual), climate control system, powertrain, and luggage boot volume.",
  },
  {
    id: "how-to-compare-vehicles",
    category: "vehicle-info",
    categoryLabel: "Vehicle Information",
    question: "How can I compare different vehicle types?",
    answer:
      "You can toggle between category filters on our Fleet page to compare indicative rates and dimensions, or visit our Services page to review which vehicle types are recommended for city commuting, family road trips, or mountain getaways.",
  },
  {
    id: "enquire-particular-car",
    category: "vehicle-info",
    categoryLabel: "Vehicle Information",
    question: "Can I enquire about a particular car?",
    answer:
      "Yes. Every individual vehicle profile includes a vehicle-specific WhatsApp link that carries the exact car model and trim name directly into the message, ensuring our team knows precisely which car you wish to hire.",
  },

  // 3. Rental Enquiries
  {
    id: "confirm-availability",
    category: "rental-enquiries",
    categoryLabel: "Rental Enquiries",
    question: "How do I confirm whether a vehicle is available?",
    answer:
      "Because fleet schedules fluctuate based on ongoing hires and scheduled vehicle servicing, real-time availability is verified directly with our concierge team when you enquire with your proposed travel dates.",
    businessPolicyNote:
      "Specific operational calendar rules and booking lead times must be confirmed by the rental business.",
  },
  {
    id: "confirm-final-price",
    category: "rental-enquiries",
    categoryLabel: "Rental Enquiries",
    question: "How can I confirm the final rental price?",
    answer:
      "All tariffs shown on this website are indicative sample rates per 24-hour cycle. The final all-inclusive quotation—including applicable taxes, delivery slots, and seasonal rates—is provided and confirmed directly by the provider prior to booking.",
    businessPolicyNote:
      "Exact seasonal rates, multi-day discounts, and doorstep delivery surcharges require business tariff confirmation.",
  },
  {
    id: "check-rental-terms",
    category: "rental-enquiries",
    categoryLabel: "Rental Enquiries",
    question: "Where can I check the rental terms and conditions?",
    answer:
      "Complete rental terms—such as refundable security deposit values, fuel handover policy, daily kilometre allowances, and document verification criteria—are shared transparently by the provider during enquiry confirmation before any payment is made.",
    businessPolicyNote:
      "Formal legal terms, security deposit amounts, and cancellation policy must be confirmed by the business.",
  },

  // 4. Contact and Support
  {
    id: "how-to-contact",
    category: "contact-support",
    categoryLabel: "Contact & Support",
    question: "How can I contact the rental provider?",
    answer:
      "The primary and most responsive channel to connect with our concierge team is via the 'Enquire on WhatsApp' buttons placed throughout the site, which initiate an immediate direct chat with our support team.",
  },
  {
    id: "information-to-provide",
    category: "contact-support",
    categoryLabel: "Contact & Support",
    question: "What information should I provide when making an enquiry?",
    answer:
      "To help us confirm details quickly, please share your desired vehicle model, tentative rental start and return dates, preferred delivery/pickup city, and whether you plan to drive strictly within the city or travel outstation.",
  },
];
