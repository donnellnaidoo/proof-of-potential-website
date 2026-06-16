import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Proof of Potential" },
      { name: "description", content: "Essays and research notes on skills-based hiring, youth employment, and the future of work." },
      { property: "og:title", content: "Blog — Proof of Potential" },
      { property: "og:description", content: "Thought leadership on the future of employability." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { t: "Why CVs Fail Young Talent", d: "The systemic biases baked into the document that gatekeeps most of the labour market.", c: "Essay", date: "Coming soon" },
  { t: "The Future of Skills-Based Hiring", d: "What's already changing, and what's still mostly talk.", c: "Research", date: "Coming soon" },
  { t: "What Employers Actually Look For", d: "Findings from our first round of interviews with hiring managers.", c: "Findings", date: "Coming soon" },
  { t: "Hidden Barriers to Employment", d: "The invisible filters between a capable young person and their first job.", c: "Essay", date: "Coming soon" },
  { t: "Lessons From Employer Interviews", d: "Patterns and surprises from talking with HR leaders.", c: "Findings", date: "Coming soon" },
  { t: "Research Findings", d: "Rolling notes from our ongoing study of the SA hiring ecosystem.", c: "Research", date: "Coming soon" },
];

function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="blog"
        title="Notes on the future of"
        accent="work."
        description="Essays, research notes, and findings from the field. Published as we learn — not as we polish."
      />

      <section className="section-pad">
        <div className="container-page">
          <ul className="divide-y border-y border-charcoal/10">
            {posts.map((p, i) => (
              <li key={p.t}>
                <Link to="/blog" className="group grid grid-cols-12 items-center py-8 gap-6">
                  <span className="col-span-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-11 md:col-span-2 mono-label" style={{ color: "var(--emerald-deep)" }}>{p.c}</span>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="display-md group-hover:text-[var(--emerald-deep)] transition-colors">{p.t}</h3>
                    <p className="mt-2 font-mono text-sm text-muted-foreground">{p.d}</p>
                  </div>
                  <span className="hidden md:block col-span-2 mono-label">{p.date}</span>
                  <ArrowUpRight className="hidden md:block col-span-1 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
