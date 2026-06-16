import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import employersImg from "@/assets/employers.jpg";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Employers — Proof of Potential" },
      { name: "description", content: "Hiring beyond the CV. Discover capable talent through evidence of skills and potential." },
      { property: "og:title", content: "For Employers — Proof of Potential" },
      { property: "og:description", content: "Skills-based hiring built on evidence, not assumptions." },
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
          <div className="lg:col-span-6">
            <img src={employersImg} alt="Hiring team collaborating" loading="lazy" width={1280} height={1280} className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="mono-label">{'< the_problem >'}</p>
            <h2 className="display-lg mt-6">CVs are a poor predictor of performance.</h2>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
              Years of evidence show CVs systematically under-represent capability — especially for
              candidates without elite networks or pedigree. Skills-based approaches consistently
              outperform CV-led ones on quality of hire and retention.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< future_benefits >'}</p>
          <h2 className="display-lg mt-6 max-w-3xl">What you'll be able to do.</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/10">
            {benefits.map(([t, d], i) => (
              <div key={t} className="p-10" style={{ background: "var(--charcoal)" }}>
                <p className="font-mono text-xs" style={{ color: "var(--emerald-brand)" }}>0{i + 1}</p>
                <h3 className="display-md mt-4">{t}</h3>
                <p className="mt-4 font-mono text-sm text-white/70">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/partners" className="btn-primary">Become a Research Partner</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
