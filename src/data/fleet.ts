export type VehicleCategory = "all" | "hatchbacks" | "sedans" | "suvs";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface UseCaseItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

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
  luggage: string;
  pricePerDay: number;
  priceFormatted: string;
  priceNote: string;
  isFeatured?: boolean;
  imageSrc: string;
  alt: string;
  idealFor: string;
  description: string;
  features: string[];
  useCases: UseCaseItem[];
  faqs: FaqItem[];
  gallery: GalleryItem[];
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
    ac: "Dual-zone Automatic Climate Control",
    fuelType: "Petrol (Euro 6 Compliant)",
    luggage: "3 Medium Suitcases + 2 Weekend Bags",
    pricePerDay: 3200,
    priceFormatted: "₹3,200",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: true,
    imageSrc: "/images/fleet-creta.jpg",
    alt: "Hyundai Creta compact SUV parked in an upscale urban glass plaza in Bangalore",
    idealFor: "Executive business travel, family weekends, and inter-city cruising",
    description:
      "A benchmark compact SUV for Indian road conditions, the Hyundai Creta combines elevated ride height, refined suspension manners, and a spacious 5-passenger cabin. Engineered for smooth urban transit and effortless long-distance touring with modern digital infotainment.",
    features: [
      "Panoramic view high-seating stance",
      "Touchscreen with Apple CarPlay & Android Auto",
      "Wireless device charging pad",
      "Rear air conditioning vents & USB ports",
      "Reverse parking camera with dynamic guidelines",
      "ISOFIX child seat anchors & dual front airbags",
    ],
    useCases: [
      {
        title: "Inter-City Highway Touring",
        desc: "High ground clearance and cruise control absorb expressway miles with poised stability.",
      },
      {
        title: "Executive Airport Transit",
        desc: "Generous 433-litre boot space comfortably accommodates multiple hard-shell suitcases.",
      },
      {
        title: "Family Weekend Escapes",
        desc: "Spacious rear legroom ensures children and adults travel comfortably on extended trips.",
      },
    ],
    faqs: [
      {
        question: "What documents are required to hire the Hyundai Creta?",
        answer:
          "You will need a valid government-issued Indian Driving Licence (held for at least 1 year), Aadhaar Card or Passport for identity verification, and proof of address.",
      },
      {
        question: "How does doorstep delivery work?",
        answer:
          "Vehicles can be dispatched directly to your residence, office, or airport arrivals terminal. Handover includes a comprehensive physical inspection and digital checklist signing.",
      },
      {
        question: "What is the security deposit and fuel policy?",
        answer:
          "A refundable security deposit is held during the rental tenure. Vehicles are handed over with a noted fuel level and should be returned with the same quantity.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-creta.jpg",
        alt: "Hyundai Creta front three-quarter view parked in contemporary urban plaza",
        caption: "Exterior Architecture — Urban Stance & Aerodynamic Silhouette",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Hyundai Creta driver cockpit and touchscreen navigation view",
        caption: "Driver Ergonomics — Digital Touchscreen & Multi-function Steering",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Hyundai Creta generous rear boot cargo space with luggage",
        caption: "Cargo Flexibility — Generous Rear Luggage Volume",
      },
    ],
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
    fuelType: "Petrol (K12 DualJet)",
    luggage: "2 Medium Trolley Bags + Handbags",
    pricePerDay: 1600,
    priceFormatted: "₹1,600",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-swift.jpg",
    alt: "Metallic red Maruti Suzuki Swift parked along an urban cafe boulevard",
    idealFor: "Agile city commuting, tight parking, and quick daily errands",
    description:
      "India's iconic hatchback balances spirited agility with class-leading urban fuel efficiency. Its compact external footprint makes tight metro traffic and parallel parking effortless, while the refreshed interior provides all modern essentials.",
    features: [
      "Lightweight, responsive electric power steering",
      "SmartPlay touchscreen audio with smartphone sync",
      "Automatic climate control with pollen filter",
      "Electrically adjustable & foldable outside mirrors",
      "ABS with EBD and brake assist",
      "Keyless entry with push-button engine start",
    ],
    useCases: [
      {
        title: "Daily Metro Commuting",
        desc: "Nimble turning radius and crisp clutch action cut through peak-hour city congestion.",
      },
      {
        title: "City Shopping & Errands",
        desc: "Effortlessly fits into compact street parking and multi-level shopping complex ramps.",
      },
      {
        title: "Single-Day Outstation Drives",
        desc: "Pleasant driving dynamics and responsive acceleration for quick day-trips.",
      },
    ],
    faqs: [
      {
        question: "Is there a daily mileage limit?",
        answer:
          "Rental packages typically offer standard daily allowances (e.g., 250 km/day). Additional distance is calculated on a transparent per-kilometre tariff.",
      },
      {
        question: "Can I take this car across state borders?",
        answer:
          "Yes, all fleet vehicles carry national transport permits. Applicable state border taxes or toll booth levies are settled directly at toll plazas.",
      },
      {
        question: "What is the minimum age requirement?",
        answer:
          "The hirer must be at least 21 years of age and possess an active, non-learner driving licence.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-swift.jpg",
        alt: "Maruti Suzuki Swift metallic red exterior view on cafe avenue",
        caption: "Urban Exterior — Dynamic Front Fascia & Sculpted Silhouette",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Maruti Swift modern cockpit with digital display",
        caption: "Cockpit Focus — Intuitive Controls & Connected Infotainment",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Maruti Swift rear cargo boot compartment",
        caption: "Luggage Space — Practical Urban Boot Capacity",
      },
    ],
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
    fuelType: "Petrol (1.2L Kappa)",
    luggage: "2 Medium Suitcases + 2 Backpacks",
    pricePerDay: 1900,
    priceFormatted: "₹1,900",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-i20.jpg",
    alt: "Deep celestial blue Hyundai i20 parked outside a contemporary corporate building",
    idealFor: "Effortless urban driving with premium digital conveniences",
    description:
      "A premium European-inspired hatchback with a wide, grounded stance and an upscale cabin. Featuring a seamless IVT automatic transmission and acoustic sound insulation, the i20 offers relaxed motoring for discerning city professionals.",
    features: [
      "Smooth Intelligent Variable Transmission (IVT)",
      "High-definition 10.25-inch touchscreen infotainment",
      "Digital driver supervision cluster with route prompts",
      "Rear seat comfort with dedicated A/C vents",
      "Electronic stability control (ESC) & Hill-start assist",
      "Acoustic windshield glass for reduced road noise",
    ],
    useCases: [
      {
        title: "Executive City Mobility",
        desc: "Refined aesthetics make an understated impression at business meetings and corporate tech parks.",
      },
      {
        title: "Stop-and-Go Traffic Relief",
        desc: "Two-pedal IVT automatic eliminates driver fatigue on congested arterial routes.",
      },
      {
        title: "Weekend Getaways",
        desc: "Supple high-speed damping delivers composed highway manners at expressway speeds.",
      },
    ],
    faqs: [
      {
        question: "Does the car come with fastag installed?",
        answer:
          "Yes, all Urban Motion vehicles are fitted with active electronic FASTag tags for seamless highway toll crossings.",
      },
      {
        question: "Is road assistance available round-the-clock?",
        answer:
          "24/7 dedicated roadside support is included across all rental reservations for complete peace of mind.",
      },
      {
        question: "Can I extend my rental period during the trip?",
        answer:
          "Extensions are subject to vehicle availability. Please inform the concierge team at least 6 hours before scheduled return.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-i20.jpg",
        alt: "Hyundai i20 exterior in deep celestial blue outside tech building",
        caption: "Sensuous Sportiness — European Proportions & Modern Lighting",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Hyundai i20 driver cockpit with widescreen infotainment",
        caption: "Interior Craft — Wide Digital Display & Minimalist Dash",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Hyundai i20 rear luggage space with weekend luggage",
        caption: "Cargo Compartment — Deep Flat Floor for Travel Bags",
      },
    ],
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
    ac: "Dual-zone Automatic Climate Control",
    fuelType: "Petrol Turbo",
    luggage: "3 Large Suitcases + 2 Carry-ons",
    pricePerDay: 3000,
    priceFormatted: "₹3,000",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-verna.jpg",
    alt: "Metallic silver Hyundai Verna executive sedan parked in front of The Claridges New Delhi",
    idealFor: "Corporate travel, airport hospitality, and express highway comfort",
    description:
      "A flagship mid-size executive sedan that blends fastback architectural lines with generous rear legroom and responsive turbocharged performance. Built for professionals who value road presence, long-wheelbase ride stability, and cabin quietness.",
    features: [
      "Turbocharged powertrain with dual-clutch transmission",
      "Ventilated front seating for tropical climates",
      "Electric sunroof with one-touch operation",
      "Class-leading 528-litre deep trunk capacity",
      "All-wheel disc brakes with ABS & electronic stability",
      "Rear sunblind and ambient interior lighting",
    ],
    useCases: [
      {
        title: "Interstate Business Travel",
        desc: "Quiet NVH insulation and planted high-speed stability ensure you arrive fresh and composed.",
      },
      {
        title: "VIP Airport Hospitality",
        desc: "Generous rear knee-room and massive trunk easily swallow extensive overseas luggage.",
      },
      {
        title: "Special Occasions & Dinners",
        desc: "Striking parametric LED lighting and executive styling make a memorable entrance.",
      },
    ],
    faqs: [
      {
        question: "Can I request a chauffeur instead of self-drive?",
        answer:
          "Yes, Urban Motion offers both verified self-drive rentals and uniformed professional chauffeur services upon request.",
      },
      {
        question: "Are child seats available?",
        answer:
          "Certified ISOFIX child safety seats can be requested in advance during the WhatsApp booking confirmation.",
      },
      {
        question: "What happens in the event of a mechanical breakdown?",
        answer:
          "Our 24/7 concierge will dispatch a mobile support technician or coordinate an immediate replacement vehicle.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-verna.jpg",
        alt: "Hyundai Verna silver executive sedan outside The Claridges New Delhi",
        caption: "Executive Stance — Fastback Profile & Distinctive LED Light Bar",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Hyundai Verna cockpit featuring dual digital screens",
        caption: "Executive Cockpit — Seamless Curved Display & Ambient Lighting",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Hyundai Verna wide trunk with travel luggage",
        caption: "Executive Trunk — Class-leading 528-litre Cargo Capacity",
      },
    ],
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
    fuelType: "Petrol (K-Series DualJet)",
    luggage: "2 Large Suitcases + 2 Medium Bags",
    pricePerDay: 1800,
    priceFormatted: "₹1,800",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-dzire.jpg",
    alt: "Magma grey Maruti Suzuki Dzire parked on a quiet residential avenue in Gurgaon",
    idealFor: "Economical sedan comfort with generous boot capacity",
    description:
      "India's best-selling compact sedan delivers the ideal balance between low running cost, supple rear-seat ride comfort, and a dedicated 378-litre boot. An unpretentious, reliable choice for family outings and business trips alike.",
    features: [
      "Rear seat air-conditioning vents with 12V charging socket",
      "SmartPlay Pro audio with voice command support",
      "Precision dual-tone alloy wheels",
      "Generous boot space for outstation suitcases",
      "Dual front airbags & ISOFIX child restraint system",
      "High fuel efficiency for cost-conscious itineraries",
    ],
    useCases: [
      {
        title: "Airport Transfers & Station Pickups",
        desc: "Dedicated enclosed boot keeps luggage secure and out of sight from prying eyes.",
      },
      {
        title: "Extended Multi-day Rentals",
        desc: "Outstanding fuel economy significantly reduces your total travel expense.",
      },
      {
        title: "Family City Outings",
        desc: "Generous rear bench angle and dedicated rear A/C vents keep family passengers relaxed.",
      },
    ],
    faqs: [
      {
        question: "Is this car suitable for hill driving?",
        answer:
          "Yes, the K-Series DualJet engine provides ample low-end torque for standard hill station routes like Shimla or Ooty.",
      },
      {
        question: "How clean will the vehicle be upon handover?",
        answer:
          "Every car undergoes complete exterior waterless wash and high-touch interior sanitisation before dispatch.",
      },
      {
        question: "Can I collect the vehicle from one city and drop in another?",
        answer:
          "One-way inter-city rentals are available between select hub locations upon prior coordination.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-dzire.jpg",
        alt: "Maruti Suzuki Dzire compact sedan exterior in magma grey",
        caption: "Compact Elegance — Classic 3-box Sedan Proportions & Chrome Grille",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Maruti Dzire interior dashboard and steering wheel",
        caption: "Functional Ergonomics — Dual-tone Cabin & Clear Gauges",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Maruti Dzire enclosed luggage boot with travel bags",
        caption: "Dedicated Boot — 378 Litres of Flat Floor Space",
      },
    ],
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
    fuelType: "Petrol Hybrid (Smart Hybrid)",
    luggage: "3 Medium Bags + Camping Gear",
    pricePerDay: 2600,
    priceFormatted: "₹2,600",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-brezza.jpg",
    alt: "Dual-tone white and black Maruti Suzuki Brezza SUV parked outside a Himalayan mountain retreat",
    idealFor: "High-ground-clearance highway tours and scenic mountain getaways",
    description:
      "A rugged, confidence-inspiring compact SUV built for diverse Indian terrain. Featuring 200mm ground clearance, robust body cladding, and a refined 1.5-litre Smart Hybrid engine, the Brezza masters broken tarmac, monsoon downpours, and mountain climbs.",
    features: [
      "200mm high ground clearance for rough tarmac & speed humps",
      "Paddle shifters for engaging manual control in the hills",
      "Head-up display and 360-degree parking camera",
      "Wireless Android Auto & Apple CarPlay sync",
      "Electronic stability program (ESP) & Hill-hold assist",
      "Dual-tone roof with functional luggage roof rails",
    ],
    useCases: [
      {
        title: "Mountain Getaways & Hill Stations",
        desc: "Plentiful ground clearance and paddle shifters make hill station climbs safe and enjoyable.",
      },
      {
        title: "Monsoon & Rough Road Touring",
        desc: "High approach angles and wide tyres easily shrug off waterlogged or potholed sections.",
      },
      {
        title: "Outdoor Camping & Leisure",
        desc: "Versatile 60:40 split-folding rear seats expand cargo room for tents and sports gear.",
      },
    ],
    faqs: [
      {
        question: "Is this car four-wheel drive (4x4)?",
        answer:
          "The Brezza is a front-wheel-drive compact SUV with high ground clearance, ideal for highway, hill road, and light trail usage.",
      },
      {
        question: "Are luggage roof carriers permitted?",
        answer:
          "Functional roof rails are fitted. Any exterior luggage must comply with local motor vehicle regulations.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellations made at least 24 hours prior to scheduled delivery are eligible for full refund or rescheduling credits.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-brezza.jpg",
        alt: "Maruti Suzuki Brezza compact SUV in front of Himalayan mountains",
        caption: "Rugged Stance — 200mm Ground Clearance & Dual-tone Floating Roof",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Maruti Brezza driver view and high seating dashboard",
        caption: "Commanding Position — High Eye-level & 360 Camera View",
      },
      {
        src: "/images/gallery-luggage.jpg",
        alt: "Maruti Brezza luggage boot with weekend duffel bags",
        caption: "Versatile Cargo — Split-folding Rear Bench for Outdoor Gear",
      },
    ],
  },
];

/**
 * Helper to build a vehicle-specific WhatsApp enquiry URL
 */
export function getVehicleWhatsappUrl(vehicleName: string): string {
  const message = `Hello Urban Motion, I would like to enquire about renting the ${vehicleName} for my upcoming journey.`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

/**
 * Retrieve single vehicle by its URL slug
 */
export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return FLEET_VEHICLES.find((v) => v.slug.toLowerCase() === slug.toLowerCase());
}

/**
 * Retrieve all valid vehicle slugs for static generation
 */
export function getAllVehicleSlugs(): string[] {
  return FLEET_VEHICLES.map((v) => v.slug);
}

/**
 * Retrieve 3 related vehicles, excluding current slug
 */
export function getRelatedVehicles(currentSlug: string, count: number = 3): Vehicle[] {
  return FLEET_VEHICLES.filter(
    (v) => v.slug.toLowerCase() !== currentSlug.toLowerCase()
  ).slice(0, count);
}
