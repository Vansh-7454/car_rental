export type VehicleCategory = "all" | "hatchbacks" | "sedans" | "suvs";

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "hatchbacks" | "sedans" | "suvs";
  categoryLabel: string;
  capacity: string;
  transmission: string;
  ac: string;
  fuelType: string;
  pricePerDay: number;
  priceFormatted: string;
  priceNote: string;
  isFeatured?: boolean;
  imageSrc: string;
  alt: string;
  idealFor: string;
}

export interface CategoryFilter {
  id: VehicleCategory;
  label: string;
  countBadge?: string;
}

export const CATEGORY_FILTERS: CategoryFilter[] = [
  { id: "all", label: "All Cars" },
  { id: "hatchbacks", label: "Hatchbacks" },
  { id: "sedans", label: "Sedans" },
  { id: "suvs", label: "SUVs" },
];

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: "creta-sxo",
    slug: "hyundai-creta",
    name: "Hyundai Creta",
    subtitle: "1.5L Dual VTVT • SX Executive",
    category: "suvs",
    categoryLabel: "Compact SUV",
    capacity: "5 Passengers",
    transmission: "Automatic / IVT",
    ac: "Dual-zone Climate Control",
    fuelType: "Petrol",
    pricePerDay: 3200,
    priceFormatted: "₹3,200",
    priceNote: "Indicative starting rate per day",
    isFeatured: true,
    imageSrc: "/images/fleet-creta.jpg",
    alt: "Hyundai Creta compact SUV parked in an upscale urban glass plaza in Bangalore",
    idealFor: "Executive business travel, family weekends, and inter-city cruising",
  },
  {
    id: "swift-zxi",
    slug: "maruti-swift",
    name: "Maruti Suzuki Swift",
    subtitle: "1.2L DualJet • ZXi Edition",
    category: "hatchbacks",
    categoryLabel: "Hatchback",
    capacity: "5 Passengers",
    transmission: "5-Speed Manual",
    ac: "Automatic Air Conditioning",
    fuelType: "Petrol",
    pricePerDay: 1600,
    priceFormatted: "₹1,600",
    priceNote: "Indicative starting rate per day",
    isFeatured: false,
    imageSrc: "/images/fleet-swift.jpg",
    alt: "Metallic red Maruti Suzuki Swift parked along an urban cafe boulevard",
    idealFor: "Agile city commuting, tight parking, and quick daily errands",
  },
  {
    id: "i20-asta",
    slug: "hyundai-i20",
    name: "Hyundai i20",
    subtitle: "1.2L Kappa • Asta (O)",
    category: "hatchbacks",
    categoryLabel: "Premium Hatchback",
    capacity: "5 Passengers",
    transmission: "Automatic (IVT)",
    ac: "Fully Automatic Temperature Control",
    fuelType: "Petrol",
    pricePerDay: 1900,
    priceFormatted: "₹1,900",
    priceNote: "Indicative starting rate per day",
    isFeatured: false,
    imageSrc: "/images/fleet-i20.jpg",
    alt: "Deep celestial blue Hyundai i20 parked outside a contemporary corporate building",
    idealFor: "Effortless urban driving with premium digital conveniences",
  },
  {
    id: "verna-sx",
    slug: "hyundai-verna",
    name: "Hyundai Verna",
    subtitle: "1.5L Turbo GDi • SX Elegance",
    category: "sedans",
    categoryLabel: "Executive Sedan",
    capacity: "5 Passengers",
    transmission: "7-Speed DCT / Manual",
    ac: "Dual-zone Climate Control",
    fuelType: "Petrol",
    pricePerDay: 3000,
    priceFormatted: "₹3,000",
    priceNote: "Indicative starting rate per day",
    isFeatured: false,
    imageSrc: "/images/fleet-verna.jpg",
    alt: "Metallic silver Hyundai Verna executive sedan parked in front of The Claridges New Delhi",
    idealFor: "Corporate travel, airport hospitality, and express highway comfort",
  },
  {
    id: "dzire-zxi",
    slug: "maruti-dzire",
    name: "Maruti Suzuki Dzire",
    subtitle: "1.2L K-Series • ZXi Plus",
    category: "sedans",
    categoryLabel: "Compact Sedan",
    capacity: "5 Passengers",
    transmission: "Automatic / Manual",
    ac: "Automatic Climate Control with Rear Vents",
    fuelType: "Petrol",
    pricePerDay: 1800,
    priceFormatted: "₹1,800",
    priceNote: "Indicative starting rate per day",
    isFeatured: false,
    imageSrc: "/images/fleet-dzire.jpg",
    alt: "Magma grey Maruti Suzuki Dzire parked on a quiet residential avenue in Gurgaon",
    idealFor: "Economical sedan comfort with generous boot capacity",
  },
  {
    id: "brezza-zxi",
    slug: "maruti-brezza",
    name: "Maruti Suzuki Brezza",
    subtitle: "1.5L K15C Smart Hybrid • ZXi+",
    category: "suvs",
    categoryLabel: "Compact SUV",
    capacity: "5 Passengers",
    transmission: "6-Speed Automatic with Paddle Shift",
    ac: "Climate Control with Pollen Filter",
    fuelType: "Petrol Hybrid",
    pricePerDay: 2600,
    priceFormatted: "₹2,600",
    priceNote: "Indicative starting rate per day",
    isFeatured: false,
    imageSrc: "/images/fleet-brezza.jpg",
    alt: "Dual-tone white and black Maruti Suzuki Brezza SUV parked outside a Himalayan mountain retreat",
    idealFor: "High-ground-clearance highway tours and scenic mountain getaways",
  },
];

/**
 * Helper to build a vehicle-specific WhatsApp enquiry URL
 * Uses the configurable brand WhatsApp URL without inventing numbers.
 */
export function getVehicleWhatsappUrl(vehicleName: string): string {
  const message = `Hello Urban Motion, I would like to enquire about renting the ${vehicleName} for my upcoming journey.`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
