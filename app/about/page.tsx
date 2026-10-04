import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import VideoPhone from "@/components/VideoPhone";
import { WaButton } from "@/components/WhatsApp";
import { CTA, PageHero, Reviews, SectionHead } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Get to know ${site.name} — a cell phone store and wholesaler of used iPhones in Deira, Dubai.`,
};

const values = [
  { t: "Quality first", d: "Good quality phones are what our customers mention most — it's the standard we hold every device to." },
  { t: "Fair, reasonable prices", d: "Wholesale pricing that works for retailers and resellers, and honest prices for walk-in buyers." },
  { t: "People who help", d: "A friendly, helpful team that keeps service fast and straightforward." },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title={<>About <em>TechWave</em> Cellular</>}
        text={site.tagline}
      />

      <section className="section">
        <div className="container about-grid">
          <div className="about-media" data-reveal>
            <VideoPhone className="phone-lg" />
          </div>
          <div>
            <SectionHead eyebrow="Who We Are" title={<>Wholesale phones, <em>done properly</em></>} />
            <p className="body-lg">{site.description}</p>
            <p className="body-lg muted">
              Officially registered as <strong>{site.legalName}</strong>, we operate as a cell phone store, wholesaler
              and wholesale-market trader from {site.address} — at the centre of Dubai&apos;s mobile trading scene.
            </p>
            <ul className="checks">
              {site.categories.map((c) => (
                <li key={c}><Icon name="check" size={18} /> {c}</li>
              ))}
              <li><Icon name="check" size={18} /> Mobile phones &amp; accessories trading</li>
            </ul>
            <div className="why-actions">
              <WaButton text="Chat on WhatsApp" />
              <Link href="/contact" className="btn btn-outline">Contact page <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead center light eyebrow="What We Stand For" title={<>Our <em>promise</em></>} />
          <div className="values">
            {values.map((v, i) => (
              <div key={v.t} className="value" data-reveal>
                <span className="value-num">{["I", "II", "III"][i]}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <SectionHead center eyebrow="Photo Gallery" title={<>Our <em>store</em></>} />
          <Gallery />
        </div>
      </section>

      <section className="section">
        <div className="container visit-grid">
          <div>
            <SectionHead eyebrow="Plan Your Visit" title={<>Know when to <em>reach us</em></>} text="We'd love to hear from you. Planning ahead? Contact us to find a convenient time." />
            <Link href="/contact" className="text-link">Contact details &amp; directions <Icon name="arrow" size={18} /></Link>
          </div>
          <Hours />
        </div>
      </section>

      <Reviews />
      <CTA />
    </>
  );
}
