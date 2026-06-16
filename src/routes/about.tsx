import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Proof of Potential" },
      { name: "description", content: "Why Proof of Potential exists: youth unemployment, hidden talent, skills-first hiring, and career uncertainty." },
      { property: "og:title", content: "About Proof of Potential" },
      { property: "og:description", content: "Our mission, vision and values." },
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
          <div className="lg:col-span-4">
            <p className="mono-label">{'< our_story >'}</p>
          </div>
          <div className="lg:col-span-8 space-y-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
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
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad grid lg:grid-cols-2 gap-16">
          <div>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< mission >'}</p>
            <h2 className="display-lg mt-6">Mission</h2>
            <p className="mt-6 text-sm text-white/75 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              To help individuals discover where they are most likely to succeed — while helping
              employers identify talent based on demonstrated capability and potential.
            </p>
          </div>
          <div>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< vision >'}</p>
            <h2 className="display-lg mt-6">Vision</h2>
            <p className="mt-6 text-sm text-white/75 leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              To create a more inclusive hiring ecosystem where opportunity is determined by
              capability rather than circumstance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <p className="mono-label">{'< values >'}</p>
          <h2 className="display-lg mt-6">What we stand on.</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            {values.map((v, i) => (
              <div key={v.k} className="p-10 bg-background">
                <p className="font-mono text-xs tracking-widest" style={{ color: "var(--emerald-deep)" }}>0{i + 1}</p>
                <h3 className="display-md mt-4">{v.k}</h3>
                <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">{v.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/research" className="btn-dark">Join the Research</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
