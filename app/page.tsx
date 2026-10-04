import Link from "next/link";
import Icon from "@/components/Icon";
import Gallery from "@/components/Gallery";
import Hours, { OpenBadge } from "@/components/Hours";
import VideoPhone from "@/components/VideoPhone";
import { Counter } from "@/components/Motion";
import { WaButton, WaLogo } from "@/components/WhatsApp";
import Spotlight from "@/components/Spotlight";
import { CTA, Reviews, SectionHead, Stars } from "@/components/Sections";
import { grades, models, services, site, steps, wa } from "@/lib/site";

const promises = [
  { icon: "shield", title: "Quality Checked", text: "Every handset is inspected and graded before it reaches you." },
  { icon: "tag", title: "Wholesale Pricing", text: "Trade-level prices that protect your margins on every unit." },
  { icon: "bolt", title: "Fast Service", text: "Quick quotes on WhatsApp and quick turnaround on orders." },
  { icon: "chat", title: "Friendly Experts", text: "Helpful staff who guide you to the right models and grades." },
];

const ticker = ["iPhone 16 Pro Max", "iPhone 15 Pro", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "Bulk Lots", "Grade A+ · A · B", "Accessories", "Wholesale Prices"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hx">
        <Spotlight />
        <div className="hx-floor" aria-hidden="true" />
        <div className="hx-giant" aria-hidden="true"><b>TECH</b>WAVE</div>
        <div className="container hx-grid">
          <div className="hx-copy">
            <span className="eyebrow anim-up" style={{ "--d": ".05s" } as React.CSSProperties}>Deira · Dubai</span>
            <h1 className="anim-up" style={{ "--d": ".15s" } as React.CSSProperties}>
              <span className="hx-line">Wholesale iPhones,</span>
              <span className="hx-neon">Priced to resell.</span>
            </h1>
            <p className="lead anim-up" style={{ "--d": ".32s" } as React.CSSProperties}>
              Graded used iPhones in bulk — today&apos;s prices on WhatsApp.
            </p>
            <div className="hero-actions anim-up" style={{ "--d": ".46s" } as React.CSSProperties}>
              <WaButton text="Get Today's Price List" />
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Icon name="pin" size={18} /> Visit the Store
              </a>
            </div>
            <dl className="hx-facts anim-up" style={{ "--d": ".6s" } as React.CSSProperties}>
              <div><dt>5.0 <Stars size={13} /></dt><dd>Google rating</dd></div>
              <div><dt><OpenBadge light /></dt><dd>Mon–Sat</dd></div>
            </dl>
          </div>

          <div className="hx-visual anim-scale" style={{ "--d": ".25s" } as React.CSSProperties}>
            <span className="hx-ring" aria-hidden="true" />
            <span className="hx-ring hx-ring-2" aria-hidden="true" />
            <VideoPhone />
            <div className="hx-chip chip-1">
              <span className="hx-chip-ic"><Icon name="boxes" size={20} /></span>
              <div><strong>Bulk Lots</strong><small>Boxed &amp; ready</small></div>
            </div>
            <div className="hx-chip chip-2">
              <span className="hx-chip-ic"><Icon name="shield" size={20} /></span>
              <div><strong>Graded Stock</strong><small>A+ · A · B · C</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>{t}<i>◆</i></span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div data-reveal><strong><Counter to={5} decimals={1} /></strong><span>Google rating</span></div>
          <div data-reveal style={{ transitionDelay: ".08s" }}><strong><Counter to={6} /></strong><span>Days a week open</span></div>
          <div data-reveal style={{ transitionDelay: ".16s" }}><strong><Counter to={4} /></strong><span>Condition grades</span></div>
          <div data-reveal style={{ transitionDelay: ".24s" }}><strong>1:1</strong><span>WhatsApp support</span></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container split">
          <div className="split-head" data-reveal>
            <SectionHead
              eyebrow="What We Offer"
              title={<>Everything a phone business <em>needs</em></>}
              text="From single devices to full wholesale lots — one dependable partner in the heart of Deira's trading district."
            />
            <WaButton text="Ask what's in stock" />
          </div>
          <ol className="svc-list">
            {services.map((s, i) => (
              <li key={s.title} className="svc" data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="svc-num">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <Icon name={s.icon} size={26} className="svc-icon" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MODELS */}
      <section className="section section-dark models-section" id="models">
        <div className="container">
          <div className="models-top" data-reveal>
            <SectionHead light eyebrow="Models We Deal In" title={<>From iPhone 11 to the <em>latest Pro Max</em></>} text="Stock moves fast and changes daily. Tap any series to ask for live availability and today's wholesale price." />
          </div>
          <ul className="mlist">
            {models.map((m, i) => (
              <li key={m.name} data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
                <a href={wa(`Hi TechWave, what's today's price and stock for ${m.name}?`)} target="_blank" rel="noopener noreferrer" className="mrow">
                  <span className="mrow-name">{m.name}</span>
                  <span className="mrow-var">{m.variants}</span>
                  <span className="mrow-ask"><WaLogo size={16} /> Ask today&apos;s price <Icon name="arrow" size={16} /></span>
                </a>
              </li>
            ))}
          </ul>
          <p className="models-note" data-reveal>All storage sizes and colours, subject to availability. Accessories available alongside every order.</p>
        </div>
      </section>

      {/* GRADES */}
      <section className="section section-ivory" id="grades">
        <div className="container">
          <div data-reveal>
            <SectionHead center eyebrow="Condition Grades" title={<>Know exactly <em>what you&apos;re buying</em></>} text="Clear grading means no surprises — choose the condition that suits your market and price point." />
          </div>
          <div className="gscale">
            {grades.map((g, i) => (
              <div key={g.g} className="gcol" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="gbar"><i style={{ width: `${100 - i * 22}%` }} /></span>
                <span className="gletter">{g.g}</span>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO / WHY */}
      <section className="section why">
        <div className="container why-grid">
          <div className="why-video" data-reveal>
            <VideoPhone className="phone-lg" />
            <div className="why-badge">
              <span>5.0</span>
              <small>Google<br />rating</small>
            </div>
          </div>
          <div>
            <div data-reveal>
              <SectionHead
                eyebrow="See Our Stock"
                title={<>Real phones. Real store. <em>Real deals.</em></>}
                text="This is our stock and our showroom in Deira — boxed lots ready for retailers, resellers and bulk buyers. Whether you buy one phone or a full carton, you get the same care."
              />
            </div>
            <div className="promises">
              {promises.map((p, i) => (
                <div key={p.title} className="promise" data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="promise-icon"><Icon name={p.icon} size={22} /></span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-actions" data-reveal>
              <WaButton text="Ask for a Video Call Viewing" msg="Hi TechWave, can I see the stock on a video call?" />
              <Link href="/about" className="text-link">More about us <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-ivory" id="how">
        <div className="container">
          <div data-reveal>
            <SectionHead center eyebrow="How To Order" title={<>From message to deal <em>in four steps</em></>} />
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t} className="step" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="center mt" data-reveal>
            <WaButton text="Start Step 1 on WhatsApp" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="gallery">
        <div className="container">
          <div data-reveal>
            <SectionHead center eyebrow="Our Store" title={<>A look <em>inside</em></>} text="Step into our showroom in Deira. Tap any photo to view it full size." />
          </div>
          <div data-reveal><Gallery /></div>
        </div>
      </section>

      <Reviews />

      {/* VISIT */}
      <section className="section section-ivory" id="visit">
        <div className="container visit-grid">
          <div data-reveal>
            <SectionHead eyebrow="Visit Us" title={<>Find us in <em>Deira</em></>} text="Drop by during opening hours to inspect stock in person, or message us first and we'll have your models ready." />
            <Hours />
          </div>
          <div className="map-card" data-reveal style={{ transitionDelay: ".1s" }}>
            <iframe src={site.mapEmbed} title="TechWave Cellular location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-foot">
              <div>
                <strong>{site.name}</strong>
                <span>{site.address}</span>
              </div>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                Directions <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
