import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef } from "react";
import about from "@/assets/about.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.floor(v).toString() + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, mv]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 20, suffix: "+", label: "Years in the Mill Scale & Metal Industry" },
  { value: 100, suffix: "%", label: "Quality Manufacturing Standard" },
];


export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={about}
                alt="Precision steel structure"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-xs hidden md:block">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Since Inception</div>
              <div className="font-display text-2xl leading-tight">Built on precision, refined by experience.</div>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold" /> About Shah & Shah
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            >
              Built on Precision.
              <br />
              <span className="text-gradient-gold italic font-light">Driven by Quality.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                At Shah & Shah, we specialize in delivering high-quality
                fabrication and engineering solutions for industrial
                applications — from metal bending and rolling to surface
                treatment, custom manufacturing, and structural fabrication.
              </p>
              <p>
                We are committed to innovation, safety, precision, and customer
                satisfaction, delivering reliable solutions for multiple
                industries nationwide.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-card p-6 lg:p-8">
                  <div className="font-display text-3xl lg:text-4xl text-gradient-gold font-semibold">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
