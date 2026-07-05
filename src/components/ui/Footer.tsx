"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/10 text-ivory/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl font-light tracking-[0.2em] text-ivory block">
              AURUM
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gold uppercase block -mt-1">
              Haute Joaillerie
            </span>
          </Link>
          <p className="text-xs text-warm-gray leading-relaxed max-w-sm">
            Crafting rare heirlooms and luxury jewelry from ethically sourced gold and GIA-certified diamonds since 1897. Experience the pinnacle of European craftsmanship.
          </p>
          <div className="text-xs space-y-1">
            <p className="font-semibold text-gold">Flagship Atelier</p>
            <p className="text-warm-gray">12 Place Vendôme, 75001 Paris, France</p>
          </div>
        </div>

        {/* Collections Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">
            Vaults
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/collections/all" className="hover:text-gold transition-colors duration-200">
                All Vaults
              </Link>
            </li>
            <li>
              <Link href="/collections/rings" className="hover:text-gold transition-colors duration-200">
                The Ring Vault
              </Link>
            </li>
            <li>
              <Link href="/collections/necklaces" className="hover:text-gold transition-colors duration-200">
                The Necklace Vault
              </Link>
            </li>
            <li>
              <Link href="/collections/earrings" className="hover:text-gold transition-colors duration-200">
                The Earring Vault
              </Link>
            </li>
            <li>
              <Link href="/collections/bracelets" className="hover:text-gold transition-colors duration-200">
                The Bracelet Vault
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">
            Services
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Bespoke Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Private Vault Viewing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Complimentary Resizing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Diamond Appraisals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Care & Restoration
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">
            The Aurum Ledger
          </h4>
          <p className="text-xs text-warm-gray leading-relaxed">
            Subscribe to receive private previews of seasonal capsule releases and private boutique collection updates.
          </p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="bg-charcoal border border-gold/20 text-xs px-4 py-2.5 text-ivory outline-none focus:border-gold/60 transition-colors duration-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-hover text-black font-bold uppercase tracking-widest text-[10px] py-2.5 transition-all duration-300 rounded"
            >
              Request Access
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gold/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-warm-gray gap-4">
        <p>© 2026 Aurum Jewelry Ltd. All creations hallmarked and GIA registered.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gold transition-colors duration-200">
            Terms of Sale
          </a>
          <a href="#" className="hover:text-gold transition-colors duration-200">
            Boutique Locations
          </a>
        </div>
      </div>
    </footer>
  );
}
