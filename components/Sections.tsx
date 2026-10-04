import Link from "next/link";
import Icon from "./Icon";
import { reviews, site } from "@/lib/site";
import { WaButton } from "./WhatsApp";

export function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={size} />)}
    </span>
  );
}

export function SectionHead({ eyebrow, title, text, center = false, light = false }: {
  eyebrow: string; title: React.ReactNode; text?: string; center?: boolean; light?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""} ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <SectionHead eyebrow="Google Reviews" title={<>Rated <em>5.0</em> by our customers</>} />
          <div className="rating-box">
            <span className="rating-num">{site.rating.toFixed(1)}</span>
            <div>
              <Stars size={18} />
              <span>Based on {site.reviewCount} Google reviews</span>
            </div>
          </div>
        </div>
        <figure className="rv-feature" data-reveal>
          <Stars size={18} />
          <blockquote>&ldquo;{reviews[0].text}&rdquo;</blockquote>
          <figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={reviews[0].avatar} alt="" width={48} height={48} loading="lazy" />
            <span><strong>{reviews[0].name}</strong><small>Google review · {reviews[0].date}</small></span>
          </figcaption>
        </figure>
        <div className="rv-more">
          {reviews.slice(1).map((r, i) => (
            <figure key={r.name} className="rv-small" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
              <Stars size={14} />
              <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
              {r.original && <p className="review-orig">Original: &ldquo;{r.original}&rdquo;</p>}
              <figcaption><strong>{r.name}</strong> · <small>{r.date}</small></figcaption>
            </figure>
          ))}
        </div>
        <div className="center mt">
          <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            Read all reviews on Google <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner" data-reveal>
        <div>
          <span className="eyebrow">Your next step starts here</span>
          <h2>Looking for the right phones at the right price?</h2>
          <p>Ask about anything — models, grades, pricing, availability or bulk volumes. We&apos;re here to help you get started.</p>
        </div>
        <div className="cta-actions">
          <WaButton text={`WhatsApp ${site.phone}`} />
          <Link href="/contact" className="btn btn-ghost-light">Request a Quote <Icon name="arrow" size={18} /></Link>
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
            <Icon name="pin" size={18} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ crumb, title, text }: { crumb: string; title: React.ReactNode; text: string }) {
  return (
    <section className="page-hero">
      <div className="container anim-up">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <span>{crumb}</span>
        </nav>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
