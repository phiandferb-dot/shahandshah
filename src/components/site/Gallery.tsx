import { motion } from "framer-motion";

// Placeholder gallery — replace `photos` with real project images once provided.
const photos: { src: string; alt: string; caption?: string }[] = [
  // { src: "/gallery/01.jpg", alt: "Project 01", caption: "Pressure vessel — site install" },
];

export function Gallery() {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 text-xs tracking-[0.3em] text-primary uppercase"
          >
            <span className="h-px w-10 bg-primary/60" />
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            From workshop floor
            <br />
            <span className="italic text-primary/90">to finished asset.</span>
          </motion.h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            A visual record of fabrication in progress — material, weld, and form.
          </p>
        </div>

        {photos.length === 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-sm border border-border/40 bg-muted/20 flex items-center justify-center text-xs text-muted-foreground/50 tracking-widest uppercase"
              >
                Photo {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((p, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-sm bg-muted/20"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                {p.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs tracking-widest uppercase text-white/90 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
