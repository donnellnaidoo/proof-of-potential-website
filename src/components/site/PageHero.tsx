import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { staggerContainer, staggerItem } from "@/components/motion/reveal";

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
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center text-center"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="w-full max-w-[80rem] px-6 lg:px-10 flex flex-col">
          <div className="flex-1 flex flex-col justify-end pb-16">
            <motion.p className="mono-label" style={{ color: "var(--emerald-brand)" }} variants={staggerItem}>{`< ${eyebrow} >`}</motion.p>
          </div>
          <motion.h1 className="display-xl font-normal" variants={staggerItem}>
            {title} {accent && <span style={{ color: "var(--emerald-brand)" }}>{accent}</span>}
          </motion.h1>
          {(description || children) && (
            <div className="flex-1 flex flex-col justify-start pt-16">
              {description && (
                <motion.p
                  className="max-w-2xl mx-auto text-xs tracking-widest uppercase text-white/75"
                  style={{ fontFamily: "var(--font-mono)" }}
                  variants={staggerItem}
                >
                  {description}
                </motion.p>
              )}
              {children && <motion.div variants={staggerItem}>{children}</motion.div>}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
