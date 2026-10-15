import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import styles from "./NotFound.module.css";

export default function VehicleNotFound() {
  return (
    <>
      <Navbar />

      <main className={styles.notFoundContainer}>
        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <p className={styles.eyebrow}>VEHICLE NOT FOUND</p>
          </div>

          <h1 className={`font-editorial ${styles.title}`}>
            This vehicle is not in our active fleet.
          </h1>

          <p className={styles.description}>
            The vehicle profile you are attempting to reach does not exist or has
            been updated. Browse our verified collection of sedans, hatchbacks,
            and compact SUVs available for city journeys and weekend escapes.
          </p>

          <div className={styles.actionsRow}>
            <Link href="/#fleet" className={styles.primaryBtn}>
              <span>Explore Active Fleet</span>
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
              className={styles.secondaryBtn}
            >
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
