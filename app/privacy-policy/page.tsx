import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title={<>Privacy <em>Policy</em></>} text="How we handle the information you share with us." />
      <section className="section">
        <div className="container narrow prose">
          <p>
            This website is operated by {site.legalName} (&ldquo;TechWave&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), located at {site.address}.
            We respect your privacy and only collect the information needed to respond to you.
          </p>
          <h2>Information we collect</h2>
          <p>When you send an enquiry, we receive the details you choose to provide — such as your name, phone number and the products you are interested in. We do not sell or rent your personal information.</p>
          <h2>How we use it</h2>
          <p>We use your information solely to answer your enquiry, prepare quotes, and provide our products and services.</p>
          <h2>Third-party services</h2>
          <p>This site embeds Google Maps and displays Google reviews. These services may collect data according to Google&apos;s own privacy policy.</p>
          <h2>Contact</h2>
          <p>For any privacy questions, please visit us at {site.address} or reach us through the contact page.</p>
        </div>
      </section>
    </>
  );
}
