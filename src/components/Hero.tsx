import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      {/* Subtle Architectural Grid Lines & Ambient Lighting Accent */}
      <div className={styles.architecturalBackdrop} aria-hidden="true">
        <div className={styles.ambientGlow} />
        <div className={styles.gridLineHorizontal} />
        <div className={styles.gridLineVertical} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* Editorial Left Content Column */}
        <div className={styles.contentCol}>
          {/* Subtle Category Kicker */}
          <div className={styles.kickerBadge}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kickerText}>
              Curated Indian Rental Fleet • Self-Drive & Chauffeur
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
          <p className={styles.subheadline}>
            {siteConfig.subheadline}
          </p>

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

          {/* Service Editorial Metrics / Pillars (No fake ratings or invented numbers) */}
          <div className={styles.servicePillars} aria-label="Service Features">
            {siteConfig.features.map((feature, idx) => (
              <div key={feature.title} className={styles.pillarItem}>
                <div className={styles.pillarIndex} aria-hidden="true">
                  0{idx + 1}
                </div>
                <div className={styles.pillarContent}>
                  <h2 className={styles.pillarTitle}>{feature.title}</h2>
                  <p className={styles.pillarDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Right Column: Fixed Photorealistic Car Composition (No moving car) */}
        <div className={styles.visualCol}>
          <div className={styles.visualComposition}>
            {/* Primary Car Photographic Frame */}
            <div className={styles.carFrame}>
              <div className={styles.carImageWrapper}>
                <Image
                  src={siteConfig.heroCar.imageSrc}
                  alt={siteConfig.heroCar.alt}
                  width={1400}
                  height={788}
                  priority
                  className={styles.carImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 760px"
                />
                {/* Subtle natural vignette and edge lighting integration */}
                <div className={styles.imageOverlayGradient} aria-hidden="true" />
              </div>

              {/* Vehicle Editorial Caption Bar */}
              <div className={styles.carCaptionBar}>
                <div className={styles.carSpecGroup}>
                  <span className={styles.carCategoryTag}>
                    {siteConfig.heroCar.category}
                  </span>
                  <h3 className={styles.carModelName}>
                    {siteConfig.heroCar.title}
                  </h3>
                </div>
                <div className={styles.carSpecsMini}>
                  <span className={styles.specPill}>
                    {siteConfig.heroCar.transmission}
                  </span>
                  <span className={styles.specDivider} aria-hidden="true">•</span>
                  <span className={styles.specPill}>
                    {siteConfig.heroCar.seating}
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Photographic Detail: Tactile Interior Craftsmanship */}
            <aside
              className={styles.secondaryDetailCard}
              aria-label="Vehicle Interior Preview"
            >
              <div className={styles.secondaryImageWrapper}>
                <Image
                  src={siteConfig.secondaryDetail.imageSrc}
                  alt={siteConfig.secondaryDetail.alt}
                  width={180}
                  height={180}
                  className={styles.secondaryImage}
                  sizes="180px"
                />
                <div className={styles.secondaryBadge}>Detail</div>
              </div>
              <div className={styles.secondaryInfo}>
                <span className={styles.secondarySubtitle}>
                  {siteConfig.secondaryDetail.title}
                </span>
                <p className={styles.secondaryText}>
                  {siteConfig.secondaryDetail.subtitle}
                </p>
                <div className={styles.accentBar} aria-hidden="true" />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Hero Bottom Tone Transition */}
      <div className={styles.bottomTransition} aria-hidden="true">
        <div className={styles.bottomTransitionLine} />
      </div>
    </section>
  );
}
