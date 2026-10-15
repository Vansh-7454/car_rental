"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/fleet";
import styles from "./VehicleGallery.module.css";

interface VehicleGalleryProps {
  gallery: GalleryItem[];
  vehicleName: string;
}

export default function VehicleGallery({
  gallery,
  vehicleName,
}: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const activePhoto = gallery[activeIndex] || gallery[0];

  return (
    <div className={styles.galleryContainer} aria-label={`${vehicleName} photo gallery`}>
      {/* Dominant Main Showcase Image */}
      <div className={styles.mainImageFrame}>
        <div className={styles.imageWrapper}>
          <Image
            key={activePhoto.src}
            src={activePhoto.src}
            alt={activePhoto.alt}
            width={1280}
            height={720}
            priority
            className={styles.mainImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 780px"
          />
          <div className={styles.imageOverlay} aria-hidden="true" />
        </div>

        {/* Photographic Caption */}
        <div className={styles.captionBar}>
          <span className={styles.captionText}>{activePhoto.caption}</span>
          <span className={styles.counter}>
            0{activeIndex + 1} / 0{gallery.length}
          </span>
        </div>
      </div>

      {/* Interactive Thumbnail Navigation */}
      {gallery.length > 1 && (
        <div
          className={styles.thumbnailRow}
          role="tablist"
          aria-label="Gallery thumbnails"
        >
          {gallery.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show ${item.caption}`}
                className={`${styles.thumbnailButton} ${
                  isSelected ? styles.thumbnailSelected : ""
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className={styles.thumbnailImageWrapper}>
                  <Image
                    src={item.src}
                    alt=""
                    width={180}
                    height={100}
                    className={styles.thumbnailImage}
                    sizes="120px"
                  />
                </div>
                {isSelected && (
                  <span className={styles.selectedMarker} aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
