import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ParallaxHero from "@/components/ui/ParallaxHero";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  const collections = [
    {
      name: "The Ring Vault",
      slug: "rings",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop",
      count: "3 Masterpieces"
    },
    {
      name: "The Necklace Vault",
      slug: "necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      count: "3 Masterpieces"
    },
    {
      name: "The Earring Vault",
      slug: "earrings",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop",
      count: "3 Masterpieces"
    },
    {
      name: "The Bracelet Vault",
      slug: "bracelets",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=800&auto=format&fit=crop",
      count: "3 Masterpieces"
    }
  ];

  return (
    <div className="bg-obsidian w-full overflow-hidden">
      {/* 1. Parallax Hero Section */}
      <ParallaxHero />

      {/* 2. Brand Statement Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gold/10">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold block">
              Architectural Hallmarks
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-ivory leading-tight">
              Bespoke Sculptures, Hand-Welded In White And Yellow Gold
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-sm text-warm-gray leading-relaxed font-light max-w-xl">
              Aurum designs are rooted in geometric tension and organic flow. We discard standard jewelry presets to weld custom settings by hand, framing rare gems in architectural structures. Our signature brushed satin finish ensures gold sparkles softly under candlelit rooms, letting diamond fire take center stage.
            </p>
          </ScrollReveal>
          
          {/* Trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <ScrollReveal direction="up" delay={0.4} className="space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <Sparkles className="h-4.5 w-4.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Ethical Sourcing</span>
              </div>
              <p className="text-[11px] text-warm-gray leading-relaxed font-light">
                Every metal grain is fully recycled, and diamond coordinates are traced from source.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.5} className="space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <ShieldCheck className="h-4.5 w-4.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">GIA Validation</span>
              </div>
              <p className="text-[11px] text-warm-gray leading-relaxed font-light">
                Individually numbered laser hallmarks corresponding to official GIA database entries.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6} className="space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <Compass className="h-4.5 w-4.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Bespoke Fitting</span>
              </div>
              <p className="text-[11px] text-warm-gray leading-relaxed font-light">
                Atelier artists resize and balance weights relative to your wrist structure.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Side Image Display */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="scale" delay={0.3} className="relative w-full aspect-[4/5] max-w-sm overflow-hidden border border-gold/15 rounded bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
              alt="Artisan assembling custom pendant link"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Collections Section */}
      <section className="py-24 bg-black/40 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold block">
                The Vaults
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-ivory">
                Curated By Categories
              </h2>
            </div>
            <Link
              href="/collections/all"
              className="group text-xs uppercase tracking-widest text-gold hover:text-gold-hover flex items-center gap-2 font-semibold transition-all duration-300"
            >
              Enter The Main Vault
              <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Staggered Collection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, index) => (
              <ScrollReveal
                key={col.slug}
                direction="up"
                delay={index * 0.1}
                className="group relative aspect-[3/4] overflow-hidden border border-gold/10 rounded bg-charcoal"
              >
                <Link href={`/collections/${col.slug}`} className="block w-full h-full relative">
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-108 group-hover:rotate-1 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-colors duration-300 group-hover:from-black/95" />
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-[9px] uppercase tracking-widest text-gold font-bold mb-1">
                      {col.count}
                    </p>
                    <h3 className="font-serif text-xl tracking-wider text-ivory group-hover:text-gold transition-colors duration-300">
                      {col.name}
                    </h3>
                    <div className="h-[1px] w-0 bg-gold mt-3 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Selection Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold block">
            Seasonal Selections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-ivory">
            The Featured Vault Selection
          </h2>
          <p className="text-xs text-warm-gray max-w-md mx-auto leading-relaxed font-light">
            Each unique item represents a pinnacle of craft and materials, curated for visual depth and light refraction.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              direction="up"
              delay={idx * 0.08}
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Custom Bespoke Request CTA */}
      <section className="relative py-32 overflow-hidden bg-black flex items-center border-t border-gold/10">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none scale-105"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200')` }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">
              Private Commission
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-ivory leading-tight">
              Create An Heirloom Hallmarked For Eternity
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xs sm:text-sm text-warm-gray max-w-xl mx-auto leading-relaxed font-light">
              Collaborate directly with our master goldsmiths and certified gemologists to build a custom solitaire engagement ring, family crest, or architectural pendant. We trace diamonds directly to Canadian mines and hand-select color hues.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <button className="mt-4 border border-gold bg-gold/10 text-gold hover:bg-gold hover:text-black text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-all duration-300 rounded shadow-md">
              Book A Private Salon Appointment
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
