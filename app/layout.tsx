import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsApp";
import Intro from "@/components/Intro";
import { RevealObserver, ScrollProgress } from "@/components/Motion";
import { site } from "@/lib/site";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/900.css";
import "@fontsource/michroma/400.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Wholesale Used iPhones in Deira, Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["used iPhones wholesale Dubai", "wholesale iPhones Deira", "mobile phone store Deira", "bulk iPhones UAE", ...site.categories],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#05070c" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  address: { "@type": "PostalAddress", streetAddress: "78F4+X3", addressLocality: "Deira", addressRegion: "Dubai", addressCountry: "AE" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "12:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:00", closes: "23:30" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "4" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=document.documentElement;try{var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;h.classList.add(rm?'intro-seen':'intro-play');}catch(e){h.classList.add('intro-play');}})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Intro />
        <ScrollProgress />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <RevealObserver />
      </body>
    </html>
  );
}
