import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Precision metal fabrication workshop"
          width={1920}
          height={1080}
          className="size-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* animated ambient orb */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 size-[600px] rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] leading-[0.95] font-semibold tracking-tight max-w-5xl"
        >
          Precision
          <br />
          Metal Fabrication
          <br />
          <span className="text-gradient-gold italic font-light">& Engineering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Delivering high-quality fabrication solutions with innovation,
          engineering excellence, and uncompromising quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#capabilities"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.02]"
          >
            Explore Capabilities
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-medium hover:bg-white/5 transition"
          >
            Contact Us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          Scroll
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
