import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.jpg";
import youthImg from "@/assets/youth.jpg";
import employersImg from "@/assets/employers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proof of Potential — Discover Potential. Unlock Opportunity." },
      { name: "description", content: "Helping young people identify careers where they'll succeed, and enabling employers to discover talent beyond traditional CVs." },
      { property: "og:title", content: "Proof of Potential" },
      { property: "og:description", content: "Discover potential. Unlock opportunity." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex flex-col" style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <img
          src={heroImg}
          alt="Young South African professionals in conversation"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)" }} />
        <Header variant="dark" />
        <div className="relative flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-[80rem] px-6 lg:px-10 flex flex-col">
            <div className="flex-1 flex flex-col justify-end pb-16">
              <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>
                {'< demonstrating_capability • expanding_opportunity >'}
              </p>
            </div>
            <h1 className="display-xl font-normal" style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}>
              Discover Potential. <br />
              Unlock <span style={{ color: "var(--emerald-brand)" }}>Opportunity.</span>
            </h1>
            <div className="flex-1 flex flex-col justify-start pt-16">
              <p className="max-w-2xl mx-auto text-xs tracking-widest uppercase text-white/75" style={{ fontFamily: "var(--font-mono)" }}>
                Proof of Potential helps young people identify careers where they are most likely to succeed
                — and enables employers to discover talent beyond traditional CVs.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/research" className="btn-primary">Join the Research <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/partners" className="btn-outline">Partner With Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="mono-label">{'< the_challenge >'}</p>
            <h2 className="display-lg mt-6">The system is missing talent.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-sm leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
            <p>
              Millions of young people are excluded from opportunities because traditional hiring relies
              heavily on qualifications, experience, and networks. Many capable individuals never get
              the chance to demonstrate what they can do.
            </p>
            <p>
              Employers face a different challenge: finding candidates with the right potential,
              attitude, and capability remains difficult using CVs alone.
            </p>
            <p className="text-2xl lg:text-3xl font-semibold leading-snug pt-4" style={{ borderLeft: "3px solid var(--emerald-brand)", paddingLeft: "1.5rem" }}>
              Proof of Potential aims to bridge this gap.
            </p>
          </div>
        </div>
      </section>

      {/* NEW APPROACH */}
      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< a_new_approach >'}</p>
          <h2 className="display-lg mt-6 max-w-4xl">
            Talent should be discovered through demonstrated <span style={{ color: "var(--emerald-brand)" }}>capability</span>, not just credentials.
          </h2>

          <div className="mt-20 grid lg:grid-cols-2 gap-px bg-white/10">
            {[
              {
                img: youthImg,
                tag: "for_young_people",
                title: "Find where you'll thrive.",
                items: ["Understand strengths", "Explore suitable careers", "Identify skill gaps", "Build evidence of capability"],
              },
              {
                img: employersImg,
                tag: "for_employers",
                title: "Hire on what actually matters.",
                items: ["Discover untapped talent", "Reduce hiring risk", "Assess potential more effectively", "Make informed hiring decisions"],
              },
            ].map((c) => (
              <div key={c.tag} style={{ background: "var(--charcoal)" }} className="p-8 lg:p-12">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt="" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
                </div>
                <p className="mono-label mt-8" style={{ color: "var(--emerald-brand)" }}>{`< ${c.tag} >`}</p>
                <h3 className="display-md mt-4">{c.title}</h3>
                <ul className="mt-8 space-y-3">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs tracking-widest uppercase text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0" style={{ background: "var(--emerald-brand)" }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH IN PROGRESS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="mono-label">{'< research_in_progress >'}</p>
              <h2 className="display-lg mt-6">We're listening before we build.</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                We are conducting interviews with the people closest to the problem — to understand
                hiring challenges, barriers to employment, career discovery, and what really
                predicts workplace success.
              </p>
              <Link to="/research" className="btn-dark mt-10">Participate in Research <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
                {["Employers", "Recruiters", "HR Professionals", "Students", "Graduates", "Unemployed Youth", "Educators"].map((p, i) => (
                  <li key={p} className="flex items-center justify-between py-5">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono text-xs uppercase tracking-widest flex-1 ml-8">{p}</span>
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--emerald-deep)" }}>interviewing</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LONG TERM VISION */}
      <section style={{ background: "var(--emerald-brand)", color: "var(--charcoal)" }}>
        <div className="container-page section-pad">
          <p className="mono-label" style={{ color: "var(--charcoal)" }}>{'< long_term_vision >'}</p>
          <h2 className="display-lg mt-6 max-w-4xl">
            Building South Africa's Employability Intelligence Platform.
          </h2>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Career choices are evidence-based",
              "Hiring decisions focus on capability",
              "Potential is measurable",
              "Opportunity is more accessible",
            ].map((v, i) => (
              <div key={v} className="border-t-2 border-charcoal pt-6">
                <span className="font-mono text-xs">0{i + 1}</span>
                <p className="display-md mt-4">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
