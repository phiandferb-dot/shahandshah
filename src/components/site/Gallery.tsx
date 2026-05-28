import { motion } from "framer-motion";

const photos: { src: string; alt: string }[] = [
  { src: "/189A326D-0213-46C5-B7C4-95C40B6B72F0_1_201_a.jpeg", alt: "Metal fabrication detail" },
  { src: "/4036802F-F3D8-438C-8417-C5EA9E0500F5_1_201_a.jpeg", alt: "Storage tank in workshop" },
  { src: "/808A887F-AF95-4D82-ADA6-A4A4A623C023.png", alt: "Workers in manufacturing facility" },
  { src: "/8D11470E-45C1-4F8F-91DF-05C54A2F54F7.png", alt: "Welding in progress" },
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
            Archival
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight"
          >
            <span className="italic text-primary">Built to spec.</span>
            <br />
            Built to last.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-sm bg-muted/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] brightness-75 group-hover:brightness-90"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
