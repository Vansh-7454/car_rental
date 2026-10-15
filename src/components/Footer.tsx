"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link
              href="/"
              className={styles.brandLink}
              aria-label={`${siteConfig.brandName} Home`}
            >
              <span className={styles.brandMark} aria-hidden="true">
                <span className={styles.brandMarkInner} />
                <span className={styles.brandMarkAccent} />
              </span>
              <div className={styles.brandTextGroup}>
                <span className={styles.brandName}>{siteConfig.brandName}</span>
                <span className={styles.brandDescriptor}>CAR RENTAL</span>
              </div>
            </Link>

            <p className={styles.brandTagline}>{siteConfig.tagline}</p>
            <p className={styles.brandDescription}>
              Curated Indian self-drive fleet featuring verified hatchbacks,
              executive sedans, and compact SUVs with personal concierge coordination.
            </p>
          </div>

          {/* Column 1: Fleet & Categories */}
          <div className={styles.navCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingDot} aria-hidden="true" />
              <span>Explore Fleet</span>
            </h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#fleet" className={styles.footerLink}>
                  All Vehicles
                </Link>
              </li>
              <li>
                <Link href="/fleet/toyota-innova-crysta" className={styles.footerLink}>
                  Toyota Innova Crysta (7-Seater MPV)
                </Link>
              </li>
              <li>
                <Link href="/fleet/mahindra-thar" className={styles.footerLink}>
                  Mahindra Thar (Adventure 4x4)
                </Link>
              </li>
              <li>
                <Link href="/fleet/hyundai-creta" className={styles.footerLink}>
                  Hyundai Creta (Compact SUV)
                </Link>
              </li>
              <li>
                <Link href="/fleet/honda-city" className={styles.footerLink}>
                  Honda City (Executive Sedan)
                </Link>
              </li>
              <li>
                <Link href="/fleet/maruti-swift" className={styles.footerLink}>
                  Maruti Swift (Hatchback)
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Rental Services
                </Link>
              </li>
              <li>
                <Link href="/services#how-it-works" className={styles.footerLink}>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Support */}
          <div className={styles.navCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingDot} aria-hidden="true" />
              <span>Company &amp; Support</span>
            </h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={styles.footerLink}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact Concierge
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  WhatsApp Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Concierge Desk */}
          <div className={styles.navCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingDot} aria-hidden="true" />
              <span>Concierge Desk</span>
            </h3>
            <div className={styles.contactInfoList}>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Direct WhatsApp</span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItemLink}
                >
                  <span>Chat on WhatsApp</span>
                  <svg
                    viewBox="0 0 20 20"
                    width="14"
                    height="14"
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

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Email Support</span>
                <a
                  href="mailto:enquiry@urbanmotion.in"
                  className={styles.contactItemLink}
                >
                  enquiry@urbanmotion.in
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Operational Hours</span>
                <span className={styles.contactItemValue}>
                  Mon – Sun: 8:00 AM – 9:00 PM
                </span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Dispatch Coverage</span>
                <span className={styles.contactItemValue}>
                  Doorstep &amp; Airport Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyrightText}>
            &copy; {currentYear} {siteConfig.legalEntity || siteConfig.brandName}. All
            rights reserved.
          </p>

          <p className={styles.disclaimerText}>
            Urban Motion operates as a static vehicle showcase and enquiry concierge
            under the Heptley Grow Plan. No automated financial transactions or
            guaranteed bookings are executed online. All vehicle availability,
            refundable deposits, and rental agreements are confirmed directly
            with the provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
