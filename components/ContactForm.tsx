"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "./Icon";

/**
 * Enquiry form. If a WhatsApp number is set in lib/site.ts the enquiry opens in WhatsApp;
 * otherwise, if an email is set, it opens the visitor's mail app. Connect a backend
 * (e.g. a Next.js route handler + Resend/Formspree) to receive submissions directly.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = [
      `Hello TechWave, I'd like to enquire.`,
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Buyer type: ${d.get("type")}`,
      `Models / quantity: ${d.get("models") || "-"}`,
      `Message: ${d.get("message") || "-"}`,
    ].join("\n");

    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Wholesale enquiry")}&body=${encodeURIComponent(msg)}`;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card form-sent">
        <span className="sent-icon"><Icon name="check" size={28} /></span>
        <h3>Thank you</h3>
        <p>
          Your enquiry is ready. If nothing opened, please visit us at {site.address} during business hours —
          we&apos;ll be glad to help.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <h3>Request a Quote</h3>
      <p className="form-intro">Tell us what you&apos;re looking for — models, storage, grades and quantities.</p>
      <div className="form-row">
        <label>
          Full name
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          Phone / WhatsApp
          <input name="phone" required placeholder="+971 …" autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <label>
        I am a
        <select name="type" defaultValue="Retailer / Shop">
          <option>Retailer / Shop</option>
          <option>Reseller / Trader</option>
          <option>Bulk / Export buyer</option>
          <option>Individual buyer</option>
        </select>
      </label>
      <label>
        Models &amp; quantity
        <input name="models" placeholder="e.g. 50 × iPhone 13 128GB, Grade A" />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} placeholder="Any dates, preferences or questions" />
      </label>
      <button className="btn btn-gold btn-block" type="submit">
        Send Enquiry <Icon name="arrow" size={18} />
      </button>
    </form>
  );
}
