import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shah & Shah — Precision Metal Fabrication & Engineering" },
      {
        name: "description",
        content:
          "Premium metal fabrication and engineering — pressure vessels, heat exchangers, storage tanks, structural and custom manufacturing for industries nationwide.",
      },
      { property: "og:title", content: "Shah & Shah — Precision Metal Fabrication" },
      {
        property: "og:description",
        content:
          "High-quality fabrication solutions engineered with precision, safety and uncompromising quality.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <WhyUs />
      <Contact />
      <Toaster />
    </main>
  );
}
