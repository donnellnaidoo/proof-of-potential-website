import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, StaggerGroup, staggerContainer, staggerItem } from "@/components/motion/reveal";
import heroImg from "@/assets/hero.jpg";
import youthImg from "@/assets/youth.jpg";
import employersImg from "@/assets/employers.jpg";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

const pageTitle = "Proof of Potential — Skills-Based Hiring & Career Discovery";
const pageDescription =
  "Proof of Potential helps young South Africans discover careers where they'll thrive, and helps employers hire on skills and potential — not just a CV.";
const ogImage = absoluteUrl(heroImg);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
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
        <motion.div
          className="relative flex-1 flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <div className="w-full max-w-[80rem] px-6 lg:px-10 flex flex-col">
            <div className="flex-1 flex flex-col justify-end pb-16">
              <motion.p className="mono-label" style={{ color: "var(--emerald-brand)" }} variants={staggerItem}>
                {'< demonstrating_capability • expanding_opportunity >'}
              </motion.p>
            </div>
            <motion.h1
              className="display-xl font-normal"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
              variants={staggerItem}
            >
              Discover Potential. <br />
              Unlock <span style={{ color: "var(--emerald-brand)" }}>Opportunity.</span>
            </motion.h1>
            <div className="flex-1 flex flex-col justify-start pt-16">
              <motion.p
                className="max-w-2xl mx-auto text-xs tracking-widest uppercase text-white/75"
                style={{ fontFamily: "var(--font-mono)" }}
                variants={staggerItem}
              >
                Proof of Potential helps young people identify careers where they are most likely to succeed
                — and enables employers to discover talent beyond traditional CVs.
              </motion.p>
              <motion.div className="mt-6 flex flex-wrap justify-center gap-4" variants={staggerItem}>
                <Link to="/research" className="btn-primary">Join the Research <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/partners" className="btn-outline">Partner With Us</Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE CHALLENGE */}
      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mono-label">{'< the_challenge >'}</p>
            <h2 className="display-lg mt-6">The system is missing talent.</h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="lg:col-span-7 lg:col-start-6 space-y-6 text-sm leading-relaxed"
          >
            <div style={{ fontFamily: "var(--font-mono)" }} className="space-y-6">
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
          </Reveal>
        </div>
      </section>

      {/* NEW APPROACH */}
      <section style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
        <div className="container-page section-pad">
          <Reveal>
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< a_new_approach >'}</p>
            <h2 className="display-lg mt-6 max-w-4xl">
              Talent should be discovered through demonstrated <span style={{ color: "var(--emerald-brand)" }}>capability</span>, not just credentials.
            </h2>
          </Reveal>

          <StaggerGroup className="mt-20 grid lg:grid-cols-2 gap-px bg-white/10">
            {[
              {
                img: youthImg,
                alt: "Young South African exploring career options through skills-based assessment",
                tag: "for_young_people",
                title: "Find where you'll thrive.",
                items: ["Understand strengths", "Explore suitable careers", "Identify skill gaps", "Build evidence of capability"],
              },
              {
                img: employersImg,
                alt: "Employer evaluating candidates on skills and capability, not just a CV",
                tag: "for_employers",
                title: "Hire on what actually matters.",
                items: ["Discover untapped talent", "Reduce hiring risk", "Assess potential more effectively", "Make informed hiring decisions"],
              },
            ].map((c) => (
              <motion.div key={c.tag} variants={staggerItem} style={{ background: "var(--charcoal)" }} className="p-8 lg:p-12">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.alt} loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
                </div>
                <p className="mono-label mt-8" style={{ color: "var(--emerald-brand)" }}>{`< ${c.tag} >`}</p>
                <h3 className="display-md mt-4">{c.title}</h3>
                <ul className="mt-8 space-y-3">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs tracking-widest uppercase text-white/80">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0" style={{ background: "var(--emerald-brand)" }} />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* RESEARCH IN PROGRESS */}
      <section className="section-pad">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <p className="mono-label">{'< research_in_progress >'}</p>
              <h2 className="display-lg mt-6">We're listening before we build.</h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: "var(--font-mono)" }}>
                We are conducting interviews with the people closest to the problem — to understand
                hiring challenges, barriers to employment, career discovery, and what really
                predicts workplace success.
              </p>
              <Link to="/research" className="btn-dark mt-10">Participate in Research <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
            <StaggerGroup as="ul" className="lg:col-span-6 lg:col-start-7 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {["Employers", "Recruiters", "HR Professionals", "Students", "Graduates", "Unemployed Youth", "Educators"].map((p, i) => (
                <motion.li key={p} variants={staggerItem} className="flex items-center justify-between py-5">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-xs uppercase tracking-widest flex-1 ml-8">{p}</span>
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--emerald-deep)" }}>interviewing</span>
                </motion.li>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* LONG TERM VISION */}
      <section style={{ background: "var(--emerald-brand)", color: "var(--charcoal)" }}>
        <div className="container-page section-pad">
          <Reveal>
            <p className="mono-label" style={{ color: "var(--charcoal)" }}>{'< long_term_vision >'}</p>
            <h2 className="display-lg mt-6 max-w-4xl">
              Building South Africa's Employability Intelligence Platform.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Career choices are evidence-based",
              "Hiring decisions focus on capability",
              "Potential is measurable",
              "Opportunity is more accessible",
            ].map((v, i) => (
              <motion.div key={v} variants={staggerItem} className="border-t-2 border-charcoal pt-6">
                <span className="font-mono text-xs">0{i + 1}</span>
                <p className="display-md mt-4">{v}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Footer />
    </div>
  );
}
