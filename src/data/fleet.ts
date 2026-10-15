export type VehicleCategory = "all" | "suvs" | "sedans" | "mpvs" | "hatchbacks";

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
  category: "hatchbacks" | "sedans" | "suvs" | "mpvs";
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
  { id: "all", label: "All Vehicles" },
  { id: "suvs", label: "SUVs & 4x4" },
  { id: "sedans", label: "Sedans" },
  { id: "mpvs", label: "7-Seaters & MPVs" },
  { id: "hatchbacks", label: "Hatchbacks" },
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
        src: "/images/fleet-creta-rear.jpg",
        alt: "Hyundai Creta rear three-quarter view showing full-width connected LED lightbar and urban stance",
        caption: "Rear Profile & Tailgate — Connected LED Lightbar & Signature Urban Stance",
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
        src: "/images/fleet-swift-rear.jpg",
        alt: "Maruti Suzuki Swift rear three-quarter view showing compact hatchback tailgate and roof spoiler",
        caption: "Rear Profile & Tailgate — Compact Hatchback Silhouette & Sporty Roof Spoiler",
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
        src: "/images/fleet-i20-rear.jpg",
        alt: "Hyundai i20 rear three-quarter view showing sharp Z-shaped connected LED tail lamps and rear diffuser",
        caption: "Rear Profile & Diffuser — Z-Shaped Connected LED Tail Lamps & Aerodynamic Fin",
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
        src: "/images/fleet-verna-rear.jpg",
        alt: "Hyundai Verna executive fastback sedan rear view showing futuristic parametric horizontal lightbar",
        caption: "Rear Profile & Fastback Trunk — Parametric Full-Width Horizontal Lightbar",
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
        src: "/images/fleet-dzire-rear.jpg",
        alt: "Maruti Suzuki Dzire compact sedan rear view showing chrome boot lid garnish and 3D LED combination lamps",
        caption: "Rear Profile & Boot Lid — Chrome Garnish, 3D LED Combination Lamps & 378L Trunk",
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
        src: "/images/fleet-brezza-rear.jpg",
        alt: "Maruti Suzuki Brezza compact SUV rear view showing dual-tone contrast roof and slim LED tail lamps",
        caption: "Rear Profile & Skid Plate — Dual-Tone Roof, Slim LED Lamps & Brezza Lettering",
      },
    ],
  },
  {
    id: "innova-crysta",
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    subtitle: "2.4L GD Turbo Diesel • VX / ZX 7-Seater",
    category: "mpvs",
    categoryLabel: "7-Seater MPV",
    capacity: "7 Passengers",
    transmission: "6-Speed Automatic & Manual",
    ac: "Tri-Zone Automatic AC with Roof Vents",
    fuelType: "Diesel (2.4L GD Turbo)",
    luggage: "4 Large Suitcases + Soft Bags",
    pricePerDay: 3800,
    priceFormatted: "₹3,800",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-innova.jpg",
    alt: "Metallic bronze-gold Toyota Innova Crysta luxury 7-seater MPV parked in front of palace pavilion",
    idealFor: "Flagship family vacations, VIP corporate transit, and long-distance inter-city touring",
    description:
      "The undisputed gold standard of Indian highway touring. Featuring plush second-row captain chairs, bulletproof 2.4-litre diesel durability, and whisper-quiet suspension compliance, the Innova Crysta turns multi-day journeys into effortless first-class travel.",
    features: [
      "Second-Row Ergonomic Captain Recliner Seats",
      "Tri-Zone Independent Air Conditioning with Roof Vents",
      "2.4L GD Intercooled Turbo Diesel with Eco/Power Modes",
      "7 Airbags, Vehicle Stability Control & Hill-Start Assist",
      "One-Touch Tumble 3rd-Row for Extended Cargo",
      "Highway FASTag Electronic Toll Integration",
    ],
    useCases: [
      {
        title: "Family Golden Triangle & Hill Road Trips",
        desc: "Seven adults travel in supreme comfort without compromising on legroom, luggage, or ride plushness.",
      },
      {
        title: "Corporate & Executive Delegation",
        desc: "Spacious, discreet, and refined transit between airports, business hubs, and luxury hotels.",
      },
      {
        title: "Wedding & Special Event Concierge",
        desc: "Dependable group mobility ensuring guests and family arrive relaxed and on schedule.",
      },
    ],
    faqs: [
      {
        question: "Is the 3rd row comfortable for adults on long drives?",
        answer:
          "Yes, the Innova Crysta features genuine three-row architecture with dedicated reclining backs and roof-mounted A/C vents for the rearmost passengers.",
      },
      {
        question: "Does the vehicle require commercial driving permits?",
        answer:
          "Our self-drive Innova Crysta units operate on legal Indian self-drive white-on-black registration plates, drivable with a standard LMV driving licence.",
      },
      {
        question: "What is the fuel policy?",
        answer:
          "Vehicles are handed over with a verified fuel level and simply returned at the same level upon trip completion.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-innova.jpg",
        alt: "Toyota Innova Crysta 7-seater MPV in palace driveway",
        caption: "Flagship Stance — Refined Chrome Grille & Sculpted Road Presence",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Toyota Innova Crysta driver cockpit and steering console",
        caption: "Driver Ergonomics — High Seating View & Intuitive Touchscreen Infotainment",
      },
      {
        src: "/images/fleet-innova-rear.jpg",
        alt: "Toyota Innova Crysta luxury 7-seater MPV rear view showing inverted L-shaped tail lamps and Crysta chrome garnish",
        caption: "Rear Profile & 7-Seater Tailgate — Inverted L-Shaped Lamps & Chrome Crysta Garnish",
      },
    ],
  },
  {
    id: "scorpio-n-z8",
    slug: "mahindra-scorpio-n",
    name: "Mahindra Scorpio-N",
    subtitle: "2.2L mHawk Turbo Diesel • Z8L 4x4",
    category: "suvs",
    categoryLabel: "Full-Size SUV",
    capacity: "7 Passengers",
    transmission: "6-Speed Torque Converter Automatic",
    ac: "Dual-Zone Automatic Climate Control",
    fuelType: "Diesel (2.2L mHawk 175 PS)",
    luggage: "3 Large Bags + Weekend Duffles",
    pricePerDay: 3500,
    priceFormatted: "₹3,500",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-scorpio.jpg",
    alt: "Metallic midnight black Mahindra Scorpio-N SUV parked on scenic mountain highway in Western Ghats",
    idealFor: "Mountain passes, monsoon highway road trips, and rugged terrain exploration",
    description:
      "A commanding full-size body-on-frame SUV engineered for uncompromising road presence. Powered by Mahindra's potent 175 PS mHawk diesel engine paired with advanced frequency-selective damping, the Scorpio-N devours bad roads, steep gradients, and highway miles with supreme confidence.",
    features: [
      "175 PS / 400 Nm 2.2L mHawk All-Aluminium Diesel Engine",
      "4XPLOR Intelligent Terrain Management with Low Range",
      "Pentalink Rear Suspension with Watt's Linkage",
      "Sony 12-Speaker 3D Surround Audio Architecture",
      "Electric Sunroof & Wireless Phone Charging",
      "5-Star Global NCAP Adult Safety Rating",
    ],
    useCases: [
      {
        title: "Western Ghats & Monsoon Expeditions",
        desc: "Tackle heavy rains, flooded road dips, and twisty mountain ghats with confidence.",
      },
      {
        title: "Himalayan Circuit Touring",
        desc: "High 187mm ground clearance and muscular low-end torque make high-altitude climbs effortless.",
      },
      {
        title: "High-Presence Urban Commuting",
        desc: "Commanding driver eye-level and imposing road stance grant effortless authority in city traffic.",
      },
    ],
    faqs: [
      {
        question: "Is this 4x4 automatic model suitable for snow and mud?",
        answer:
          "Yes, the Z8L 4XPLOR system includes selectable Terrain Modes (Grass/Gravel/Snow, Mud/Ruts, and Sand) along with low-range transfer case locks.",
      },
      {
        question: "What type of fuel does this SUV require?",
        answer:
          "Standard ultra-low sulphur diesel (BS6 compliant). Active DEF levels are checked and verified before every dispatch.",
      },
      {
        question: "Is there 24x7 roadside assistance included?",
        answer:
          "Yes, comprehensive pan-India roadside assistance (towing, flat tyre, jump start) is included with all Urban Motion rentals.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-scorpio.jpg",
        alt: "Mahindra Scorpio-N midnight black SUV in misty Western Ghats",
        caption: "Commanding Stance — Muscular Silhouette & Signature Chrome Grille",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Mahindra Scorpio-N cockpit with digital dials and leatherette steering",
        caption: "Premium Cockpit — Coffee-Black Leatherette & High Driving Position",
      },
      {
        src: "/images/fleet-scorpio-rear.jpg",
        alt: "Mahindra Scorpio-N 4x4 SUV rear view showing tall vertical D-pillar LED lamps and side-hinged door",
        caption: "Rear Profile & Side Tailgate — Vertical D-Pillar LED Lamps & Scorpio-N Badging",
      },
    ],
  },
  {
    id: "honda-city-zx",
    slug: "honda-city",
    name: "Honda City",
    subtitle: "1.5L i-VTEC Petrol • ZX CVT Automatic",
    category: "sedans",
    categoryLabel: "Executive Sedan",
    capacity: "5 Passengers",
    transmission: "7-Speed Stepped CVT with Paddle Shift",
    ac: "Automatic Climate Control with Rear Vents",
    fuelType: "Petrol (1.5L i-VTEC DOHC)",
    luggage: "506 Litres Boot Space",
    pricePerDay: 2700,
    priceFormatted: "₹2,700",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-hondacity.jpg",
    alt: "Pearl white Honda City executive sedan parked outside corporate pavilion in Gurgaon Cyber City",
    idealFor: "Executive corporate itineraries, intercity expressways, and refined family touring",
    description:
      "The benchmark of Japanese automotive sophistication in India. Renowned for its silky-smooth 1.5-litre i-VTEC engine, class-leading rear sofa-like legroom, and an immense 506-litre trunk, the Honda City delivers poise, efficiency, and timeless executive grace.",
    features: [
      "1.5L DOHC i-VTEC Engine delivering 121 PS of Linear Power",
      "7-Speed Stepped CVT with Steering Paddle Shifters",
      "Honda Sensing ADAS with Adaptive Cruise Control",
      "Class-Leading 506-Litre Enclosed Boot Volume",
      "One-Touch Electric Sunroof & Ambient Lighting",
      "LaneWatch Blind Spot Camera Display",
    ],
    useCases: [
      {
        title: "Intercity Expressway Cruising",
        desc: "Cruise the Delhi-Mumbai or Bangalore-Mysore Expressways with whisper-quiet cabin acoustics.",
      },
      {
        title: "Executive Business Commuting",
        desc: "Generous rear legroom allows business travellers to work comfortably while on the move.",
      },
      {
        title: "Airport Transit & Hotel Transfers",
        desc: "The huge 506L trunk easily swallows family international luggage without compromising seating space.",
      },
    ],
    faqs: [
      {
        question: "How comfortable is the rear seat for elderly passengers?",
        answer:
          "The Honda City is widely acclaimed for having the most comfortable, well-cushioned rear bench with optimal thigh support in its segment.",
      },
      {
        question: "Does this vehicle feature Cruise Control for highway travel?",
        answer:
          "Yes, this ZX model includes Honda Sensing with Adaptive Cruise Control and Lane Keep Assist for effortless highway driving.",
      },
      {
        question: "What documents are required to hire this car?",
        answer:
          "Valid Indian driving licence (or International Driving Permit), government photo ID (Aadhaar or Passport), and a security deposit verification.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-hondacity.jpg",
        alt: "Honda City pearl white sedan in modern Cyber City courtyard",
        caption: "Aerodynamic Grace — Full LED Headlamps & Sharp Character Lines",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Honda City interior dashboard and steering wheel",
        caption: "Ergonomic Cabin — Soft-Touch Leatherette & Digital Instrument Cluster",
      },
      {
        src: "/images/fleet-hondacity-rear.jpg",
        alt: "Honda City executive sedan rear view showing 3D wrap-around Z-shaped LED tail lamps and aerodynamic boot lip",
        caption: "Rear Profile & Sedan Trunk — 3D Z-Shaped Wrap-Around LED Tail Lamps & 506L Boot",
      },
    ],
  },
  {
    id: "tata-nexon-fearless",
    slug: "tata-nexon",
    name: "Tata Nexon",
    subtitle: "1.2L Turbocharged Revotron • Fearless+ DCA",
    category: "suvs",
    categoryLabel: "Compact SUV",
    capacity: "5 Passengers",
    transmission: "7-Speed Wet-Clutch DCA Automatic",
    ac: "Automatic Temperature Control with Air Purifier",
    fuelType: "Turbo Petrol (1.2L Revotron 120 PS)",
    luggage: "382 Litres Boot Space",
    pricePerDay: 2400,
    priceFormatted: "₹2,400",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-nexon.jpg",
    alt: "Teal blue Tata Nexon compact SUV on scenic highway viewpoint at golden hour",
    idealFor: "Urban commuting, coastal road trips, and safety-conscious weekend travel",
    description:
      "India's safety benchmark with a 5-Star BNCAP crash rating. Combining an energetic 120 PS turbo-petrol motor, high 208mm ground clearance, and a futuristic bi-LED digital cabin, the Nexon masters both bustling city lanes and unpredictable country highways.",
    features: [
      "5-Star Bharat NCAP & Global NCAP Certified Safety Shell",
      "7-Speed Dual-Clutch Automatic with E-Shifter",
      "High 208mm Ground Clearance with 350mm Water Wading",
      "10.25-Inch Touchscreen Infotainment with Wireless CarPlay",
      "360-Degree Surround View HD Camera",
      "Drive Modes: Eco, City, and Sport with Distinct Throttling",
    ],
    useCases: [
      {
        title: "Daily Urban Navigation",
        desc: "High eye-level and 360-degree cameras make parking and tight city alleyways a breeze.",
      },
      {
        title: "Monsoon Coastal Drives",
        desc: "208mm ground clearance ensures waterlogged sections and broken roads cause zero anxiety.",
      },
      {
        title: "Couple & Small Family Getaways",
        desc: "Spacious 5-seater layout with 382L luggage room for weekend camping or hill getaways.",
      },
    ],
    faqs: [
      {
        question: "How safe is the Tata Nexon for highway trips?",
        answer:
          "The Nexon is one of India's highest safety-rated vehicles, equipped with 6 airbags as standard, ESP, roll-over mitigation, and a reinforced steel passenger cell.",
      },
      {
        question: "Can I connect Apple CarPlay or Android Auto wirelessly?",
        answer:
          "Yes, the 10.25-inch high-resolution infotainment system supports wireless Apple CarPlay and Android Auto seamlessly.",
      },
      {
        question: "Is there an allowance for extra kilometers?",
        answer:
          "Daily rentals include standard daily running allowances. Extended distance packages can be customized directly during WhatsApp enquiry.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-nexon.jpg",
        alt: "Tata Nexon teal blue SUV at golden hour scenic viewpoint",
        caption: "Futuristic Architecture — Signature Bi-LED Headlamps & High Ground Clearance",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Tata Nexon cockpit and digital instrument cluster",
        caption: "Digital Cockpit — Twin 10.25-Inch Screens & Two-Spoke Backlit Steering",
      },
      {
        src: "/images/fleet-nexon-rear.jpg",
        alt: "Tata Nexon compact SUV rear view showing connected X-factor LED lightbar and dual-tone bumper",
        caption: "Rear Profile & Aerodynamic Wing — Connected X-Factor Lightbar & Dual-Tone Bumper",
      },
    ],
  },
  {
    id: "ertiga-zxi",
    slug: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    subtitle: "1.5L K15C Smart Hybrid • ZXi Automatic",
    category: "mpvs",
    categoryLabel: "7-Seater MPV",
    capacity: "7 Passengers",
    transmission: "6-Speed Automatic with Paddle Shift",
    ac: "Automatic Climate Control with Roof Vents",
    fuelType: "Petrol (Smart Hybrid DualJet)",
    luggage: "209L to 550L (Expandable 3rd Row)",
    pricePerDay: 2500,
    priceFormatted: "₹2,500",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-ertiga.jpg",
    alt: "Metallic silver Maruti Suzuki Ertiga 7-seater MPV outside modern airport terminal",
    idealFor: "Budget-smart family holidays, airport transfers, and multi-generational city outings",
    description:
      "The smart, highly economical people-mover designed for hassle-free group mobility. Offering genuine 3-row comfort, breezy cabin cooling, and an ultra-refined 1.5-litre Smart Hybrid powertrain, the Ertiga is the go-to choice for effortless family journeys.",
    features: [
      "Smart Hybrid DualJet Engine delivering Outstanding Efficiency",
      "Flexible 3-Row Seating with One-Touch Slide & Recline",
      "Roof-Mounted Rear A/C with Independent 3-Speed Fan Control",
      "Paddle Shifter Manual Override on Automatic Transmission",
      "7-Inch SmartPlay Pro Infotainment with Smartphone Link",
      "Keyless Entry & Push-Button Start/Stop",
    ],
    useCases: [
      {
        title: "Airport Pickup & Drop Coordination",
        desc: "Generous passenger room and flat-folding 3rd-row seats effortlessly handle family airport transit.",
      },
      {
        title: "Family Sightseeing & City Tours",
        desc: "Nimble turning radius and light controls make navigating crowded historic city streets effortless.",
      },
      {
        title: "Weekend Outstation Excursions",
        desc: "Economical fuel consumption and reliable highway manners keep group road trips easy on the wallet.",
      },
    ],
    faqs: [
      {
        question: "Can all 7 seats fit adults comfortably?",
        answer:
          "Yes, the sliding 2nd row allows optimal legroom adjustment so that adult passengers in all three rows travel comfortably.",
      },
      {
        question: "Is the A/C effective in peak summer heat?",
        answer:
          "The Ertiga features separate roof-mounted cooling blowers that direct chilled air directly to the 2nd and 3rd row passengers.",
      },
      {
        question: "Can luggage fit with all 7 seats up?",
        answer:
          "With all 7 seats up, there is 209 litres for soft duffel bags. When traveling with fewer passengers, folding the 50:50 3rd row creates 550 litres of flat luggage space.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-ertiga.jpg",
        alt: "Maruti Suzuki Ertiga 7-seater MPV at airport terminal",
        caption: "Clean Aerodynamic Profile — Chrome Wing Grille & Wide Aperture Doors",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Maruti Ertiga dashboard and multi-function steering",
        caption: "Airy Dual-Tone Cabin — Teak Wood Accents & Crisp Instrument Dials",
      },
      {
        src: "/images/fleet-ertiga-rear.jpg",
        alt: "Maruti Suzuki Ertiga 7-seater MPV rear view showing tall 3D LED tail lamps and wide luggage aperture",
        caption: "Rear Profile & 7-Seater Tailgate — Tall 3D LED Tail Lamps & Wide Luggage Aperture",
      },
    ],
  },
  {
    id: "thar-lx-hardtop",
    slug: "mahindra-thar",
    name: "Mahindra Thar 4x4",
    subtitle: "2.0L mStallion Turbo Petrol • LX Hardtop 4x4",
    category: "suvs",
    categoryLabel: "Adventure 4x4",
    capacity: "4 Passengers",
    transmission: "6-Speed Automatic 4WD with Low Range",
    ac: "Electronic Automatic Climate Control",
    fuelType: "Turbo Petrol (2.0L mStallion 150 PS)",
    luggage: "2 Medium Duffles + Adventure Backpacks",
    pricePerDay: 3200,
    priceFormatted: "₹3,200",
    priceNote: "Indicative sample rate per 24h cycle",
    isFeatured: false,
    imageSrc: "/images/fleet-thar.jpg",
    alt: "Glossy black Mahindra Thar 4x4 hardtop SUV on scenic coastal dirt overlook in Goa India",
    idealFor: "Goa coastal road trips, off-beat trails, scenic hill exploration, and experiential adventure",
    description:
      "India's definitive 4x4 adventure icon. With its bold upright silhouette, true mechanical transfer case with low range, washable interior flooring, and punchy 150 PS turbo petrol power, the Thar turns every road trip into an unforgettable story.",
    features: [
      "Authentic Shift-on-Fly 4WD with Mechanical Low-Range (4L)",
      "Factory-Fitted Molded Factory Hardtop for Weather Insulation",
      "IP54 Water & Dust Resistant Interior Switches & Infotainment",
      "Heavy-Duty All-Terrain Wheels with 226mm Ground Clearance",
      "Electronic Brake Locking Differential (BLD)",
      "4-Star Global NCAP Adult Safety Certified Rating",
    ],
    useCases: [
      {
        title: "Goa & Coastal Exploration",
        desc: "Unmatched personality cruising palm-lined coastal roads and sandy trail approaches.",
      },
      {
        title: "Rajasthan & Desert Expeditions",
        desc: "Tackle soft gravel, desert trails, and undulating rural tracks with ease.",
      },
      {
        title: "Himalayan Weekend Escapes",
        desc: "High clearance and rugged 4x4 mechanicals tackle unexpected landslides, slush, and snowfall.",
      },
    ],
    faqs: [
      {
        question: "Is this Thar hardtop or soft-top?",
        answer:
          "All Urban Motion rental units are factory-fitted insulated Hardtop models with full air-conditioning and electronic power windows for safety and comfort.",
      },
      {
        question: "Can four adults sit comfortably?",
        answer:
          "Yes, this is the modern generation Thar with individual forward-facing rear seats with three-point seatbelts and ISOFIX mounts.",
      },
      {
        question: "Are automatic transmission models available?",
        answer:
          "Yes, this model features a 6-speed torque-converter automatic paired with the refined 2.0L mStallion turbo petrol engine.",
      },
    ],
    gallery: [
      {
        src: "/images/fleet-thar.jpg",
        alt: "Mahindra Thar 4x4 in Goa sunset overlook",
        caption: "Iconic Silhouette — Round LED Headlamps & High Ground Clearance",
      },
      {
        src: "/images/gallery-cockpit.jpg",
        alt: "Mahindra Thar driver cockpit and 4WD transfer lever",
        caption: "Adventure Cockpit — Washable Floor, 4WD Lever & Adventure Dials",
      },
      {
        src: "/images/fleet-thar-rear.jpg",
        alt: "Mahindra Thar 4x4 rugged SUV rear view showing tailgate-mounted full-size spare wheel and boxy hardtop",
        caption: "Rear Profile & 4x4 Tailgate — Mounted Full-Size Spare Wheel & Boxy Hardtop Silhouette",
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
