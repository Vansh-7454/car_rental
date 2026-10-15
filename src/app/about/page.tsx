import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: `About Us — ${siteConfig.brandName} | More Freedom in Every Journey`,
  description:
    "Learn about Urban Motion's commitment to straightforward car hire, thoughtful vehicle choice, and personal concierge support across India.",
  openGraph: {
    title: `About Us — ${siteConfig.brandName}`,
    description:
      "We believe getting around should feel simple. Find a car that suits your plans and make more room for the journeys that matter.",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Executive sedan parked in an elegant architectural courtyard at morning dawn",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <a href="#about-main-content" className="skip-to-content">
        Skip to about content
      </a>

      <Navbar />

      <main id="about-main-content" className={styles.mainContainer}>
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
                About Us
              </li>
            </ol>
          </nav>
        </div>

        {/* 1. About Hero Section: Distinct Editorial Composition */}
        <section
          className={`container ${styles.heroSection}`}
          aria-labelledby="about-hero-heading"
        >
          <div className={styles.heroContentCol}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <p className={styles.eyebrow}>THE STORY BEHIND THE DRIVE</p>
            </div>

            <h1
              id="about-hero-heading"
              className={`font-editorial ${styles.heroHeading}`}
            >
              More freedom in every journey.
            </h1>

            <p className={styles.heroDescription}>
              We believe getting around should feel simple. Find a car that suits
              your plans and make more room for the journeys that matter.
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
                aria-label="Enquire with Urban Motion team on WhatsApp (opens in new tab)"
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
                src="/images/about-hero.jpg"
                alt="Executive sedan parked stationary on the stone driveway of a contemporary architectural pavilion"
                width={1280}
                height={720}
                priority
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 620px"
              />
              <div className={styles.heroImageCaption}>
                <span className={styles.captionHighlight}>Architectural Haven</span>
                <span className={styles.captionText}>
                  Crafted for poise, comfort, and unhurried travel
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Brand Story: Honest, Purpose-Driven, No Invented History */}
        <section
          className={`container ${styles.storySection}`}
          aria-labelledby="brand-story-heading"
        >
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <div className={styles.sectionHeaderBlock}>
                <p className={styles.sectionEyebrow}>WHY WE EXIST</p>
                <h2
                  id="brand-story-heading"
                  className={`font-editorial ${styles.sectionHeading}`}
                >
                  Rethinking how car hire serves your travel plans.
                </h2>
              </div>

              <div className={styles.storyProse}>
                <p className={styles.proseParagraph}>
                  Urban Motion was conceived around a straightforward premise:
                  renting a car should never feel like navigating a maze of
                  confusing checkboxes, hidden surcharges, or mismatched vehicle
                  categories.
                </p>

                <p className={styles.proseParagraph}>
                  Whether you are planning an early morning dash across town, a
                  rejuvenating weekend retreat into the hills, or an extended
                  multi-day family journey, the vehicle you drive shapes the
                  entire character of your trip.
                </p>

                <p className={styles.proseParagraph}>
                  Rather than overwhelming you with endless automated listings,
                  we focus on curated Indian-market vehicles that are genuinely
                  suited to local driving conditions. Each vehicle is presented
                  with honest specifications, realistic luggage capacities, and
                  indicative sample tariffs—backed by direct, human-assisted
                  coordination.
                </p>
              </div>

              {/* Quotation Callout */}
              <blockquote className={styles.editorialQuote}>
                <p className={`font-editorial ${styles.quoteText}`}>
                  “The best drive is the one that fits your journey so
                  effortlessly that all you remember is the destination.”
                </p>
                <cite className={styles.quoteAuthor}>
                  — The Urban Motion Philosophy
                </cite>
              </blockquote>
            </div>

            {/* Right Column: Visual Narrative Composition */}
            <div className={styles.storyVisualCol}>
              <div className={styles.stackedMediaComposition}>
                <div className={styles.primaryMediaFrame}>
                  <Image
                    src="/images/services-hero.jpg"
                    alt="Car parked along scenic open highway"
                    width={800}
                    height={450}
                    className={styles.primaryMediaImage}
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>

                <div className={styles.secondaryDetailBox}>
                  <div className={styles.detailThumbWrapper}>
                    <Image
                      src="/images/interior-detail.jpg"
                      alt="Warm ivory leather interior detail"
                      width={120}
                      height={120}
                      className={styles.detailThumbImage}
                    />
                  </div>
                  <div className={styles.detailTextGroup}>
                    <span className={styles.detailLabel}>Craftsmanship First</span>
                    <p className={styles.detailSub}>
                      Clean cabins, tactile finishes, and verified mechanical
                      health prior to every dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Brand Values Section: 3 Clear Principles */}
        <section
          className={`container ${styles.valuesSection}`}
          aria-labelledby="values-heading"
        >
          <div className={styles.valuesHeaderBlock}>
            <p className={styles.sectionEyebrow}>WHAT GUIDES US</p>
            <h2
              id="values-heading"
              className={`font-editorial ${styles.sectionHeading}`}
            >
              Three core principles behind every drive.
            </h2>
            <p className={styles.valuesLead}>
              We measure our service not by complicated terms, but by how
              effortless your journey feels from start to finish.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1: Simplicity */}
            <div className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <span className={styles.valueNumber}>01</span>
                <span className={styles.valuePill}>Clarity First</span>
              </div>
              <h3 className={`font-editorial ${styles.valueTitle}`}>
                Simplicity
              </h3>
              <p className={styles.valueDesc}>
                We make exploring cars straightforward. Clear photos,
                straightforward specifications, and no convoluted registration
                barriers or surprise checkout fees.
              </p>
            </div>

            {/* Value 2: Choice */}
            <div className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <span className={styles.valueNumber}>02</span>
                <span className={styles.valuePill}>Relevant Fleet</span>
              </div>
              <h3 className={`font-editorial ${styles.valueTitle}`}>Choice</h3>
              <p className={styles.valueDesc}>
                Every journey demands a different tool. We help you compare
                nimble city hatchbacks, comfortable executive sedans, and
                high-ground-clearance SUVs tailored to Indian routes.
              </p>
            </div>

            {/* Value 3: Convenience */}
            <div className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <span className={styles.valueNumber}>03</span>
                <span className={styles.valuePill}>Direct Contact</span>
              </div>
              <h3 className={`font-editorial ${styles.valueTitle}`}>
                Convenience
              </h3>
              <p className={styles.valueDesc}>
                Moving from exploring a car to confirming details is seamless.
                Connect with our concierge team on WhatsApp to confirm delivery
                timing, deposit, and terms directly.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Customer Journey: Enquiry Process Transparency */}
        <section
          className={`container ${styles.journeySection}`}
          aria-labelledby="journey-heading"
        >
          <div className={styles.journeyHeaderBlock}>
            <p className={styles.sectionEyebrow}>TRANSPARENT WORKFLOW</p>
            <h2
              id="journey-heading"
              className={`font-editorial ${styles.sectionHeading}`}
            >
              The path from browsing to the driver&apos;s seat.
            </h2>
            <p className={styles.journeyLead}>
              Our website is designed as an informative enquiry catalog. Here is
              how arrangements are finalized directly with the provider.
            </p>
          </div>

          <div className={styles.journeyStepsRow}>
            <div className={styles.journeyStepItem}>
              <div className={styles.journeyStepBadge}>1</div>
              <h3 className={styles.journeyStepTitle}>Explore the Fleet</h3>
              <p className={styles.journeyStepText}>
                Filter by vehicle category, seating capacity, and transmission
                type to identify models matching your route.
              </p>
            </div>

            <div className={styles.journeyStepConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.journeyStepItem}>
              <div className={styles.journeyStepBadge}>2</div>
              <h3 className={styles.journeyStepTitle}>Compare Details</h3>
              <p className={styles.journeyStepText}>
                Review photo galleries, boot space, indicative sample rates, and
                practical travel use cases.
              </p>
            </div>

            <div className={styles.journeyStepConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.journeyStepItem}>
              <div className={styles.journeyStepBadge}>3</div>
              <h3 className={styles.journeyStepTitle}>Enquire on WhatsApp</h3>
              <p className={styles.journeyStepText}>
                Click the direct WhatsApp action to initiate contact with your
                chosen vehicle details pre-filled.
              </p>
            </div>

            <div className={styles.journeyStepConnector} aria-hidden="true">
              →
            </div>

            <div className={styles.journeyStepItem}>
              <div className={styles.journeyStepBadge}>4</div>
              <h3 className={styles.journeyStepTitle}>Direct Confirmation</h3>
              <p className={styles.journeyStepText}>
                Confirm final pricing, deposit terms, handover address, and
                documentation directly with the team.
              </p>
            </div>
          </div>

          <div className={styles.disclaimerBox}>
            <span className={styles.disclaimerIcon} aria-hidden="true">
              ℹ️
            </span>
            <p className={styles.disclaimerNote}>
              <strong>Notice:</strong> This website does not process credit
              cards or issue automated binding reservations. All bookings,
              handover schedules, and rental agreements are settled directly with
              the rental provider upon verification of official documents.
            </p>
          </div>
        </section>

        {/* 5. Closing Call to Action Section */}
        <section
          className={`container ${styles.ctaSection}`}
          aria-labelledby="cta-heading"
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.ctaEyebrow}>YOUR JOURNEY STARTS HERE</p>
              <h2 id="cta-heading" className={`font-editorial ${styles.ctaHeading}`}>
                Find the car that fits your next drive.
              </h2>
              <p className={styles.ctaDesc}>
                Browse our curated fleet of self-drive hatchbacks, sedans, and
                compact SUVs or get in touch for personalized enquiry assistance.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/#fleet" className={styles.ctaPrimaryBtn}>
                  <span>Explore Our Fleet</span>
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
