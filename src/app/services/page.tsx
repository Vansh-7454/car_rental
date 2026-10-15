import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import { getVehicleWhatsappUrl } from "@/data/fleet";
import styles from "./Services.module.css";

export const metadata: Metadata = {
  title: `Car Rental Services — ${siteConfig.brandName} | How We Help You Move`,
  description:
    "Explore Urban Motion car rental services for city commuting, weekend getaways, family travel, airport transit, and outstation trips across India.",
  openGraph: {
    title: `Car Rental Services — ${siteConfig.brandName}`,
    description:
      "Every journey deserves the right drive. Reliable self-drive rental services tailored to city journeys, weekend road trips, and executive travel.",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Executive sedan parked along a scenic Indian expressway overlooking misty hills",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <a href="#services-main-content" className="skip-to-content">
        Skip to services content
      </a>

      <Navbar />

      <main id="services-main-content" className={styles.mainContainer}>
        {/* Breadcrumb Navigation */}
        <div className={`container ${styles.breadcrumbContainer}`}>
          <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
            <ol className={styles.breadcrumbList}>
              <li className={styles.breadcrumbItem}>
                <Link href="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span className={styles.breadcrumbDivider} aria-hidden="true">
                  /
                </span>
              </li>
              <li
                className={`${styles.breadcrumbItem} ${styles.breadcrumbActive}`}
                aria-current="page"
              >
                Services
              </li>
            </ol>
          </nav>
        </div>

        {/* 1. Services Hero: Asymmetrical Editorial Composition */}
        <section
          className={`container ${styles.heroSection}`}
          aria-labelledby="services-hero-heading"
        >
          <div className={styles.heroContentCol}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <p className={styles.eyebrow}>HOW WE HELP YOU MOVE</p>
            </div>

            <h1
              id="services-hero-heading"
              className={`font-editorial ${styles.heroHeading}`}
            >
              Every journey deserves the right drive.
            </h1>

            <p className={styles.heroDescription}>
              Whether you need a compact hatchback for tight city streets, a
              high-ground-clearance SUV for the Western Ghats, or a quiet
              executive sedan for corporate transit, Urban Motion provides
              well-maintained self-drive vehicles tailored to your specific
              itinerary.
            </p>

            <div className={styles.heroActionsRow}>
              <Link href="/#fleet" className={styles.primaryFleetBtn}>
                <span>Explore Our Fleet</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.btnArrow}
                  aria-hidden="true"
                >
                  <path d="M4 10h12m-6-6 6 6-6 6" />
                </svg>
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryWhatsappBtn}
                aria-label="Enquire about services on WhatsApp (opens in new tab)"
              >
                <svg
                  className={styles.whatsappIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className={styles.heroVisualCol}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/images/services-hero.jpg"
                alt="Executive sedan parked stationary on the paved shoulder of an expressway overlooking misty hills"
                width={1280}
                height={720}
                priority
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className={styles.heroImageCaption}>
                <span className={styles.captionHighlight}>Expressway Overlook</span>
                <span className={styles.captionText}>
                  Poised for Highway Distances & Scenic Escapes
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Service Categories: Varied Editorial Layout (Avoid Generic Card Grid) */}
        <section
          className={`container ${styles.categoriesSection}`}
          aria-labelledby="categories-heading"
        >
          <div className={styles.sectionHeaderBlock}>
            <p className={styles.sectionEyebrow}>TAILORED MOBILITY USE CASES</p>
            <h2
              id="categories-heading"
              className={`font-editorial ${styles.sectionHeading}`}
            >
              Curated rental services for every purpose.
            </h2>
            <p className={styles.sectionLead}>
              Choose from our established everyday use cases or enquire about
              our specialized travel services.
            </p>
          </div>

          {/* Featured Service Spotlight: Weekend Getaways & Adventure Road Trips */}
          <article className={styles.featuredServiceArticle}>
            <div className={styles.featuredServiceMedia}>
              <div className={styles.featuredBadge}>Featured Adventure Service</div>
              <Image
                src="/images/fleet-thar.jpg"
                alt="Mahindra Thar 4x4 hardtop SUV on scenic coastal dirt overlook in Goa at sunset"
                width={1000}
                height={562}
                className={styles.featuredServiceImage}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            <div className={styles.featuredServiceBody}>
              <div className={styles.serviceMeta}>
                <span className={styles.serviceIndex}>01</span>
                <span className={styles.serviceStatusCore}>Core Use Case</span>
              </div>

              <h3 className={`font-editorial ${styles.serviceTitle}`}>
                Weekend Getaways &amp; Adventure Road Trips
              </h3>

              <p className={styles.serviceText}>
                Break away from city confines with vehicles engineered for
                unbridled freedom and challenging terrain. Featuring the iconic
                Mahindra Thar 4x4, Brezza, and Tata Nexon. High ground
                clearance (200mm–226mm), all-weather factory hardtops, and
                robust mechanicals handle coastal highways, Western Ghats
                curves, and scenic trails with total confidence.
              </p>

              <div className={styles.serviceHighlightsList}>
                <div className={styles.highlightPill}>
                  ✓ Authentic 4x4 &amp; 200mm+ Ground Clearance
                </div>
                <div className={styles.highlightPill}>
                  ✓ Factory Insulated Hardtops with Powerful A/C
                </div>
                <div className={styles.highlightPill}>
                  ✓ Heavy-Duty All-Terrain Wheels &amp; Hill-Hold
                </div>
              </div>

              <div className={styles.serviceActionRow}>
                <Link
                  href="/fleet/mahindra-thar"
                  className={styles.viewVehicleBtn}
                >
                  <span>View Adventure 4x4 (Thar)</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.btnArrow}
                    aria-hidden="true"
                  >
                    <path d="M4 10h12m-6-6 6 6-6 6" />
                  </svg>
                </Link>

                <a
                  href={getVehicleWhatsappUrl("Thar 4x4 for Weekend Getaway")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappEnquireLink}
                >
                  <span>Enquire for Weekend</span>
                </a>
              </div>
            </div>
          </article>

          {/* Supporting Services Asymmetrical Grid */}
          <div className={styles.supportingServicesGrid}>
            {/* 2. City Travel */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-swift.jpg"
                  alt="Maruti Suzuki Swift hatchback parked on an urban avenue"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>City Commute</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>02</span>
                  <span className={styles.serviceStatusCore}>Core Use Case</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Daily City Travel &amp; Urban Errands
                </h3>
                <p className={styles.cardDesc}>
                  Nimble, responsive hatchbacks including the Swift and i20
                  engineered for bustling metro avenues, tight parking spots,
                  and stop-and-go morning traffic. High fuel economy with
                  effortless automatic maneuverability.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/maruti-swift"
                    className={styles.cardDetailLink}
                  >
                    <span>View Swift ZXi →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 3. 7-Seater Family Travel */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-innova.jpg"
                  alt="Toyota Innova Crysta luxury 7-seater MPV parked in front of palace pavilion"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>7-Seater MPV</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>03</span>
                  <span className={styles.serviceStatusCore}>Flagship Service</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  7-Seater Family Holidays &amp; Group Travel
                </h3>
                <p className={styles.cardDesc}>
                  Featuring the legendary Toyota Innova Crysta and Maruti
                  Ertiga. Genuine 3-row architecture, plush captain recliner
                  seating, tri-zone roof air conditioning, and deep luggage
                  capacity ensure large families and tour groups travel in
                  relaxed harmony.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/toyota-innova-crysta"
                    className={styles.cardDetailLink}
                  >
                    <span>View Innova Crysta 7-Seater →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 4. Airport Transfers */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-ertiga.jpg"
                  alt="Maruti Suzuki Ertiga 7-seater MPV outside modern airport terminal forecourt"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>Airport Service</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>04</span>
                  <span className={styles.serviceStatusCore}>Popular Service</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Airport Terminal Handover &amp; Luggage Transit
                </h3>
                <p className={styles.cardDesc}>
                  Seamless curb-side vehicle handover and return at domestic
                  and international airport terminals. Accommodates arriving
                  flight delegations, overseas travelers, and families with
                  extensive suitcases and baggage.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/maruti-ertiga"
                    className={styles.cardDetailLink}
                  >
                    <span>View Ertiga 7-Seater →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 5. Outstation Highway Expeditions */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-scorpio.jpg"
                  alt="Mahindra Scorpio-N 4x4 SUV parked on scenic mountain highway pass in Western Ghats"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>Rugged SUV</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>05</span>
                  <span className={styles.serviceStatusCore}>Long Distance</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Outstation Highway Expeditions &amp; Hills
                </h3>
                <p className={styles.cardDesc}>
                  Commanding 4x4 and high-ground-clearance SUVs including the
                  Mahindra Scorpio-N and Tata Nexon. Equipped with active
                  electronic FASTag toll devices, generous daily kilometer
                  packages, and robust suspension for long highway cruising.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/mahindra-scorpio-n"
                    className={styles.cardDetailLink}
                  >
                    <span>View Scorpio-N 4x4 →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 6. Corporate Mobility */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-hondacity.jpg"
                  alt="Pearl white Honda City executive sedan parked outside corporate pavilion in Gurgaon Cyber City"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>Executive Class</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>06</span>
                  <span className={styles.serviceStatusCore}>Business Transit</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Corporate Mobility &amp; Executive Delegation
                </h3>
                <p className={styles.cardDesc}>
                  Sophisticated executive sedans including the benchmark Honda
                  City and Hyundai Verna. Tailored self-drive rental agreements
                  for visiting executives, consultants, and business
                  delegations with consolidated GST invoicing.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/honda-city"
                    className={styles.cardDetailLink}
                  >
                    <span>View Honda City Executive →</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 3. How It Works Section: 4-Step Direct Enquiry Journey */}
        <section
          id="how-it-works"
          className={`container ${styles.howItWorksSection}`}
          aria-labelledby="how-it-works-heading"
        >
          <div className={styles.howItWorksHeader}>
            <p className={styles.sectionEyebrow}>SIMPLE & DIRECT ENQUIRY</p>
            <h2
              id="how-it-works-heading"
              className={`font-editorial ${styles.sectionHeading}`}
            >
              How our rental process works.
            </h2>
            <p className={styles.howItWorksLead}>
              We keep the process transparent and personal. Follow four simple
              steps to arrange your vehicle.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>01</span>
                <span className={styles.stepDot} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>Explore the Fleet</h3>
              <p className={styles.stepDesc}>
                Browse our verified collection of Indian-market hatchbacks,
                sedans, and compact SUVs with indicative sample tariffs.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>02</span>
                <span className={styles.stepDot} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>Choose Your Vehicle</h3>
              <p className={styles.stepDesc}>
                Match seating capacity, transmission (Automatic / Manual), and
                luggage room to your planned travel route.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>03</span>
                <span className={styles.stepDot} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>Contact on WhatsApp</h3>
              <p className={styles.stepDesc}>
                Reach our team directly on WhatsApp with your vehicle selection
                and tentative journey dates pre-filled.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>04</span>
                <span className={styles.stepDot} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>Confirm Directly</h3>
              <p className={styles.stepDesc}>
                Confirm exact vehicle availability, security deposit, delivery
                location, and documentation directly with the team.
              </p>
            </div>
          </div>

          <div className={styles.enquiryNoticeBox}>
            <span className={styles.noticeIcon} aria-hidden="true">
              ℹ️
            </span>
            <p className={styles.noticeText}>
              <strong>Direct Enquiry Model:</strong> Urban Motion operates an
              assisted concierge enquiry workflow. We do not process automated
              online payments or instant website bookings without direct
              verification of driver credentials and vehicle schedules.
            </p>
          </div>
        </section>

        {/* 4. Editorial Call to Action Banner */}
        <section
          className={`container ${styles.ctaSection}`}
          aria-labelledby="cta-heading"
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.ctaEyebrow}>START YOUR DRIVE</p>
              <h2 id="cta-heading" className={`font-editorial ${styles.ctaHeading}`}>
                Ready to plan your next journey?
              </h2>
              <p className={styles.ctaDesc}>
                Connect with our concierge team to check vehicle availability,
                request a quote, or schedule doorstep delivery for your upcoming
                trip.
              </p>
              <div className={styles.ctaButtonsGroup}>
                <Link href="/#fleet" className={styles.ctaPrimaryBtn}>
                  <span>Explore Available Fleet</span>
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondaryBtn}
                >
                  <svg
                    className={styles.whatsappIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
