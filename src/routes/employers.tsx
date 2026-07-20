import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import employersImg from "@/assets/employers.jpg";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const path = "/employers";
const pageTitle = "Skills-Based Hiring for Employers | Proof of Potential";
const pageDescription =
  "Find capable talent beyond the CV. Proof of Potential helps South African employers hire on evidence of skills, capability and potential — not just a CV.";
const ogImage = absoluteUrl(employersImg);

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: `${SITE_URL}${path}` },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}${path}#webpage`,
          url: `${SITE_URL}${path}`,
          name: pageTitle,
          description: pageDescription,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "Audience", audienceType: "Employers" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Employers", path },
          ])
        ),
      },
    ],
  }),
  component: EmployersPage,
});

const benefits = [
  ["Better talent discovery", "Reach capable candidates conventional pipelines miss."],
  ["Reduced hiring risk", "Signal-rich assessment instead of CV signals alone."],
  ["Skills-based evaluation", "Evaluate what people can do, not just where they went."],
  ["Improved candidate insights", "Get a fuller picture of fit before the interview."],
];

function EmployersPage() {
  return (
    <div>
      <PageHero
        eyebrow="for_employers"
        title="Hiring beyond"
        accent="the CV."
        description="Traditional recruitment overlooks capable candidates. Proof of Potential is exploring new ways to identify talent through evidence of capability, skills, and potential."
      />

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <img src={employersImg} alt="South African hiring team reviewing candidates on skills, not just a CV" loading="lazy" width={1280} height={1280} className="aspect-[5/4] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="mono-label">{'< the_problem >'}</p>
            <h2 className="display-lg mt-6">CVs are a poor predictor of performance.</h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              Years of evidence show CVs systematically under-represent capability — especially for
              candidates without elite networks or pedigree. Skills-based approaches consistently
              outperform CV-led ones on quality of hire and retention.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <Reveal>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< future_benefits >'}</p>
            <h2 className="display-lg mt-6 max-w-3xl">What you'll be able to do.</h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-px bg-white/10">
            {benefits.map(([t, d], i) => (
              <motion.div key={t} variants={staggerItem} className="p-10" style={{ background: "var(--charcoal)" }}>
                <p className="font-mono text-xs" style={{ color: "var(--emerald-brand)" }}>0{i + 1}</p>
                <h3 className="display-md mt-4">{t}</h3>
                <p className="mt-4 font-mono text-sm text-white/70">{d}</p>
              </motion.div>
            ))}
          </StaggerGroup>
          <div className="mt-16">
            <Link to="/partners" className="btn-primary">Become a Research Partner</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
