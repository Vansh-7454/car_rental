"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [activeHash, setActiveHash] = useState<string>("");

  // Track active section hash for pages with anchor links (e.g. /services vs /services#how-it-works)
  useEffect(() => {
    const syncHash = () => {
      if (typeof window !== "undefined") {
        setActiveHash(window.location.hash);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    if (pathname === "/services") {
      const section = document.getElementById("how-it-works");
      if (!section) {
        return () => window.removeEventListener("hashchange", syncHash);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHash("#how-it-works");
            } else {
              const rect = section.getBoundingClientRect();
              if (rect.top > 200) {
                setActiveHash("");
              }
            }
          });
        },
        {
          rootMargin: "-80px 0px -40% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(section);

      return () => {
        window.removeEventListener("hashchange", syncHash);
        observer.disconnect();
      };
    } else {
      setActiveHash("");
      return () => window.removeEventListener("hashchange", syncHash);
    }
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === "/#fleet") {
      return pathname === "/";
    }
    if (href === "/services") {
      return pathname === "/services" && activeHash !== "#how-it-works";
    }
    if (href === "/services#how-it-works") {
      return pathname === "/services" && activeHash === "#how-it-works";
    }
    return pathname === href;
  };

  const handleLinkClick = (href: string) => {
    closeMobileMenu();
    if (href.includes("#")) {
      const hash = href.substring(href.indexOf("#"));
      if (pathname === "/services" && hash === "#how-it-works") {
        setActiveHash("#how-it-works");
        const el = document.getElementById("how-it-works");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (pathname === "/" && hash === "#fleet") {
        const el = document.getElementById("fleet");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href === "/services") {
      setActiveHash("");
      if (pathname === "/services") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      id="top-nav"
    >
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Identity */}
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMobileMenu}
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

        {/* Desktop Navigation Links */}
        <nav
          className={styles.desktopNav}
          aria-label="Main Navigation"
        >
          <ul className={styles.navList}>
            {siteConfig.navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <span>{item.label}</span>
                    <span className={styles.linkUnderline} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Group */}
        <div className={styles.actionGroup}>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.enquireButton}
            aria-label="Enquire on WhatsApp (opens in new tab)"
            id="nav-whatsapp-enquire"
          >
            <span className={styles.whatsappDot} aria-hidden="true" />
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
            <span className={styles.buttonText}>Enquire on WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            <span
              className={`${styles.toggleBar} ${
                mobileMenuOpen ? styles.toggleBarTopOpen : ""
              }`}
            />
            <span
              className={`${styles.toggleBar} ${
                mobileMenuOpen ? styles.toggleBarBottomOpen : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`${styles.mobileDrawer} ${
          mobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileDrawerContent}>
          <nav aria-label="Mobile Navigation">
            <ul className={styles.mobileNavList}>
              {siteConfig.navLinks.map((item, index) => {
                const active = isLinkActive(item.href);
                return (
                  <li
                    key={item.label}
                    className={styles.mobileNavItem}
                    style={{ animationDelay: `${index * 60 + 100}ms` }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.mobileNavLink} ${
                        active ? styles.mobileNavLinkActive : ""
                      }`}
                      onClick={() => handleLinkClick(item.href)}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={styles.mobileChevron}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.mobileDrawerFooter}>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileEnquireButton}
              onClick={closeMobileMenu}
            >
              <span className={styles.whatsappDot} aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>
            <p className={styles.mobileTagline}>
              {siteConfig.brandName} • {siteConfig.tagline}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
