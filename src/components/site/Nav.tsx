import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full py-3 px-5 lg:px-8"
            : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-block size-2 rounded-full bg-gold shadow-[0_0_20px_oklch(0.78_0.13_75)]" />
          <span className="font-display text-base tracking-tight font-semibold">
            Shah <span className="text-muted-foreground font-light">&</span> Shah
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition"
        >
          Request Quote
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 glass rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-medium px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
