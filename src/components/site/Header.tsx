import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/employers", label: "Employers" },
  { to: "/partners", label: "Partners" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  const text = isDark ? "text-offwhite" : "text-charcoal";
  const border = isDark ? "border-white/10" : "border-charcoal/10";

  return (
    <header className={`absolute inset-x-0 top-0 z-50 border-b ${border}`}>
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className={`brand-mark text-lg ${text}`}>
          <span style={{ color: "var(--emerald-brand)" }}>{'<'}</span> proof_of_potential{" "}
          <span style={{ color: "var(--emerald-brand)" }}>{'>'}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`font-mono text-xs uppercase tracking-widest ${text} hover:opacity-60 transition-opacity`}
              activeProps={{ style: { color: "var(--emerald-brand)" } }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/research" className="btn-primary">
            Join Research
          </Link>
        </div>

        <button
          aria-label="Menu"
          className={`lg:hidden ${text}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className={`lg:hidden border-t ${border} ${isDark ? "bg-charcoal" : "bg-offwhite"}`}>
          <div className="container-page py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`font-mono text-sm uppercase tracking-widest ${text}`}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/research" className="btn-primary self-start" onClick={() => setOpen(false)}>
              Join Research
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
