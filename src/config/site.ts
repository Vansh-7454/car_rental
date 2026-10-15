// Centralized brand & site configuration
// Easily update brand name, contacts, and navigation links from this single source of truth.

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  legalEntity?: string;
  tagline: string;
  subheadline: string;
  whatsappMessage: string;
  whatsappUrl: string;
  navLinks: NavItem[];
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
    { label: "Fleet", href: "#fleet" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Tariff", href: "#tariff" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
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
