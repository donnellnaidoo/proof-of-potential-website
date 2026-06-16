import { Link } from "@tanstack/react-router";

const primary = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/employers", label: "Employers" },
  { to: "/partners", label: "Partners" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = ["Privacy Policy", "Terms of Use", "Cookie Policy", "POPIA Compliance"];

export function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
      <div className="container-page section-pad">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{'< end_of_page >'}</p>
            <h2 className="display-lg mt-6">
              Ready to shape <br /> the future of <span style={{ color: "var(--emerald-brand)" }}>work?</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/research" className="btn-primary">Join Research</Link>
              <Link to="/partners" className="btn-outline">Become a Partner</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mono-label">Navigate</p>
            <ul className="mt-6 space-y-3">
              {primary.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="font-mono text-xs uppercase tracking-widest hover:text-[var(--emerald-brand)] transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mono-label">Legal</p>
            <ul className="mt-6 space-y-3">
              {legal.map((l) => (
                <li key={l} className="font-mono text-xs uppercase tracking-widest text-white/70">{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50">
          <p><span style={{ color: "var(--emerald-brand)" }}>{'<'}</span> proof_of_potential <span style={{ color: "var(--emerald-brand)" }}>{'>'}</span> &copy; {new Date().getFullYear()}</p>
          <p>Demonstrating Capability. Expanding Opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
