"use client";

import React, { useRef, useState, useEffect } from "react";

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum rotation in degrees
  perspective?: number; // Perspective distance in px
}

export default function TiltWrapper({
  children,
  className = "",
  maxRotation = 12,
  perspective = 1000,
}: TiltWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion or touch screens (disable tilt on mobile/tablets)
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    
    if (prefersReduced || isTouch) {
      setIsDisabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled || !containerRef.current) return;

    const el = containerRef.current;
    const rect = el.getBoundingClientRect();

    // Mouse coordinates relative to the element (0 to width, 0 to height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates (-0.5 to 0.5)
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    // Calculate rotation angles (Y-axis for horizontal movement, X-axis for vertical movement)
    // Vertical mouse movement rotates X-axis; horizontal rotates Y-axis.
    const rotateY = px * maxRotation;
    const rotateX = -py * maxRotation; // Negative so tilting top goes back

    // Glare position (percentage)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    // Throttle calculation using requestAnimationFrame for performance
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (el) {
        el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = "0.45";
        glareRef.current.style.background = `radial-gradient(circle 120px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.25) 0%, rgba(223, 193, 93, 0.1) 40%, transparent 80%)`;
      }
    });
  };

  const handleMouseEnter = () => {
    if (isDisabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isDisabled) return;
    setIsHovered(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Reset element transformations smoothly
    if (containerRef.current) {
      containerRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      containerRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
      glareRef.current.style.transition = "opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    }
  };

  // Remove transition style on mouse enter so movement is responsive, put it back on leave
  const handleTransitionEnd = () => {
    if (isHovered && containerRef.current) {
      containerRef.current.style.transition = "none";
    }
    if (isHovered && glareRef.current) {
      glareRef.current.style.transition = "none";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTransitionEnd={handleTransitionEnd}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glare Layer */}
      {!isDisabled && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none z-10 opacity-0 transition-opacity duration-300"
        />
      )}

      {/* Children content */}
      <div className="relative z-0 h-full w-full">{children}</div>
    </div>
  );
}
