import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Proof of Potential" },
      { name: "description", content: "Partner with us to build a more inclusive employability ecosystem in South Africa." },
      { property: "og:title", content: "Partners — Proof of Potential" },
      { property: "og:description", content: "Research, pilot and strategic partnerships." },
    ],
  }),
  component: PartnersPage,
});

const audience = ["Employers", "Universities", "TVET Colleges", "NGOs", "Youth Organisations", "Research Institutions"];

const tiers = [
  { k: "Research Partner", v: "Contribute insights and expertise to shape the platform." },
  { k: "Pilot Partner", v: "Help test future solutions with real candidates and workflows." },
  { k: "Strategic Partner", v: "Support long-term ecosystem development across SA." },
];

function PartnersPage() {
  return (
    <div>
      <PageHero
        eyebrow="partners"
        title="Partner"
        accent="with us."
        description="No single organisation can fix youth unemployment. We're building this with employers, educators, NGOs and researchers committed to a more capable, more inclusive labour market."
      />

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <p className="mono-label">{'< who_we\'re_partnering_with >'}</p>
          </Reveal>
          <StaggerGroup className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {audience.map((a, i) => (
              <motion.div key={a} variants={staggerItem} className="p-8 bg-background flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest">{a}</span>
                <span className="font-mono text-xs" style={{ color: "var(--emerald-deep)" }}>0{i + 1}</span>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <Reveal>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< partnership_tiers >'}</p>
            <h2 className="display-lg mt-6">Three ways to partner.</h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid lg:grid-cols-3 gap-px bg-white/10">
            {tiers.map((t, i) => (
              <motion.div key={t.k} variants={staggerItem} className="p-10" style={{ background: "var(--charcoal)" }}>
                <p className="font-mono text-xs" style={{ color: "var(--emerald-brand)" }}>0{i + 1}</p>
                <h3 className="display-md mt-4">{t.k}</h3>
                <p className="mt-4 font-mono text-sm text-white/70">{t.v}</p>
              </motion.div>
            ))}
          </StaggerGroup>
          <div className="mt-16">
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
