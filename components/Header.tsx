"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, wa } from "@/lib/site";
import { WaLogo } from "./WhatsApp";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#models", label: "Stock" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={15} /> {site.address}
          </a>
          <span className="hide-sm">
            <Icon name="clock" size={15} /> Mon–Sat · 12pm–3pm &amp; 5pm–11:30pm
          </span>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="topbar-wa">
            <WaLogo size={15} /> {site.phone}
          </a>
        </div>
      </div>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={path === n.href ? "active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm hide-sm btn-wa-ico">
              <WaLogo size={18} /> WhatsApp Us
            </a>
            <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
        <div className={`mobile-nav ${open ? "open" : ""}`}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label} <Icon name="chevron" size={18} />
            </Link>
          ))}
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WaLogo size={20} /> WhatsApp {site.phone}
          </a>
        </div>
      </header>
    </>
  );
}
