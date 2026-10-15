import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";
import { siteConfig } from "@/config/site";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: `Contact Us — ${siteConfig.brandName} | Let’s Get You on the Road`,
  description:
    "Have a question about our vehicles or need help choosing the right ride? Get in touch with our team.",
  openGraph: {
    title: `Contact Us — ${siteConfig.brandName} | Let’s Get You on the Road`,
    description:
      "Have a question about our vehicles or need help choosing the right ride? Get in touch with our team.",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 900,
        alt: "Deep petrol green executive sedan parked beside an illuminated glass concierge pavilion at dusk",
      },
    ],
  },
};

export default function ContactPage() {
  const { phone, whatsapp, email, address, operatingHours } = siteConfig.contactInfo;

  return (
    <>
      {/* Accessible skip link for keyboard users */}
      <a href="#contact-main-content" className="skip-to-content">
        Skip to contact content
      </a>

      <Navbar />

      <main id="contact-main-content" className={styles.mainContainer}>
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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>

        {/* 1. Contact Page Hero */}
        <section
          className={`container ${styles.heroSection}`}
          aria-labelledby="contact-hero-heading"
        >
          <div className={styles.heroContentCol}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <p className={styles.eyebrow}>CONCIERGE &amp; SUPPORT</p>
            </div>

            <h1
              id="contact-hero-heading"
              className={`font-editorial ${styles.heroHeading}`}
            >
              Let&rsquo;s Get You on the Road.
            </h1>

            <p className={styles.heroDescription}>
              Have a question about our vehicles or need help choosing the right
              ride? Get in touch with our team.
            </p>

            <div className={styles.heroActionsRow}>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryHeroBtn}
                id="contact-hero-whatsapp"
              >
                <svg
                  className={styles.btnIcon}
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

              <Link href="/#fleet" className={styles.secondaryHeroBtn}>
                <span>Explore Our Fleet</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroVisualCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/contact-hero.jpg"
                alt="Executive metallic green car parked beside a softly lit glass architectural pavilion at dusk"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
              <div className={styles.floatingBadge}>
                <div className={styles.badgeTextCol}>
                  <span className={styles.badgeKicker}>DIRECT CONCIERGE</span>
                  <span className={styles.badgeTitle}>Personalized Vehicle Matching</span>
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

        {/* 2. Main Two-Column Contact Information & Enquiry Grid */}
        <section
          className={`container ${styles.contactMainSection}`}
          aria-labelledby="contact-info-heading"
        >
          <div className={styles.contactGrid}>
            {/* Left Column: Contact Information Cards */}
            <div className={styles.infoCol}>
              <div className={styles.infoEyebrowGroup}>
                <span className={styles.infoEyebrow}>GET IN TOUCH</span>
              </div>
              <h2 id="contact-info-heading" className={styles.infoHeading}>
                Direct Communication Channels
              </h2>
              <p className={styles.infoDescription}>
                We prioritize swift, personal coordination. Connect with us
                through any of the channels below to confirm vehicle
                specifications, schedules, and personalized tariffs.
              </p>

              <div className={styles.contactCardsList}>
                {/* 1. Phone */}
                <article className={styles.contactItemCard}>
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox} aria-hidden="true">
                      <svg
                        className={styles.cardIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className={styles.cardTextGroup}>
                      <span className={styles.cardLabel}>{phone.label}</span>
                      {phone.isConfigured && phone.href ? (
                        <a href={phone.href} className={styles.cardValueLink}>
                          <span>{phone.value}</span>
                          <svg
                            className={styles.linkArrow}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className={styles.cardValueText}>{phone.value}</span>
                      )}
                    </div>
                  </div>
                  <p className={styles.cardNote}>{phone.note}</p>
                </article>

                {/* 2. WhatsApp */}
                <article className={styles.contactItemCard}>
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox} aria-hidden="true">
                      <svg
                        className={styles.cardIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div className={styles.cardTextGroup}>
                      <span className={styles.cardLabel}>{whatsapp.label}</span>
                      <a
                        href={whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardValueLink}
                      >
                        <span>{whatsapp.value}</span>
                        <svg
                          className={styles.linkArrow}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className={styles.cardNote}>{whatsapp.note}</p>
                </article>

                {/* 3. Email Address */}
                <article className={styles.contactItemCard}>
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox} aria-hidden="true">
                      <svg
                        className={styles.cardIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className={styles.cardTextGroup}>
                      <span className={styles.cardLabel}>{email.label}</span>
                      {email.href ? (
                        <a href={email.href} className={styles.cardValueLink}>
                          <span>{email.value}</span>
                          <svg
                            className={styles.linkArrow}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className={styles.cardValueText}>{email.value}</span>
                      )}
                    </div>
                  </div>
                  <p className={styles.cardNote}>{email.note}</p>
                </article>

                {/* 4. Business Address / Delivery Hub */}
                <article className={styles.contactItemCard}>
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox} aria-hidden="true">
                      <svg
                        className={styles.cardIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className={styles.cardTextGroup}>
                      <span className={styles.cardLabel}>{address.label}</span>
                      <span className={styles.cardValueText}>{address.value}</span>
                    </div>
                  </div>
                  <p className={styles.cardNote}>{address.note}</p>
                </article>

                {/* 5. Operating Hours */}
                <article className={styles.contactItemCard}>
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardIconBox} aria-hidden="true">
                      <svg
                        className={styles.cardIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className={styles.cardTextGroup}>
                      <span className={styles.cardLabel}>{operatingHours.label}</span>
                      <span className={styles.cardValueText}>{operatingHours.value}</span>
                    </div>
                  </div>
                  <p className={styles.cardNote}>{operatingHours.note}</p>
                </article>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div>
              <ContactEnquiryForm />
            </div>
          </div>
        </section>

        {/* 3. Helpful Additional Section: Not Sure Which Car to Choose? */}
        <section
          className={`container ${styles.guidanceSection}`}
          aria-labelledby="guidance-heading"
        >
          <div className={styles.guidanceCard}>
            <div className={styles.guidanceContent}>
              <p className={styles.guidanceEyebrow}>FLEET ADVICE</p>
              <h2
                id="guidance-heading"
                className={`font-editorial ${styles.guidanceHeading}`}
              >
                Not Sure Which Car to Choose?
              </h2>
              <p className={styles.guidanceDesc}>
                Whether you need a nimble hatchback for city navigation, a
                refined executive sedan for business travel, or an elevated
                compact SUV for weekend getaways, our team is happy to recommend
                the vehicle best matched to your luggage volume and passenger
                comfort.
              </p>

              <div className={styles.guidanceActions}>
                <Link href="/#fleet" className={styles.guidanceFleetBtn}>
                  <span>Explore Our Fleet</span>
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.guidanceWhatsappBtn}
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operational Policy Transparency Disclaimer */}
          <div className={styles.disclaimerBox}>
            <span className={styles.disclaimerIcon} aria-hidden="true">
              ℹ️
            </span>
            <p className={styles.disclaimerNote}>
              <strong>Notice &amp; Policy Clarification:</strong> Urban Motion
              operates as a showcase and direct enquiry concierge. We do not
              process credit cards or create binding automated online
              reservations. All final vehicle availability schedules, seasonal
              quotations, security deposits, and handover terms are confirmed
              directly with the rental provider prior to booking.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
