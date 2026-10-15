import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./NotFound.module.css";

export default function RootNotFound() {
  return (
    <>
      <Navbar />

      <main className={styles.notFoundContainer}>
        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <p className={styles.eyebrow}>PAGE NOT FOUND &bull; 404</p>
          </div>

          <h1 className={`font-editorial ${styles.title}`}>
            The route you are looking for has taken a detour.
          </h1>

          <p className={styles.description}>
            We couldn&rsquo;t find the page you were heading to. Let us guide you
            back to our verified vehicle fleet or concierge support.
          </p>

          <div className={styles.actionsRow}>
            <Link href="/" className={styles.primaryBtn}>
              <span>Return to Home</span>
            </Link>

            <Link href="/#fleet" className={styles.secondaryBtn}>
              <span>Explore Fleet</span>
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

            <Link href="/contact" className={styles.secondaryBtn}>
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
