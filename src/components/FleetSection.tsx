"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FLEET_VEHICLES,
  CATEGORY_FILTERS,
  Vehicle,
  VehicleCategory,
  getVehicleWhatsappUrl,
} from "@/data/fleet";
import styles from "./FleetSection.module.css";

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>("all");
  const [selectedVehicleForModal, setSelectedVehicleForModal] =
    useState<Vehicle | null>(null);

  // Filter vehicles based on active category
  const filteredVehicles =
    activeCategory === "all"
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((vehicle) => vehicle.category === activeCategory);

  // Identify featured vehicle for editorial prominence
  const featuredVehicle = filteredVehicles[0];
  const supportingVehicles = filteredVehicles.slice(1);

  const handleOpenDetails = (vehicle: Vehicle) => {
    setSelectedVehicleForModal(vehicle);
  };

  const handleCloseDetails = () => {
    setSelectedVehicleForModal(null);
  };

  return (
    <section
      id="fleet"
      className={styles.fleetSection}
      aria-labelledby="fleet-heading"
    >
      <div className={`container ${styles.fleetContainer}`}>
        {/* Section Header & Editorial Introduction */}
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <p className={styles.eyebrow}>FIND YOUR DRIVE</p>
          </div>

          <div className={styles.headerTitleRow}>
            <h2 id="fleet-heading" className={`font-editorial ${styles.heading}`}>
              The right car for every journey.
            </h2>
            <p className={styles.description}>
              From everyday city drives to memorable weekend escapes, find a
              vehicle that fits your plans.
            </p>
          </div>
        </header>

        {/* Interactive Category Filter Navigation */}
        <div
          className={styles.filterBarWrapper}
          role="toolbar"
          aria-label="Filter fleet by vehicle category"
        >
          <div className={styles.filterList} role="tablist">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? FLEET_VEHICLES.length
                  : FLEET_VEHICLES.filter((v) => v.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`filter-tab-${cat.id}`}
                  aria-selected={isActive}
                  aria-controls="fleet-vehicle-grid"
                  className={`${styles.filterTab} ${
                    isActive ? styles.filterTabActive : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className={styles.filterLabel}>{cat.label}</span>
                  <span className={styles.filterCount} aria-hidden="true">
                    0{count}
                  </span>
                  {isActive && (
                    <span
                      className={styles.activeIndicator}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className={styles.tariffNotice}>
            <span className={styles.tariffNoticeDot} aria-hidden="true" />
            <span>All rates include standard insurance & 24/7 roadside assistance</span>
          </div>
        </div>

        {/* Editorial Fleet Layout: Avoid generic card grid */}
        <div
          id="fleet-vehicle-grid"
          role="tabpanel"
          aria-labelledby={`filter-tab-${activeCategory}`}
          className={styles.fleetComposition}
        >
          {/* 1. Spotlight Featured Vehicle Presentation */}
          {featuredVehicle && (
            <article
              key={`featured-${featuredVehicle.id}`}
              id={`vehicle-${featuredVehicle.slug}`}
              className={styles.featuredShowcase}
              aria-label={`Featured: ${featuredVehicle.name}`}
            >
              <div className={styles.featuredImageContainer}>
                <div className={styles.featuredBadge}>
                  <span>Editor&apos;s Fleet Spotlight</span>
                </div>
                <div className={styles.imageZoomWrapper}>
                  <Image
                    src={featuredVehicle.imageSrc}
                    alt={featuredVehicle.alt}
                    width={1280}
                    height={720}
                    priority
                    className={styles.featuredImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                  <div
                    className={styles.featuredImageOverlay}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.featuredHeaderRow}>
                  <div>
                    <span className={styles.categoryPill}>
                      {featuredVehicle.categoryLabel}
                    </span>
                    <h3 className={`font-editorial ${styles.featuredTitle}`}>
                      {featuredVehicle.name}
                    </h3>
                    <p className={styles.featuredSubtitle}>
                      {featuredVehicle.subtitle}
                    </p>
                  </div>

                  <div className={styles.priceBlock}>
                    <span className={styles.pricePrefix}>Starting from</span>
                    <div className={styles.priceMain}>
                      <span className={styles.priceAmount}>
                        {featuredVehicle.priceFormatted}
                      </span>
                      <span className={styles.priceUnit}>/ day*</span>
                    </div>
                    <span className={styles.priceNote}>
                      {featuredVehicle.priceNote}
                    </span>
                  </div>
                </div>

                <p className={styles.featuredIdealFor}>
                  <strong className={styles.idealForLabel}>Best for:</strong>{" "}
                  {featuredVehicle.idealFor}
                </p>

                {/* Key Spec Grid */}
                <div
                  className={styles.specGrid}
                  aria-label="Vehicle Specifications"
                >
                  <div className={styles.specItem}>
                    <span className={styles.specKey}>Capacity</span>
                    <span className={styles.specVal}>
                      {featuredVehicle.capacity}
                    </span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specKey}>Transmission</span>
                    <span className={styles.specVal}>
                      {featuredVehicle.transmission}
                    </span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specKey}>Climate</span>
                    <span className={styles.specVal}>{featuredVehicle.ac}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specKey}>Powertrain</span>
                    <span className={styles.specVal}>
                      {featuredVehicle.fuelType}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.actionRow}>
                  <button
                    type="button"
                    onClick={() => handleOpenDetails(featuredVehicle)}
                    className={styles.btnDetailsPrimary}
                    aria-label={`View detailed specifications for ${featuredVehicle.name}`}
                  >
                    <span>View Details</span>
                    <svg
                      className={styles.btnArrow}
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
                  </button>

                  <a
                    href={getVehicleWhatsappUrl(featuredVehicle.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnEnquireSecondary}
                    aria-label={`Enquire on WhatsApp for ${featuredVehicle.name} (opens in new tab)`}
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
            </article>
          )}

          {/* 2. Supporting Vehicles: Balanced Editorial Layout */}
          {supportingVehicles.length > 0 && (
            <div className={styles.supportingGrid}>
              {supportingVehicles.map((vehicle, index) => (
                <article
                  key={vehicle.id}
                  id={`vehicle-${vehicle.slug}`}
                  className={styles.supportingCard}
                  aria-label={`${vehicle.name} Entry`}
                >
                  <div className={styles.supportingImageFrame}>
                    <div className={styles.imageZoomWrapper}>
                      <Image
                        src={vehicle.imageSrc}
                        alt={vehicle.alt}
                        width={800}
                        height={450}
                        className={styles.supportingImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    </div>
                    <div className={styles.supportingCategoryTag}>
                      {vehicle.categoryLabel}
                    </div>
                  </div>

                  <div className={styles.supportingBody}>
                    <div className={styles.supportingTitleRow}>
                      <div>
                        <h3 className={`font-editorial ${styles.supportingName}`}>
                          {vehicle.name}
                        </h3>
                        <p className={styles.supportingSub}>
                          {vehicle.subtitle}
                        </p>
                      </div>
                      <div className={styles.supportingPriceGroup}>
                        <span className={styles.supportingPrice}>
                          {vehicle.priceFormatted}
                        </span>
                        <span className={styles.supportingUnit}>/ day*</span>
                      </div>
                    </div>

                    {/* Compact Specs Strip */}
                    <ul
                      className={styles.supportingSpecsList}
                      aria-label={`${vehicle.name} specifications`}
                    >
                      <li className={styles.specMiniItem}>
                        <svg
                          className={styles.specMiniIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>{vehicle.capacity}</span>
                      </li>
                      <li className={styles.specMiniItem}>
                        <svg
                          className={styles.specMiniIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="12" x2="16" y2="14" />
                        </svg>
                        <span>{vehicle.transmission}</span>
                      </li>
                      <li className={styles.specMiniItem}>
                        <svg
                          className={styles.specMiniIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
                        </svg>
                        <span>{vehicle.ac}</span>
                      </li>
                    </ul>

                    {/* Dual Action Controls */}
                    <div className={styles.supportingActionRow}>
                      <button
                        type="button"
                        onClick={() => handleOpenDetails(vehicle)}
                        className={styles.btnDetailsSecondary}
                        aria-label={`View details for ${vehicle.name}`}
                      >
                        <span>View Details</span>
                      </button>

                      <a
                        href={getVehicleWhatsappUrl(vehicle.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnEnquirePill}
                        aria-label={`Enquire on WhatsApp for ${vehicle.name} (opens in new tab)`}
                      >
                        <svg
                          className={styles.whatsappIconMini}
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
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Fleet Footnote / Disclaimer */}
        <footer className={styles.fleetFooterDisclaimer}>
          <p className={styles.disclaimerText}>
            *Rates shown are indicative sample tariffs per 24-hour cycle. Final
            booking terms, rental deposit, and delivery slots are confirmed upon
            enquiry. All vehicles undergo comprehensive multi-point inspection
            and interior sanitisation prior to dispatch.
          </p>
        </footer>
      </div>

      {/* Accessible Vehicle Specification Modal (Step 2 Interactive Feature) */}
      {selectedVehicleForModal && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-vehicle-title"
          onClick={handleCloseDetails}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseButton}
              onClick={handleCloseDetails}
              aria-label="Close vehicle details modal"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.closeIcon}
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className={styles.modalMediaWrapper}>
              <Image
                src={selectedVehicleForModal.imageSrc}
                alt={selectedVehicleForModal.alt}
                width={800}
                height={450}
                className={styles.modalImage}
              />
              <span className={styles.modalCategoryBadge}>
                {selectedVehicleForModal.categoryLabel}
              </span>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalHeaderGroup}>
                <div>
                  <h3
                    id="modal-vehicle-title"
                    className={`font-editorial ${styles.modalTitle}`}
                  >
                    {selectedVehicleForModal.name}
                  </h3>
                  <p className={styles.modalSubtitle}>
                    {selectedVehicleForModal.subtitle}
                  </p>
                </div>
                <div className={styles.modalPriceGroup}>
                  <span className={styles.modalPrice}>
                    {selectedVehicleForModal.priceFormatted}
                  </span>
                  <span className={styles.modalPriceUnit}>/ day*</span>
                </div>
              </div>

              <div className={styles.modalPillars}>
                <div className={styles.modalPillar}>
                  <span className={styles.modalPillarKey}>Ideal Route</span>
                  <span className={styles.modalPillarVal}>
                    {selectedVehicleForModal.idealFor}
                  </span>
                </div>
              </div>

              <div className={styles.modalSpecsTable}>
                <div className={styles.tableRow}>
                  <span className={styles.tableKey}>Passenger Capacity</span>
                  <span className={styles.tableVal}>
                    {selectedVehicleForModal.capacity}
                  </span>
                </div>
                <div className={styles.tableRow}>
                  <span className={styles.tableKey}>Transmission</span>
                  <span className={styles.tableVal}>
                    {selectedVehicleForModal.transmission}
                  </span>
                </div>
                <div className={styles.tableRow}>
                  <span className={styles.tableKey}>Air Conditioning</span>
                  <span className={styles.tableVal}>
                    {selectedVehicleForModal.ac}
                  </span>
                </div>
                <div className={styles.tableRow}>
                  <span className={styles.tableKey}>Fuel Powertrain</span>
                  <span className={styles.tableVal}>
                    {selectedVehicleForModal.fuelType}
                  </span>
                </div>
                <div className={styles.tableRow}>
                  <span className={styles.tableKey}>Sanitisation Check</span>
                  <span className={styles.tableVal}>
                    Certified Pre-dispatch Multicheck
                  </span>
                </div>
              </div>

              <div className={styles.modalActions}>
                <a
                  href={getVehicleWhatsappUrl(selectedVehicleForModal.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalEnquireButton}
                  onClick={handleCloseDetails}
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

                <button
                  type="button"
                  className={styles.modalDismissButton}
                  onClick={handleCloseDetails}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
