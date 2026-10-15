"use client";

import { useState, useId } from "react";
import { FLEET_VEHICLES } from "@/data/fleet";
import { siteConfig } from "@/config/site";
import styles from "./ContactEnquiryForm.module.css";

export default function ContactEnquiryForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehiclePreference, setVehiclePreference] = useState("Exploring / General Consultation");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({});
  const [dispatchStatus, setDispatchStatus] = useState<"whatsapp" | "email" | null>(null);

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const vehicleId = useId();
  const dateId = useId();
  const messageId = useId();

  // Validate required and optional fields
  const validateForm = () => {
    const newErrors: { fullName?: string; phone?: string; email?: string } = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone.trim() || digitsOnly.length < 10) {
      newErrors.phone = "Please enter a valid phone or mobile number (at least 10 digits).";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address format (e.g. name@example.com).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile formatted message for direct concierge transmission
  const buildEnquiryMessage = () => {
    let msg = `Hello Urban Motion Concierge, I would like to submit a rental enquiry:\n\n`;
    msg += `• Name: ${fullName.trim()}\n`;
    msg += `• Phone: ${phone.trim()}\n`;
    if (email.trim()) {
      msg += `• Email: ${email.trim()}\n`;
    }
    msg += `• Vehicle Preference: ${vehiclePreference}\n`;
    if (travelDate) {
      msg += `• Tentative Travel Date: ${travelDate}\n`;
    }
    if (message.trim()) {
      msg += `• Notes / Itinerary: ${message.trim()}\n`;
    }
    msg += `\nPlease let me know vehicle availability, indicative tariff, and handover terms. Thank you!`;
    return msg;
  };

  // Dispatch via WhatsApp action
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedMessage = buildEnquiryMessage();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setDispatchStatus("whatsapp");
  };

  // Dispatch via Email (mailto) action
  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedMessage = buildEnquiryMessage();
    const emailTo = siteConfig.contactInfo.email.value || "enquiry@urbanmotion.in";
    const subject = `Rental Enquiry - ${fullName.trim()} (${vehiclePreference})`;
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;

    window.location.href = mailtoUrl;
    setDispatchStatus("email");
  };

  return (
    <div className={styles.formCard}>
      <header className={styles.formHeader}>
        <p className={styles.formEyebrow}>DIRECT CONCIERGE DESK</p>
        <h2 className={styles.formTitle}>Send an Enquiry</h2>
        <p className={styles.formSubtitle}>
          Complete your travel preferences below. Since we do not process
          automated bookings online, your enquiry will open directly in WhatsApp
          or Email with our concierge team.
        </p>
      </header>

      <form onSubmit={handleWhatsAppSubmit} noValidate>
        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor={nameId} className={styles.label}>
              <span>
                Full Name <span className={styles.requiredAsterisk}>*</span>
              </span>
            </label>
            <input
              id={nameId}
              type="text"
              name="fullName"
              required
              placeholder="e.g. Vikram Patel"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
              }}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? `${nameId}-error` : undefined}
              className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
            />
            {errors.fullName && (
              <span id={`${nameId}-error`} className={styles.errorMessage} role="alert">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor={phoneId} className={styles.label}>
              <span>
                Phone Number <span className={styles.requiredAsterisk}>*</span>
              </span>
            </label>
            <input
              id={phoneId}
              type="tel"
              name="phone"
              required
              placeholder="e.g. +91 98201 12345"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${phoneId}-error` : undefined}
              className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
            />
            {errors.phone && (
              <span id={`${phoneId}-error`} className={styles.errorMessage} role="alert">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                {errors.phone}
              </span>
            )}
          </div>

          {/* Email Address (Optional) */}
          <div className={styles.formGroup}>
            <label htmlFor={emailId} className={styles.label}>
              <span>Email Address</span>
              <span className={styles.optionalBadge}>(Optional)</span>
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              placeholder="e.g. vikram@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && (
              <span id={`${emailId}-error`} className={styles.errorMessage} role="alert">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                {errors.email}
              </span>
            )}
          </div>

          {/* Vehicle Preference (Optional) */}
          <div className={styles.formGroup}>
            <label htmlFor={vehicleId} className={styles.label}>
              <span>Vehicle Preference</span>
              <span className={styles.optionalBadge}>(Optional)</span>
            </label>
            <select
              id={vehicleId}
              name="vehiclePreference"
              value={vehiclePreference}
              onChange={(e) => setVehiclePreference(e.target.value)}
              className={styles.select}
            >
              <option value="Exploring / General Consultation">
                Exploring / Need Advice
              </option>
              {FLEET_VEHICLES.map((car) => (
                <option key={car.id} value={`${car.name} (${car.subtitle})`}>
                  {car.name} — {car.categoryLabel}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date (Optional) */}
          <div className={`${styles.formGroup} ${styles.fullWidthCol}`}>
            <label htmlFor={dateId} className={styles.label}>
              <span>Tentative Travel Date</span>
              <span className={styles.optionalBadge}>(Optional)</span>
            </label>
            <input
              id={dateId}
              type="date"
              name="travelDate"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className={styles.input}
            />
          </div>

          {/* Message (Optional) */}
          <div className={`${styles.formGroup} ${styles.fullWidthCol}`}>
            <label htmlFor={messageId} className={styles.label}>
              <span>Message &amp; Trip Notes</span>
              <span className={styles.optionalBadge}>(Optional)</span>
            </label>
            <textarea
              id={messageId}
              name="message"
              placeholder="Tell us about your trip (e.g. pickup city, outstation or local driving, passenger count, special requirements)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.primarySubmitBtn}
            id="contact-whatsapp-submit"
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
            <span>Send Enquiry via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className={styles.secondarySubmitBtn}
            id="contact-email-submit"
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Send via Email</span>
          </button>
        </div>
      </form>

      {/* Real-time Honest Dispatch Feedback Banner */}
      {dispatchStatus && (
        <div className={styles.statusBanner} role="status">
          <svg
            className={styles.statusIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <div className={styles.statusContent}>
            <p className={styles.statusTitle}>
              {dispatchStatus === "whatsapp"
                ? "Opening WhatsApp with your prefilled enquiry..."
                : "Opening your email client with your prefilled enquiry..."}
            </p>
            <p className={styles.statusText}>
              Your enquiry has been formatted with all provided trip parameters.
              Please press &ldquo;Send&rdquo; in {dispatchStatus === "whatsapp" ? "WhatsApp" : "your email client"} to deliver it directly to the Urban Motion concierge team.
            </p>
            <p className={styles.statusDisclaimer}>
              *Urban Motion does not store data on remote databases. Your details remain entirely under your control.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
