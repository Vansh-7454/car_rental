import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      {/* Full-bleed Editorial Photographic Background (Stationary Executive Car) */}
      <div className={styles.heroBackground} aria-hidden="true">
        <Image
          src={siteConfig.heroCar.imageSrc}
          alt={siteConfig.heroCar.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroBackgroundImage}
        />
        {/* Layered gradients to guarantee 100% text readability & seamless edge blend */}
        <div className={styles.gradientLeft} />
        <div className={styles.gradientVertical} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.contentWrapper}>
          {/* Subtle Category Kicker */}
          <div className={styles.kickerBadge}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kickerText}>
              Curated Indian Rental Fleet &bull; Self-Drive &amp; Chauffeur
            </span>
          </div>

          {/* Large Expressive Editorial Headline */}
          <h1 id="hero-heading" className={`font-editorial ${styles.headline}`}>
            <span className={styles.headlineLine}>Your City.</span>
            <span className={`${styles.headlineLine} ${styles.headlineAccent}`}>
              Your Drive.
            </span>
          </h1>

          {/* Concise, Confident Editorial Supporting Text */}
          <p className={styles.subheadline}>{siteConfig.subheadline}</p>

          {/* Dual Action Group */}
          <div className={styles.actionGroup}>
            <Link
              href={siteConfig.navLinks[0]?.href || "#fleet"}
              className={styles.primaryAction}
              id="hero-primary-action"
            >
              <span>Explore Our Fleet</span>
              <svg
                className={styles.actionArrow}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10h12m-6-6 6 6-6 6" />
              </svg>
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryAction}
              id="hero-secondary-action"
              aria-label="Enquire on WhatsApp (opens in new tab)"
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
  );
}
