"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  triggerHook?: string; // e.g., "top 85%"
  scrub?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = "",
  triggerHook = "top 85%",
  scrub = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !elementRef.current) return;

    const el = elementRef.current;
    
    // Set initial values and final animation properties based on direction
    let fromProps: gsap.TweenVars = { opacity: 0 };
    let toProps: gsap.TweenVars = {
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        toggleActions: scrub ? "play none none none" : "play none none reverse",
        // Once-only reveal for clean, professional entrance
        once: true,
      },
    };

    switch (direction) {
      case "up":
        fromProps.y = distance;
        toProps.y = 0;
        break;
      case "down":
        fromProps.y = -distance;
        toProps.y = 0;
        break;
      case "left":
        fromProps.x = distance;
        toProps.x = 0;
        break;
      case "right":
        fromProps.x = -distance;
        toProps.x = 0;
        break;
      case "scale":
        fromProps.scale = 0.92;
        toProps.scale = 1;
        break;
      case "fade":
      default:
        // Already handled by opacity: 0 -> 1
        break;
    }

    // Run GSAP animation
    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromProps, toProps);
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, triggerHook, scrub]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
