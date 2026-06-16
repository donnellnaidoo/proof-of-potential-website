import type { ReactNode } from "react";
import { Header } from "./Header";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col" style={{ background: "var(--charcoal)", color: "var(--offwhite)" }}>
      <Header variant="dark" />
      <div className="relative flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[80rem] px-6 lg:px-10 flex flex-col">
          <div className="flex-1 flex flex-col justify-end pb-16">
            <p className="mono-label" style={{ color: "var(--emerald-brand)" }}>{`< ${eyebrow} >`}</p>
          </div>
          <h1 className="display-xl font-normal">
            {title} {accent && <span style={{ color: "var(--emerald-brand)" }}>{accent}</span>}
          </h1>
          {(description || children) && (
            <div className="flex-1 flex flex-col justify-start pt-16">
              {description && (
                <p className="max-w-2xl mx-auto text-xs tracking-widest uppercase text-white/75" style={{ fontFamily: "var(--font-mono)" }}>
                  {description}
                </p>
              )}
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
