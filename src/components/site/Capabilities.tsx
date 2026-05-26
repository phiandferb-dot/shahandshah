import { motion } from "motion/react";
import capabilities from "@/assets/capabilities.jpg";

const items = [
  { n: "01", t: "Metal Bending", d: "CNC-controlled bending for complex geometries with tight tolerances." },
  { n: "02", t: "Rolling", d: "Heavy-plate rolling for cylinders, cones and curved structures." },
  { n: "03", t: "Surface Treatment", d: "Sand-blasting, passivation and protective coatings." },
  { n: "04", t: "Design & Engineering", d: "In-house design, FEA validation and detailed drawings." },
  { n: "05", t: "Structural Fabrication", d: "Precision-welded steel structures for industrial sites." },
  { n: "06", t: "Industrial Manufacturing", d: "End-to-end manufacturing from raw plate to finished asset." },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={capabilities}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" /> Capabilities
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
            Six disciplines.
            <br />
            <span className="text-gradient-gold italic font-light">One standard of precision.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-2">
            {items.map((it, i) => (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative grid md:grid-cols-12 gap-6 items-baseline py-8 border-b border-border hover:border-gold/40 transition-colors"
              >
                <div className="md:col-span-2 font-display text-xs tracking-[0.3em] text-gold">
                  {it.n}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {it.t}
                  </h3>
                </div>
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">
                  {it.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
