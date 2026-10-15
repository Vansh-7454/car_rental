import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import VehicleGallery from "@/components/VehicleGallery";
import {
  getVehicleBySlug,
  getAllVehicleSlugs,
  getRelatedVehicles,
  getVehicleWhatsappUrl,
} from "@/data/fleet";
import { siteConfig } from "@/config/site";
import styles from "./VehicleDetails.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllVehicleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: `Vehicle Not Found — ${siteConfig.brandName}`,
    };
  }

  return {
    title: `${vehicle.name} Rental — ${siteConfig.brandName}`,
    description: vehicle.description,
    openGraph: {
      title: `${vehicle.name} (${vehicle.categoryLabel}) — ${siteConfig.brandName}`,
      description: vehicle.description,
      images: [
        {
          url: vehicle.imageSrc,
          width: 1200,
          height: 675,
          alt: vehicle.alt,
        },
      ],
    },
  };
}

export default async function VehicleDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const relatedVehicles = getRelatedVehicles(vehicle.slug, 3);
  const whatsappUrl = getVehicleWhatsappUrl(vehicle.name);

  return (
    <>
      <a href="#vehicle-main-content" className="skip-to-content">
        Skip to vehicle specifications
      </a>

      <Navbar />

      <main id="vehicle-main-content" className={styles.mainContainer}>
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
              <li className={styles.breadcrumbItem}>
                <Link href="/#fleet" className={styles.breadcrumbLink}>
                  Fleet
                </Link>
                <span className={styles.breadcrumbDivider} aria-hidden="true">
                  /
                </span>
              </li>
              <li
                className={`${styles.breadcrumbItem} ${styles.breadcrumbActive}`}
                aria-current="page"
              >
                {vehicle.name}
              </li>
            </ol>
          </nav>
        </div>

        {/* Top Vehicle Presentation: Balanced 2-Column Desktop Layout */}
        <section
          className={`container ${styles.presentationSection}`}
          aria-labelledby="vehicle-title"
        >
          {/* Left Column: Interactive Photography Gallery */}
          <div className={styles.galleryColumn}>
            <VehicleGallery
              gallery={vehicle.gallery}
              vehicleName={vehicle.name}
            />
          </div>

          {/* Right Column: Vehicle Info & Sticky Enquiry Panel */}
          <div className={styles.infoColumn}>
            <div className={styles.stickyPanel}>
              {/* Category Pill */}
              <div className={styles.categoryBadgeRow}>
                <span className={styles.categoryPill}>
                  {vehicle.categoryLabel}
                </span>
                <span className={styles.modelTag}>{vehicle.subtitle}</span>
              </div>

              {/* Title & Short Description */}
              <h1 id="vehicle-title" className={`font-editorial ${styles.vehicleTitle}`}>
                {vehicle.name}
              </h1>

              <p className={styles.vehicleDescription}>{vehicle.description}</p>

              {/* Indicative Tariff Box */}
              <div className={styles.tariffCard}>
                <div className={styles.tariffHeader}>
                  <span className={styles.tariffLabel}>Indicative Rental Tariff</span>
                  <span className={styles.tariffVerifiedPill}>Sample Rate</span>
                </div>
                <div className={styles.tariffPriceGroup}>
                  <span className={styles.tariffAmount}>
                    {vehicle.priceFormatted}
                  </span>
                  <span className={styles.tariffUnit}>/ day*</span>
                </div>
                <p className={styles.tariffDisclaimer}>
                  *Indicative starting sample price per 24-hour cycle. Final rental
                  deposit, fuel policy, and delivery slots are confirmed upon
                  enquiry.
                </p>
              </div>

              {/* Key Quick Spec Summary */}
              <div className={styles.quickSpecsStrip} aria-label="Key vehicle specs">
                <div className={styles.quickSpecPill}>
                  <span className={styles.specIcon} aria-hidden="true">
                    👥
                  </span>
                  <span className={styles.specText}>{vehicle.capacity}</span>
                </div>
                <div className={styles.quickSpecPill}>
                  <span className={styles.specIcon} aria-hidden="true">
                    ⚙️
                  </span>
                  <span className={styles.specText}>{vehicle.transmission}</span>
                </div>
                <div className={styles.quickSpecPill}>
                  <span className={styles.specIcon} aria-hidden="true">
                    ❄️
                  </span>
                  <span className={styles.specText}>{vehicle.ac}</span>
                </div>
                <div className={styles.quickSpecPill}>
                  <span className={styles.specIcon} aria-hidden="true">
                    🧳
                  </span>
                  <span className={styles.specText}>{vehicle.luggage}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionsGroup}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.enquireButtonPrimary}
                  id="details-whatsapp-enquire"
                  aria-label={`Enquire on WhatsApp about renting the ${vehicle.name} (opens in new tab)`}
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

                <Link href="/#fleet" className={styles.backToFleetLink}>
                  <span>← Explore Other Cars</span>
                </Link>
              </div>

              {/* Direct Booking Note */}
              <div className={styles.transparencyNote}>
                <span className={styles.transparencyDot} aria-hidden="true" />
                <span>
                  Zero hidden fees. Transparent digital agreement prior to
                  handover.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Technical Specifications */}
        <section
          className={`container ${styles.specsSection}`}
          aria-labelledby="specifications-heading"
        >
          <div className={styles.sectionTitleBlock}>
            <p className={styles.subEyebrow}>PRECISION ENGINEERING</p>
            <h2 id="specifications-heading" className={`font-editorial ${styles.subHeading}`}>
              Vehicle Specifications & Equipment
            </h2>
          </div>

          <div className={styles.specsGrid}>
            <div className={styles.specsTableCard}>
              <h3 className={styles.specsCardTitle}>Technical Overview</h3>
              <dl className={styles.specsDl}>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Category</dt>
                  <dd className={styles.dd}>{vehicle.categoryLabel}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Seating Capacity</dt>
                  <dd className={styles.dd}>{vehicle.capacity}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Transmission</dt>
                  <dd className={styles.dd}>{vehicle.transmission}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Air Conditioning</dt>
                  <dd className={styles.dd}>{vehicle.ac}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Fuel Powertrain</dt>
                  <dd className={styles.dd}>{vehicle.fuelType}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Luggage Space</dt>
                  <dd className={styles.dd}>{vehicle.luggage}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Highway FASTag</dt>
                  <dd className={styles.dd}>Active Electronic Tag Included</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt className={styles.dt}>Sanitisation Check</dt>
                  <dd className={styles.dd}>Pre-dispatch Clean & Verified</dd>
                </div>
              </dl>
            </div>

            {/* Key Features & Highlights */}
            <div className={styles.featuresCard}>
              <h3 className={styles.specsCardTitle}>Featured Equipment</h3>
              <ul className={styles.featureList}>
                {vehicle.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <svg
                      className={styles.featureCheckIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Recommended Travel Use Cases */}
        <section
          className={`container ${styles.useCasesSection}`}
          aria-labelledby="usecases-heading"
        >
          <div className={styles.sectionTitleBlock}>
            <p className={styles.subEyebrow}>TAILORED JOURNEYS</p>
            <h2 id="usecases-heading" className={`font-editorial ${styles.subHeading}`}>
              Where This Vehicle Excels
            </h2>
          </div>

          <div className={styles.useCasesGrid}>
            {vehicle.useCases.map((useCase, index) => (
              <div key={useCase.title} className={styles.useCaseCard}>
                <div className={styles.useCaseNumber}>0{index + 1}</div>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDesc}>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: General Rental Guidance & FAQs */}
        <section
          className={`container ${styles.faqsSection}`}
          aria-labelledby="faqs-heading"
        >
          <div className={styles.sectionTitleBlock}>
            <p className={styles.subEyebrow}>RENTAL GUIDANCE</p>
            <h2 id="faqs-heading" className={`font-editorial ${styles.subHeading}`}>
              Frequently Asked Questions
            </h2>
            <p className={styles.faqsIntro}>
              Essential details regarding documents, handover procedures, and
              terms before you hire.
            </p>
          </div>

          <div className={styles.faqsList}>
            {vehicle.faqs.map((faq) => (
              <div key={faq.question} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Related Vehicles ("Find Your Next Drive") */}
        <section
          className={`container ${styles.relatedSection}`}
          aria-labelledby="related-heading"
        >
          <div className={styles.relatedHeaderRow}>
            <div>
              <p className={styles.subEyebrow}>EXPLORE THE FLEET</p>
              <h2 id="related-heading" className={`font-editorial ${styles.subHeading}`}>
                More Cars to Explore
              </h2>
            </div>
            <Link href="/#fleet" className={styles.viewFullFleetLink}>
              <span>View All Fleet</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.viewArrow}
                aria-hidden="true"
              >
                <path d="M4 10h12m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {relatedVehicles.map((relVehicle) => (
              <article key={relVehicle.id} className={styles.relatedCard}>
                <div className={styles.relatedImageFrame}>
                  <Image
                    src={relVehicle.imageSrc}
                    alt={relVehicle.alt}
                    width={600}
                    height={338}
                    className={styles.relatedImage}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <span className={styles.relatedCategoryTag}>
                    {relVehicle.categoryLabel}
                  </span>
                </div>

                <div className={styles.relatedBody}>
                  <div className={styles.relatedTitleRow}>
                    <h3 className={`font-editorial ${styles.relatedName}`}>
                      {relVehicle.name}
                    </h3>
                    <span className={styles.relatedPrice}>
                      {relVehicle.priceFormatted}
                      <small className={styles.relatedUnit}>/day*</small>
                    </span>
                  </div>

                  <p className={styles.relatedSub}>{relVehicle.subtitle}</p>

                  <div className={styles.relatedActionRow}>
                    <Link
                      href={`/fleet/${relVehicle.slug}`}
                      className={styles.relatedDetailsLink}
                    >
                      <span>View Details</span>
                    </Link>

                    <a
                      href={getVehicleWhatsappUrl(relVehicle.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.relatedEnquirePill}
                      aria-label={`Enquire about ${relVehicle.name} on WhatsApp`}
                    >
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
