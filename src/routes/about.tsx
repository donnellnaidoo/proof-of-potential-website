import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import heroImg from "@/assets/hero.jpg";
import { SITE_URL, absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";

const path = "/about";
const pageTitle = "About Us — Tackling Youth Unemployment in SA | Proof of Potential";
const pageDescription =
  "South Africa has one of the world's highest youth unemployment rates. Learn why Proof of Potential exists and how skills-first hiring can close the gap.";
const ogImage = absoluteUrl(heroImg);

export const Route = createFileRoute("/about")({
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
          "@type": "AboutPage",
          "@id": `${SITE_URL}${path}#webpage`,
          url: `${SITE_URL}${path}`,
          name: pageTitle,
          description: pageDescription,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path },
          ])
        ),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { k: "Evidence First", v: "Decisions should be driven by data and demonstrated ability." },
  { k: "Inclusion", v: "Talent exists everywhere. Opportunity does not." },
  { k: "Growth", v: "Potential can be developed." },
  { k: "Integrity", v: "Assessment and recommendations must be trustworthy." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="about_us"
        title="Our story."
        accent="Why this exists."
        description="South Africa has one of the highest youth unemployment rates in the world. Behind every statistic is a capable person who never got a chance to prove what they can do."
      />

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mono-label">{'< our_story >'}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 space-y-6 text-sm leading-relaxed">
            <div style={{ fontFamily: "var(--font-mono)" }} className="space-y-6">
              <p>
                Proof of Potential began with a simple observation: the people who get hired are
                rarely the only people who could succeed in the job. CVs filter on history, not
                ability. Networks reward proximity, not merit. Qualifications gate opportunity
                long before capability is ever assessed.
              </p>
              <p>
                Meanwhile, employers struggle to find the right people — not because the talent
                doesn't exist, but because the tools they're using were never designed to surface it.
              </p>
              <p>
                We are building a different system. One where evidence of capability matters more
                than the brand of a school. One where potential is something you can demonstrate,
                not something you have to inherit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <StaggerGroup className="container-page section-pad grid lg:grid-cols-2 gap-16">
          <motion.div variants={staggerItem}>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< mission >'}</p>
            <h2 className="display-lg mt-6">Mission</h2>
            <p className="mt-6 text-sm text-white/75 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              To help individuals discover where they are most likely to succeed — while helping
              employers identify talent based on demonstrated capability and potential.
            </p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< vision >'}</p>
            <h2 className="display-lg mt-6">Vision</h2>
            <p className="mt-6 text-sm text-white/75 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              To create a more inclusive hiring ecosystem where opportunity is determined by
              capability rather than circumstance.
            </p>
          </motion.div>
        </StaggerGroup>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <p className="mono-label">{'< values >'}</p>
            <h2 className="display-lg mt-6">What we stand on.</h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            {values.map((v, i) => (
              <motion.div key={v.k} variants={staggerItem} className="p-10 bg-background">
                <p className="font-mono text-xs tracking-widest" style={{ color: "var(--emerald-deep)" }}>0{i + 1}</p>
                <h3 className="display-md mt-4">{v.k}</h3>
                <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">{v.v}</p>
              </motion.div>
            ))}
          </StaggerGroup>
          <div className="mt-16">
            <Link to="/research" className="btn-dark">Join the Research</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
