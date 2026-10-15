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

          {/* Featured Service Spotlight: Weekend Getaways */}
          <article className={styles.featuredServiceArticle}>
            <div className={styles.featuredServiceMedia}>
              <div className={styles.featuredBadge}>Featured Use Case</div>
              <Image
                src="/images/fleet-brezza.jpg"
                alt="Maruti Suzuki Brezza compact SUV parked outside a Himalayan retreat"
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
                Weekend Getaways & Hill Station Tours
              </h3>

              <p className={styles.serviceText}>
                Break away from city confines with vehicles engineered for
                challenging terrain. High-ground-clearance compact SUVs and
                supple touring crossovers handle steep mountain inclines,
                unpaved scenic trails, and scenic coastal highways with total
                confidence.
              </p>

              <div className={styles.serviceHighlightsList}>
                <div className={styles.highlightPill}>
                  ✓ 200mm+ Ground Clearance Available
                </div>
                <div className={styles.highlightPill}>
                  ✓ Hill-Hold Assist & Traction Control
                </div>
                <div className={styles.highlightPill}>
                  ✓ Generous Luggage Room for Camping & Bags
                </div>
              </div>

              <div className={styles.serviceActionRow}>
                <Link
                  href="/fleet/maruti-brezza"
                  className={styles.viewVehicleBtn}
                >
                  <span>View Suitable Vehicle (Brezza)</span>
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
                  href={getVehicleWhatsappUrl("Brezza for Weekend Getaway")}
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
                  Daily City Travel & Urban Errands
                </h3>
                <p className={styles.cardDesc}>
                  Nimble, responsive hatchbacks engineered for bustling metro
                  avenues, compact parking spots, and stop-and-go morning
                  traffic. High fuel economy with effortless maneuverability.
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

            {/* 3. Family Travel */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/gallery-luggage.jpg"
                  alt="Car boot packed with family suitcases and weekend duffels"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPill}>Family Travel</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>03</span>
                  <span className={styles.serviceStatusCore}>Core Use Case</span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Family Travel & Vacation Mobility
                </h3>
                <p className={styles.cardDesc}>
                  Roomy 5-seater cabins featuring dedicated rear air-conditioning
                  vents, ISOFIX child seat anchor points, and deep trunk space
                  to ensure the entire family travels in relaxed comfort.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/hyundai-creta"
                    className={styles.cardDetailLink}
                  >
                    <span>View Creta SX(O) →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 4. Airport Transfers (Proposed Service) */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-verna.jpg"
                  alt="Executive sedan parked outside a luxury hotel pavilion"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPillProposed}>
                  Pending Confirmation
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>04</span>
                  <span className={styles.serviceStatusProposed}>
                    Proposed Service
                  </span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Airport Terminal Handover
                </h3>
                <p className={styles.cardDesc}>
                  Convenient self-drive vehicle delivery and collection at
                  airport arrival terminals.
                </p>
                <p className={styles.disclaimerPill}>
                  *Service subject to operational confirmation and airport
                  terminal delivery slots.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/hyundai-verna"
                    className={styles.cardDetailLink}
                  >
                    <span>View Verna SX →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 5. Outstation Travel (Proposed Service) */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/fleet-creta.jpg"
                  alt="Hyundai Creta compact SUV parked in an urban plaza"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPillProposed}>
                  Pending Confirmation
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>05</span>
                  <span className={styles.serviceStatusProposed}>
                    Proposed Service
                  </span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Outstation Highway Rentals
                </h3>
                <p className={styles.cardDesc}>
                  Multi-day self-drive rentals with structured daily kilometre
                  packages and active electronic FASTag toll devices.
                </p>
                <p className={styles.disclaimerPill}>
                  *State border permits and extended mileage allowances must be
                  confirmed directly upon enquiry.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/hyundai-creta"
                    className={styles.cardDetailLink}
                  >
                    <span>View Creta Details →</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* 6. Corporate Travel (Proposed Service) */}
            <article className={styles.supportingServiceCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src="/images/hero-car.jpg"
                  alt="Deep green executive sedan stationary in modern architectural courtyard"
                  width={600}
                  height={338}
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <span className={styles.cardCategoryPillProposed}>
                  Pending Confirmation
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.serviceMeta}>
                  <span className={styles.serviceIndex}>06</span>
                  <span className={styles.serviceStatusProposed}>
                    Proposed Service
                  </span>
                </div>
                <h3 className={`font-editorial ${styles.cardTitle}`}>
                  Corporate Mobility Solutions
                </h3>
                <p className={styles.cardDesc}>
                  Tailored self-drive rental agreements for visiting executives,
                  consultants, and corporate teams with consolidated GST
                  invoicing.
                </p>
                <p className={styles.disclaimerPill}>
                  *Corporate billing terms and multi-week agreements are
                  arranged directly upon request.
                </p>
                <div className={styles.cardFooter}>
                  <Link
                    href="/fleet/hyundai-verna"
                    className={styles.cardDetailLink}
                  >
                    <span>View Executive Fleet →</span>
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
