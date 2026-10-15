import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FaqInteractiveSection from "@/components/FaqInteractiveSection";
import { siteConfig } from "@/config/site";
import styles from "./Faqs.module.css";

export const metadata: Metadata = {
  title: `FAQs — ${siteConfig.brandName} | Questions Before You Hit the Road`,
  description:
    "Find helpful information about exploring our fleet, making an enquiry and confirming your rental details with Urban Motion.",
  openGraph: {
    title: `FAQs — ${siteConfig.brandName} | Questions Before You Hit the Road`,
    description:
      "Find helpful information about exploring our fleet, making an enquiry and confirming your rental details.",
    images: [
      {
        url: "/images/faq-hero.jpg",
        width: 1200,
        height: 900,
        alt: "Tactile automotive detail showing petrol green leather steering wheel and push start ignition",
      },
    ],
  },
};

export default function FaqsPage() {
  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a href="#faqs-main-content" className="skip-to-content">
        Skip to FAQs content
      </a>

      <Navbar />

      <main id="faqs-main-content" className={styles.mainContainer}>
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
                FAQs
              </li>
            </ol>
          </nav>
        </div>

        {/* 1. FAQ Hero Section: Distinct Editorial Composition */}
        <section
          className={`container ${styles.heroSection}`}
          aria-labelledby="faq-hero-heading"
        >
          <div className={styles.heroContentCol}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <p className={styles.eyebrow}>GOOD TO KNOW</p>
            </div>

            <h1
              id="faq-hero-heading"
              className={`font-editorial ${styles.heroHeading}`}
            >
              Questions before you hit the road?
            </h1>

            <p className={styles.heroDescription}>
              Find helpful information about exploring our fleet, making an
              enquiry and confirming your rental details.
            </p>

            <div className={styles.heroPillsRow}>
              <div className={styles.heroPill}>
                <span className={styles.pillDot} aria-hidden="true" />
                <span>Curated Fleet of 6 Models</span>
              </div>
              <div className={styles.heroPill}>
                <span className={styles.pillDot} aria-hidden="true" />
                <span>Direct WhatsApp Concierge</span>
              </div>
              <div className={styles.heroPill}>
                <span className={styles.pillDot} aria-hidden="true" />
                <span>Transparent Verified Specs</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisualCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/faq-hero.jpg"
                alt="Tactile automotive detail of brushed aluminum engine start-stop button and hand-stitched petrol green leather steering wheel"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
              <div className={styles.floatingBadge}>
                <div className={styles.badgeTextCol}>
                  <span className={styles.badgeKicker}>PRE-DRIVE READY</span>
                  <span className={styles.badgeTitle}>
                    Personal Concierge Support
                  </span>
                </div>
                <span
                  className={styles.badgePulse}
                  aria-label="Direct support active"
                  title="Direct concierge active"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interactive FAQ Accordion, Search & Category Navigation */}
        <FaqInteractiveSection initialOpenId="what-is-urban-motion" />

        {/* 3. Closing Call to Action Section */}
        <section
          className={`container ${styles.ctaSection}`}
          aria-labelledby="faq-cta-heading"
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.ctaEyebrow}>STILL HAVE A QUESTION?</p>
              <h2
                id="faq-cta-heading"
                className={`font-editorial ${styles.ctaHeading}`}
              >
                Still have a question?
              </h2>
              <p className={styles.ctaDesc}>
                Get in touch to confirm the details of your rental. Our team is
                ready to assist with vehicle specifications, travel dates, and
                personalized quotations.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/#contact" className={styles.ctaContactBtn}>
                  <span>Contact Us</span>
                </Link>

                <Link href="/#fleet" className={styles.ctaFleetBtn}>
                  <span>Explore Our Fleet</span>
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaWhatsappBtn}
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

          <div className={styles.disclaimerBox}>
            <span className={styles.disclaimerIcon} aria-hidden="true">
              ℹ️
            </span>
            <p className={styles.disclaimerNote}>
              <strong>Notice:</strong> This website operates strictly as an
              enquiry and specification catalog for Urban Motion. We do not
              process credit cards or create automated bindings online. Complete
              rental terms, refundable deposits, and vehicle handover schedules
              are confirmed directly with the rental provider.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
