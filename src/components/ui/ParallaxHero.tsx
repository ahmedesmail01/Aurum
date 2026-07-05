"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // 1. Entrance Animations (On Load)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Split the title into words/letters for staggered fade-up
      if (titleRef.current) {
        const titleText = titleRef.current.innerText;
        titleRef.current.innerHTML = titleText
          .split(" ")
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="title-word inline-block transform translate-y-full opacity-0">${word}&nbsp;</span></span>`
          )
          .join("");

        tl.to(".title-word", {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
        });
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.8"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
      }

      // 2. Parallax Scroll Animations (Only if motion is not reduced)
      if (!prefersReduced && containerRef.current) {
        // Background layer: scrolls slower
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Middle layer (Product image): moves slightly faster upward
        gsap.to(midRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Text overlay: moves even faster upward for depth
        gsap.to(textRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[95vh] w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Layer: Textured dark gold stone */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] scale-105"
      >
        <Image
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury textured gold backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/60" />
      </div>

      {/* Middle Product Showcase Layer */}
      <div
        ref={midRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none"
      >
        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-40 md:opacity-60 mix-blend-screen filter drop-shadow-[0_0_50px_rgba(223,193,93,0.15)] animate-pulse [animation-duration:8s]">
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
            alt="Showcase Diamond ring floating"
            fill
            priority
            sizes="(max-width: 768px) 320px, 600px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Foreground Text Layer */}
      <div
        ref={textRef}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16"
      >
        <div className="space-y-4">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-gold">
            The Aurum Vault Collection
          </span>
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-gold-gradient leading-[1.1]"
          >
            Liquid Fire Suspended In Gold
          </h1>
          <p
            ref={subtitleRef}
            className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-warm-gray tracking-wide font-light leading-relaxed pt-2"
          >
            Hand-forged heirlooms, certified diamonds, and raw architectural symmetry. Designed for the modern collector.
          </p>
        </div>

        <div ref={ctaRef} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/collections/all"
            className="bg-gold hover:bg-gold-hover text-black text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-all duration-300 rounded shadow-lg shadow-gold/10 hover:shadow-gold/25"
          >
            Explore Vaults
          </Link>
          <Link
            href="/about"
            className="border border-ivory/20 hover:border-gold hover:bg-gold/5 text-ivory text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-all duration-300 rounded"
          >
            Our Atelier
          </Link>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-obsidian to-transparent z-20 pointer-events-none" />
    </section>
  );
}
