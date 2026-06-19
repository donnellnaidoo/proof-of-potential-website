import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, StaggerGroup, staggerItem } from "@/components/motion/reveal";
import { emailjs, EJS_SERVICE, EJS_TEMPLATES, getEnquiryEmail } from "@/lib/emailjs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Proof of Potential" },
      { name: "description", content: "Get in touch for general enquiries, partnerships, media, or research participation." },
      { property: "og:title", content: "Contact — Proof of Potential" },
      { property: "og:description", content: "Let's talk." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  type: z.string().min(1),
  message: z.string().trim().min(1).max(2000),
});

function ContactPage() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setLoading(true);
    const toEmail = getEnquiryEmail(parsed.data.type);

    try {
      await Promise.all([
        emailjs.send(EJS_SERVICE, EJS_TEMPLATES.notify, {
          form_type: "Contact Enquiry",
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          reply_to: parsed.data.email,
          to_email: toEmail,
          badge_label: "Enquiry Type",
          badge_value: parsed.data.type,
          detail_label: "",
          detail_value: "",
          body_label: "Message",
          body_content: parsed.data.message,
        }),
        emailjs.send(EJS_SERVICE, EJS_TEMPLATES.reply, {
          form_type: "Contact Enquiry",
          to_name: parsed.data.name,
          to_email: parsed.data.email,
          reply_to: toEmail,
          heading: "We've got your message.",
          subtext: "Your enquiry has landed safely in our inbox. We'll get back to you within a few business days.",
          badge_label: "Enquiry Type",
          badge_value: parsed.data.type,
        }),
      ]);
      setDone(true);
    } catch {
      setErr("Something went wrong. Please try again or email us directly at hello@proofofpotential.co.za.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="contact"
        title="Let's"
        accent="talk."
        description="Whether you're a young person, an employer, a partner, or a journalist — we'd love to hear from you."
      />

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <StaggerGroup className="lg:col-span-4 space-y-10">
            {[
              ["General Enquiries", "hello@proofofpotential.co.za"],
              ["Partnership Enquiries", "partners@proofofpotential.co.za"],
              ["Media Enquiries", "media@proofofpotential.co.za"],
              ["Research Participation", "research@proofofpotential.co.za"],
            ].map(([k, v]) => (
              <motion.div key={k} variants={staggerItem}>
                <p className="mono-label">{`< ${k.toLowerCase().replace(/ /g, "_")} >`}</p>
                <p className="font-mono text-xs uppercase tracking-widest mt-3">{k}</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{v}</p>
              </motion.div>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            {done ? (
              <div className="border border-charcoal/15 p-10">
                <p className="mono-label" style={{ color: "var(--emerald-deep)" }}>{'< sent >'}</p>
                <h3 className="display-md mt-4">Message received.</h3>
                <p className="mt-4 text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label className="mono-label block mb-2">Name</label>
                  <input name="name" required maxLength={100} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg" />
                </div>
                <div>
                  <label className="mono-label block mb-2">Email</label>
                  <input name="email" type="email" required maxLength={255} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg" />
                </div>
                <div>
                  <label className="mono-label block mb-2">Enquiry type</label>
                  <select name="type" required className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg">
                    <option value="">Select one…</option>
                    {["General Enquiry", "Partnership", "Media", "Research Participation"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mono-label block mb-2">Message</label>
                  <textarea name="message" required rows={5} maxLength={2000} className="w-full bg-transparent border-b border-charcoal/30 py-3 focus:border-[var(--emerald-brand)] focus:outline-none text-lg" />
                </div>
                {err && <p className="font-mono text-xs text-destructive">{err}</p>}
                <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
