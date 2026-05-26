import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(20),
  requirement: z.string().trim().min(5, "Tell us a bit more").max(1500),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Contact
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            >
              Let's build something
              <span className="text-gradient-gold italic font-light"> precise.</span>
            </motion.h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Share your requirement — our engineering team will respond with a
              tailored proposal within one business day.
            </p>

            <div className="mt-12 space-y-5">
              <a href="tel:+919766101339" className="group flex items-center gap-4 text-sm">
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <Phone className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Phone</div>
                  <div className="font-display text-lg">+91 97661 01339</div>
                </div>
              </a>
              <a href="mailto:deepak@shahnshah.in" className="group flex items-center gap-4 text-sm">
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <Mail className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
                  <div className="font-display text-lg">deepak@shahnshah.in</div>
                </div>
              </a>
              <a
                href="https://wa.me/919766101339"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-sm"
              >
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <MessageCircle className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</div>
                  <div className="font-display text-lg">Chat with us</div>
                </div>
              </a>
            </div>

            <div className="mt-12 rounded-3xl overflow-hidden border border-border aspect-[16/10] glass">
              <iframe
                title="Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.5%2C18.9%2C73.2%2C19.3&layer=mapnik"
                className="size-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass rounded-3xl p-8 lg:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" required={false} />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Requirement
              </label>
              <textarea
                name="requirement"
                rows={5}
                maxLength={1500}
                required
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg font-display resize-none transition-colors"
                placeholder="Tell us about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Enquiry"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>

      <a
        href="https://wa.me/919766101339"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gradient-gold text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition"
      >
        <MessageCircle className="size-6" />
      </a>

      <footer className="mt-32 pt-10 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-gold" />
            <span className="font-display text-foreground">Shah & Shah</span>
            <span>· Metal Fabrication & Engineering</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-4" />
            <span>Serving industries nationwide · India</span>
          </div>
          <div>© {new Date().getFullYear()} Shah & Shah. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg font-display transition-colors"
      />
    </div>
  );
}
