import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import researchImg from "@/assets/research.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Proof of Potential" },
      { name: "description", content: "Help shape the future of employability. Participate in our research with youth, employers, recruiters and educators." },
      { property: "og:title", content: "Research — Proof of Potential" },
      { property: "og:description", content: "Participate in research shaping skills-based hiring." },
    ],
  }),
  component: ResearchPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  stakeholder: z.string().min(1, "Please select"),
  availability: z.string().trim().max(500).optional().or(z.literal("")),
});

const groups = [
  { k: "Youth", v: "Share your experiences finding work." },
  { k: "Employers", v: "Help us understand hiring challenges." },
  { k: "Recruiters", v: "Share insights into talent identification." },
  { k: "Educators", v: "Help us understand career readiness." },
];

function ResearchPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="research"
        title="Help shape the future of"
        accent="employability."
        description="We're talking with the people closest to the problem. Your perspective will directly inform how we design tools for talent discovery and skills-based hiring."
      />

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <img src={researchImg} alt="Researcher interviewing a participant" loading="lazy" width={1280} height={1280} className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-sm leading-relaxed">
            <p className="mono-label">{'< why_research_matters >'}</p>
            <div style={{ fontFamily: "var(--font-mono)" }} className="space-y-6">
              <p>
                The systems we use to match people with opportunity were not designed with the
                full picture. Before building anything, we want to deeply understand how hiring
                actually works today — what helps, what hurts, and what's missing.
              </p>
              <p>
                Your input will help shape an evidence-based platform that serves both the people
                looking for work and the organisations looking for the right talent.
              </p>
              <p className="mono-label">{'< how_data_is_used >'}</p>
              <p className="text-muted-foreground">
                Conversations are confidential. Findings are aggregated and anonymised. We never
                share individual responses with third parties.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <Reveal>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< who_we\'re_speaking_with >'}</p>
            <h2 className="display-lg mt-6">Participant groups.</h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {groups.map((g, i) => (
              <motion.div key={g.k} variants={staggerItem} className="p-8" style={{ background: "var(--charcoal)" }}>
                <p className="font-mono text-xs" style={{ color: "var(--emerald-brand)" }}>0{i + 1}</p>
                <h3 className="font-mono text-xs uppercase tracking-widest mt-4">{g.k}</h3>
                <p className="mt-4 font-mono text-sm text-white/70">{g.v}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mono-label">{'< sign_up >'}</p>
            <h2 className="display-lg mt-6">Participate in research.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Add your name to the list. We'll reach out with a short, time-flexible interview
              suited to your stakeholder group.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            {submitted ? (
              <div className="border border-charcoal/15 p-10">
                <p className="mono-label" style={{ color: "var(--emerald-deep)" }}>{'< thank_you >'}</p>
                <h3 className="display-md mt-4">We'll be in touch.</h3>
                <p className="mt-4 text-muted-foreground">Your interest has been recorded. Watch your inbox in the coming weeks.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "organisation", label: "Organisation (optional)", type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mono-label block mb-2">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      maxLength={255}
                      className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg"
                    />
                  </div>
                ))}
                <div>
                  <label className="mono-label block mb-2">Stakeholder type</label>
                  <select name="stakeholder" required className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg">
                    <option value="">Select one…</option>
                    {["Youth / Student", "Graduate", "Unemployed youth", "Employer", "Recruiter / HR", "Educator", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mono-label block mb-2">Availability (optional)</label>
                  <textarea name="availability" rows={3} maxLength={500} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg" placeholder="e.g. Weekday evenings, 30 minutes" />
                </div>
                {error && <p className="font-mono text-xs text-destructive">{error}</p>}
                <button type="submit" className="btn-primary">Submit</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
