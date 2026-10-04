import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, wa } from "@/lib/site";
import { WaLogo } from "./WhatsApp";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo size="lg" />
          <p className="footer-about">{site.description}</p>
          <p className="footer-legal">{site.legalName}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#models">Models in Stock</Link></li>
            <li><Link href="/#how">How to Order</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li className="footer-line"><Icon name="pin" size={16} /> {site.address}</li>
            <li className="footer-line"><Icon name="clock" size={16} /> Mon–Sat: 12pm–3pm, 5pm–11:30pm</li>
            <li className="footer-line"><WaLogo size={16} /> <a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a></li>
            {site.email && (
              <li className="footer-line"><Icon name="mail" size={16} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            )}
          </ul>
          <a className="footer-link" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <span>Deira · Dubai · UAE</span>
      </div>
    </footer>
  );
}
