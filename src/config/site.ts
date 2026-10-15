// Centralized brand & site configuration
// Easily update brand name, contacts, and navigation links from this single source of truth.

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
  isConfigured: boolean;
  note: string;
}

export interface SiteContactInfo {
  phone: ContactChannel;
  whatsapp: ContactChannel;
  email: ContactChannel;
  address: ContactChannel;
  operatingHours: ContactChannel;
}

export interface SiteConfig {
  brandName: string;
  legalEntity?: string;
  tagline: string;
  subheadline: string;
  whatsappMessage: string;
  whatsappUrl: string;
  navLinks: NavItem[];
  contactInfo: SiteContactInfo;
  features: {
    title: string;
    description: string;
  }[];
  heroCar: {
    title: string;
    subtitle: string;
    category: string;
    transmission: string;
    seating: string;
    imageSrc: string;
    alt: string;
  };
  secondaryDetail: {
    title: string;
    subtitle: string;
    imageSrc: string;
    alt: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Urban Motion",
  legalEntity: "Urban Motion Mobility Solutions",
  tagline: "Your City. Your Drive.",
  subheadline:
    "Discover a better way to get around. Find the right car for city journeys, weekend escapes and everything in between.",
  whatsappMessage:
    "Hello Urban Motion, I would like to enquire about renting a car for my upcoming journey.",
  // Configurable WhatsApp URL without inventing fake phone numbers
  whatsappUrl:
    "https://wa.me/?text=Hello%20Urban%20Motion%2C%20I%20would%20like%20to%20enquire%20about%20renting%20a%20car%20for%20my%20upcoming%20journey.",
  navLinks: [
    { label: "Fleet", href: "/#fleet" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/services#how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  contactInfo: {
    phone: {
      label: "Phone Support",
      value: "Direct phone line available upon reservation confirmation",
      // Set href once real verified business phone is provided, e.g. "tel:+919876543210"
      href: undefined,
      isConfigured: false,
      note: "Shared directly with confirmed renters. For new enquiries, please connect via WhatsApp.",
    },
    whatsapp: {
      label: "WhatsApp Concierge",
      value: "Chat with Our Concierge",
      href: "https://wa.me/?text=Hello%20Urban%20Motion%2C%20I%20would%20like%20to%20enquire%20about%20renting%20a%20car%20for%20my%20upcoming%20journey.",
      isConfigured: true,
      note: "Our most responsive channel for quick questions, rates, and availability.",
    },
    email: {
      label: "Email Enquiries",
      value: "enquiry@urbanmotion.in",
      href: "mailto:enquiry@urbanmotion.in?subject=Rental%20Enquiry%20-%20Urban%20Motion",
      isConfigured: true,
      note: "For detailed corporate requests, multi-week itineraries, or partnership queries.",
    },
    address: {
      label: "Operations & Delivery Hub",
      value: "Central Operations Hub (Doorstep & Airport Delivery)",
      href: undefined,
      isConfigured: false,
      note: "Physical hub handover bays are shared upon rental schedule confirmation. Sanitized doorstep delivery available.",
    },
    operatingHours: {
      label: "Operating Hours",
      value: "Monday – Sunday: 8:00 AM – 9:00 PM",
      href: undefined,
      isConfigured: true,
      note: "Concierge desk open daily. Pre-scheduled vehicle handovers operate 24/7.",
    },
  },
  features: [
    {
      title: "Doorstep Delivery",
      description: "Delivered sanitised to your home, office, or airport terminal.",
    },
    {
      title: "Transparent Tariff",
      description: "Clear hourly and multi-day rates with zero hidden charges.",
    },
    {
      title: "Pristine Fleet",
      description: "Believable, well-maintained vehicles for city and highway drives.",
    },
  ],
  heroCar: {
    title: "Executive Sedan",
    subtitle: "Refined comfort for city navigation and long highway escapes",
    category: "Premium Executive Class",
    transmission: "Automatic & Manual",
    seating: "5 Seater",
    imageSrc: "/images/hero-car.jpg",
    alt: "Metallic deep green executive sedan parked in a modern architectural courtyard",
  },
  secondaryDetail: {
    title: "Tailored Cabin",
    subtitle: "Ventilated leather seats & dual-zone climate control",
    imageSrc: "/images/interior-detail.jpg",
    alt: "Crafted luxury car interior cockpit with warm ivory leather upholstery",
  },
};
