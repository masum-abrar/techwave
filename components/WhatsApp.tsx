"use client";

import { useEffect, useState } from "react";
import { quickMessages, site, wa } from "@/lib/site";
import Icon from "./Icon";
import { LogoMark } from "./Logo";

export function WaLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
      <path d="M16.04 3C8.86 3 3.04 8.82 3.04 16c0 2.3.6 4.55 1.75 6.53L3 29l6.64-1.74A12.94 12.94 0 0 0 16.04 29C23.22 29 29 23.18 29 16S23.22 3 16.04 3zm0 23.62c-2 0-3.96-.54-5.67-1.56l-.41-.24-3.94 1.03 1.05-3.84-.27-.4A10.6 10.6 0 0 1 5.4 16c0-5.86 4.78-10.63 10.64-10.63 5.86 0 10.6 4.77 10.6 10.63 0 5.87-4.74 10.62-10.6 10.62zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

export function WaButton({ text, label = "Chat on WhatsApp", className = "", msg }: { text?: string; label?: string; className?: string; msg?: string }) {
  return (
    <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${className}`}>
      <WaLogo size={20} /> {text ?? label}
    </a>
  );
}

/** Floating WhatsApp widget: pulsing button + chat-style popup with one-tap quick messages. */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  // nudge: hidden → shown (after 3s) → leaving (fade) → gone. Visible for 4 seconds in total.
  const [nudge, setNudge] = useState<"hidden" | "shown" | "leaving" | "gone">("hidden");

  useEffect(() => {
    const t1 = setTimeout(() => setNudge((n) => (n === "hidden" ? "shown" : n)), 3000);
    const t2 = setTimeout(() => setNudge((n) => (n === "shown" ? "leaving" : n)), 7000);
    const t3 = setTimeout(() => setNudge("gone"), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-pop" role="dialog" aria-label="Chat with TechWave on WhatsApp">
          <div className="wa-pop-head">
            <span className="wa-avatar"><LogoMark size={42} /><i /></span>
            <div>
              <strong>TechWave Cellular</strong>
              <small>Typically replies within minutes</small>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}><Icon name="close" size={18} /></button>
          </div>
          <div className="wa-pop-body">
            <div className="wa-bubble">
              <p>Hello! 👋 Welcome to TechWave Cellular.</p>
              <p>Looking for wholesale used iPhones? Tap a message below and we&apos;ll reply on WhatsApp with today&apos;s prices.</p>
              <span className="wa-time">TechWave · Deira, Dubai</span>
            </div>
            <div className="wa-chips">
              {quickMessages.map((m) => (
                <a key={m} href={wa(m)} target="_blank" rel="noopener noreferrer">{m}</a>
              ))}
            </div>
          </div>
          <a className="wa-pop-cta" href={wa()} target="_blank" rel="noopener noreferrer">
            <WaLogo size={18} /> Start chat · {site.phone}
          </a>
        </div>
      )}
      {!open && (nudge === "shown" || nudge === "leaving") && (
        <button className={`wa-nudge ${nudge === "leaving" ? "is-leaving" : ""}`} onClick={() => setOpen(true)}>
          Need today&apos;s iPhone prices? <strong>Chat with us</strong>
        </button>
      )}
      <button
        className={`wa-fab ${open ? "is-open" : ""}`}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        onClick={() => { setOpen(!open); setNudge("gone"); }}
      >
        {open ? <Icon name="close" size={26} /> : <WaLogo size={30} />}
      </button>
    </div>
  );
}
