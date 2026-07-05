"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Calendar, Compass, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the outer container and animate panels as overlays on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Scroll depth equal to 2 screen heights
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate Slide 2 in from bottom
      tl.fromTo(
        slide2Ref.current,
        { yPercent: 100 },
        { yPercent: 0, ease: "none" }
      );

      // Animate Slide 3 in from bottom
      tl.fromTo(
        slide3Ref.current,
        { yPercent: 100 },
        { yPercent: 0, ease: "none" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-ivory">
      
      {/* 1. Intro Section (Standard Scroll) */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center space-y-4">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">
          Our Atelier & Heritage
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-gold-gradient">
          Crafting Legacies In Fine Metal
        </h1>
        <p className="text-xs sm:text-sm text-warm-gray max-w-xl mx-auto leading-relaxed font-light">
          Aurum designs are forged on three core pillars: raw mineral honesty, structural tension, and bespoke personalization. Discover the heritage behind the signature hallmark.
        </p>
      </section>

      {/* 2. Pinned Interactive Panels Section */}
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-black border-t border-b border-gold/10 hidden md:block"
      >
        
        {/* Slide 1: The Origin (Static Base Layer) */}
        <div
          ref={slide1Ref}
          className="absolute inset-0 w-full h-full bg-black grid grid-cols-2 z-10"
        >
          <div className="p-16 flex flex-col justify-center space-y-6">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">
              Chapter I: The Origin
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-ivory leading-tight">
              Raw Metal & Ethical Forging
            </h2>
            <p className="text-xs text-warm-gray leading-relaxed font-light">
              Aurum was founded as a private atelier in 1897, focusing on structural commissions for European collectors. We rejected the mass-produced presets of standard jewelry to focus on hand-drawn gold wire work. Today, every grain of yellow, white, and rose gold we weld is 100% recycled and certified ethically sourced.
            </p>
            <div className="flex gap-4 pt-4 text-[10px] uppercase tracking-widest font-semibold text-gold">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Est. 1897</span>
              <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Solid 18K Gold</span>
            </div>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
              alt="Artisan melting gold grains in a crucible"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Slide 2: The Architecture (Slides in over Slide 1) */}
        <div
          ref={slide2Ref}
          className="absolute inset-0 w-full h-full bg-[#0d0d0d] grid grid-cols-2 z-20 border-t border-gold/10"
        >
          <div className="relative w-full h-full order-last">
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop"
              alt="Macro structural view of gemstone setting design"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="p-16 flex flex-col justify-center space-y-6">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">
              Chapter II: The Architecture
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-ivory leading-tight">
              Tension, Angles, & GIA Diamonds
            </h2>
            <p className="text-xs text-warm-gray leading-relaxed font-light">
              We draw inspiration from modern brutalist architectural shapes. Our diamond rings utilize tension-settings that suspend stones without bulky prongs, maximizing side light refraction. We work exclusively with certified colorless diamonds of high clarity, ensuring structural shapes never compromise light fire.
            </p>
            <div className="flex gap-4 pt-4 text-[10px] uppercase tracking-widest font-semibold text-gold">
              <span className="flex items-center gap-1.5"><Compass className="h-3.5 w-3.5" /> GIA Checked</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Tension Settings</span>
            </div>
          </div>
        </div>

        {/* Slide 3: The Legacy (Slides in over Slide 2) */}
        <div
          ref={slide3Ref}
          className="absolute inset-0 w-full h-full bg-[#050505] grid grid-cols-2 z-30 border-t border-gold/10"
        >
          <div className="p-16 flex flex-col justify-center space-y-6">
            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">
              Chapter III: The Legacy
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-wide text-ivory leading-tight">
              The Place Vendôme Atelier
            </h2>
            <p className="text-xs text-warm-gray leading-relaxed font-light">
              Today, our main salon overlooks Place Vendôme in Paris. Here, customers consult directly with goldsmiths to sketch custom bands and choose raw gems from our vaults. The legacy of Aurum is carried forward in every piece that is hand-hallmarked inside the shank, representing a unique piece of jewelry history.
            </p>
            <Link
              href="/collections/all"
              className="mt-4 border border-gold/50 bg-gold/10 hover:bg-gold hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 w-fit rounded"
            >
              Enter Vault Reserves
            </Link>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop"
              alt="Interior of private showroom boutique"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Mobile Fallback (Unpinned sections) */}
      <section className="md:hidden space-y-12 px-6 pb-20">
        
        {/* Chapter 1 */}
        <div className="space-y-4 border border-gold/10 p-6 rounded bg-charcoal/40">
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">Chapter I: The Origin</span>
          <h2 className="font-serif text-2xl font-light text-ivory">Raw Metal & Ethical Forging</h2>
          <div className="relative aspect-video w-full rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800"
              alt="Atelier Origin"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-warm-gray leading-relaxed font-light">
            Founded as a private atelier in 1897, focusing on structural commissions. Every metal grain is 100% recycled and ethically sourced.
          </p>
        </div>

        {/* Chapter 2 */}
        <div className="space-y-4 border border-gold/10 p-6 rounded bg-charcoal/40">
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">Chapter II: The Architecture</span>
          <h2 className="font-serif text-2xl font-light text-ivory">Tension, Angles, & GIA Diamonds</h2>
          <div className="relative aspect-video w-full rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800"
              alt="Atelier Architecture"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-warm-gray leading-relaxed font-light">
            Geometric brutalist-inspired settings that maximize side light refraction and diamonds.
          </p>
        </div>

        {/* Chapter 3 */}
        <div className="space-y-4 border border-gold/10 p-6 rounded bg-charcoal/40">
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold">Chapter III: The Legacy</span>
          <h2 className="font-serif text-2xl font-light text-ivory">The Place Vendôme Atelier</h2>
          <div className="relative aspect-video w-full rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800"
              alt="Atelier Legacy"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-warm-gray leading-relaxed font-light">
            Our flagship boutique overlooks Place Vendôme in Paris, holding our private commission records.
          </p>
          <Link
            href="/collections/all"
            className="block text-center border border-gold bg-gold/10 text-gold hover:bg-gold hover:text-black text-xs font-bold uppercase tracking-widest py-3 transition-all duration-300 rounded"
          >
            Enter Vault Reserves
          </Link>
        </div>
      </section>

      {/* 4. Atelier Numbers (Muted elegance) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gold/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-black/20">
        <div className="space-y-2">
          <p className="font-serif text-4xl text-gold font-light">1897</p>
          <p className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Atelier Foundation</p>
        </div>
        <div className="space-y-2">
          <p className="font-serif text-4xl text-gold font-light">120+</p>
          <p className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Bespoke Hallmarks</p>
        </div>
        <div className="space-y-2">
          <p className="font-serif text-4xl text-gold font-light">100%</p>
          <p className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Traceable Source</p>
        </div>
        <div className="space-y-2">
          <p className="font-serif text-4xl text-gold font-light">GIA</p>
          <p className="text-[9px] uppercase tracking-widest text-warm-gray font-semibold">Certified Standards</p>
        </div>
      </section>

    </div>
  );
}
