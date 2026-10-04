import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Hours from "@/components/Hours";
import ContactForm from "@/components/ContactForm";
import { PageHero, SectionHead } from "@/components/Sections";
import { faqs, site, wa } from "@/lib/site";
import { WaLogo } from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Deira, Dubai for wholesale used iPhones. Address, hours and directions.`,
};

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title={<>Let&apos;s <em>talk</em> phones</>}
        text="Tell us what you're looking for. We're here to help you get started."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <a className="wa-card" href={wa()} target="_blank" rel="noopener noreferrer" data-reveal>
              <span className="wa-card-ico"><WaLogo size={30} /></span>
              <div>
                <small>Fastest way to get prices</small>
                <strong>WhatsApp {site.phone}</strong>
                <span>Tap to chat — we reply with today&apos;s stock &amp; wholesale prices.</span>
              </div>
              <Icon name="arrow" />
            </a>
            <div className="info-card" data-reveal>
              <span className="info-icon"><Icon name="pin" /></span>
              <div>
                <h4>Address</h4>
                <p>{site.legalName}<br />{site.address}</p>
                <div className="info-links">
                  <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions <Icon name="arrow" size={15} /></a>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps <Icon name="arrow" size={15} /></a>
                </div>
              </div>
            </div>
            {site.phone && (
              <div className="info-card" data-reveal>
                <span className="info-icon"><Icon name="call" /></span>
                <div><h4>Call</h4><p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p></div>
              </div>
            )}
            {site.email && (
              <div className="info-card" data-reveal>
                <span className="info-icon"><Icon name="mail" /></span>
                <div><h4>Email</h4><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
              </div>
            )}
            <Hours />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="map-wide">
        <iframe src={site.mapEmbed} title="TechWave Cellular on the map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <section className="section section-ivory">
        <div className="container narrow">
          <SectionHead center eyebrow="Before You Get In Touch" title={<>A few helpful <em>details</em></>} />
          <div className="faqs">
            {faqs.map((f) => (
              <details key={f.q} className="faq" data-reveal>
                <summary>{f.q}<span className="faq-plus" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
