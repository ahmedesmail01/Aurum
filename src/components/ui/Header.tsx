"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { cartCount, toggleCart } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Collections",
      href: "/collections/all",
      dropdown: [
        { name: "All Vaults", href: "/collections/all" },
        { name: "Rings", href: "/collections/rings" },
        { name: "Necklaces", href: "/collections/necklaces" },
        { name: "Earrings", href: "/collections/earrings" },
        { name: "Bracelets", href: "/collections/bracelets" },
      ],
    },
    { name: "Our Story", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gold/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-ivory hover:text-gold transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="font-serif text-2xl lg:text-3xl font-light tracking-[0.25em] text-ivory hover:text-gold transition-colors duration-300">
              AURUM
            </span>
            <span className="text-[8px] tracking-[0.4em] text-gold uppercase -mt-0.5">
              Haute Joaillerie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-300 ${
                    pathname === link.href || pathname.startsWith(link.href.replace("/all", ""))
                      ? "text-gold"
                      : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="h-3 w-3 opacity-60 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-charcoal border border-gold/15 p-2 rounded shadow-2xl backdrop-blur-md">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-[11px] uppercase tracking-widest text-ivory/85 hover:text-gold hover:bg-black/30 px-4 py-2.5 rounded transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Cart Icon & Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-1.5 text-ivory hover:text-gold transition-colors duration-300"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="h-5.5 w-5.5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-gold text-black font-semibold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-md border border-black"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/90 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 bottom-0 left-0 w-4/5 max-w-sm bg-charcoal border-r border-gold/10 z-30 p-8 flex flex-col justify-between md:hidden"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl tracking-[0.2em] text-ivory">AURUM</span>
                    <span className="text-[7px] tracking-[0.3em] text-gold uppercase">Haute Joaillerie</span>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6 text-warm-gray" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-2">
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!link.dropdown) setIsMobileMenuOpen(false);
                        }}
                        className="text-sm font-semibold uppercase tracking-widest text-ivory hover:text-gold block"
                      >
                        {link.name}
                      </Link>

                      {link.dropdown && (
                        <div className="pl-4 border-l border-gold/10 flex flex-col gap-2.5 mt-2">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs tracking-wider text-warm-gray hover:text-gold block"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="border-t border-gold/10 pt-6 text-[10px] text-warm-gray tracking-wider">
                <p className="uppercase text-gold mb-1 font-semibold">Flagship Boutique</p>
                <p>Place Vendôme, Paris</p>
                <p className="mt-4">© 2026 Aurum. All rights reserved.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
