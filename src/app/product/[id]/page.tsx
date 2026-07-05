"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Sparkles, Truck, Undo2, Award, Heart, ShoppingBag, ChevronRight } from "lucide-react";
import { products, getProductById } from "@/data/products";
import TiltWrapper from "@/components/ui/TiltWrapper";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const product = getProductById(id);
  const { addToCart } = useCart();

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Custom Size selection state based on product category
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"details" | "shipping" | "authenticity">("details");
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="bg-obsidian min-h-screen text-ivory flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="font-serif text-2xl text-warm-gray italic">Heirloom not found in vaults.</p>
        <p className="text-xs text-warm-gray max-w-sm leading-relaxed">
          The jewelry piece ID you requested does not correspond to an active vault reservation.
        </p>
        <Link
          href="/collections/all"
          className="border border-gold px-8 py-3 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300"
        >
          Return to main vaults
        </Link>
      </div>
    );
  }

  // Determine size options
  const getSizeOptions = () => {
    switch (product.category.toLowerCase()) {
      case "rings":
        return ["5", "6", "7", "8", "9"];
      case "necklaces":
        return ["16 inches", "18 inches", "20 inches"];
      case "bracelets":
        return ["6.5 in", "7.0 in", "7.5 in"];
      default:
        return []; // No size selection for earrings
    }
  };

  const sizes = getSizeOptions();

  const handleAddToBag = () => {
    if (sizes.length > 0 && !selectedSize) {
      alert("Please select a sizing custom option before reservation.");
      return;
    }
    addToCart(product, 1, selectedSize || undefined);
  };

  return (
    <div className="bg-obsidian min-h-screen text-ivory relative">
      
      {/* 1. Breadcrumb navigation */}
      <div className="bg-black/10 border-b border-gold/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-warm-gray">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/collections/all" className="hover:text-gold transition-colors">Vaults</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/collections/${product.category}`} className="hover:text-gold transition-colors">{product.category}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gold truncate">{product.name}</span>
        </div>
      </div>

      {/* 2. Main Page Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Interactive Image Gallery */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative">
            {/* Interactive 3D Main Image */}
            <TiltWrapper className="glass-card aspect-[4/5] rounded border border-gold/15 bg-charcoal overflow-hidden max-w-2xl mx-auto shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} main view`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </TiltWrapper>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-20 border transition-all duration-300 bg-charcoal rounded overflow-hidden ${
                  activeImageIndex === idx
                    ? "border-gold scale-102 shadow-lg shadow-gold/5"
                    : "border-gold/10 hover:border-gold/45"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Sticky Purchase Panel */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 h-fit space-y-8">
          
          {/* Headline & Pricing */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-accent">
              {product.category} vault reserve
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-ivory">
              {product.name}
            </h1>
            
            {/* Reviews & Ratings */}
            <div className="flex items-center gap-3">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold text-gold"
                        : "text-warm-gray"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">
                {product.rating} ({product.reviews} private reviews)
              </span>
            </div>

            <p className="font-serif text-2xl font-semibold text-gold pt-2">
              ${product.price.toLocaleString()}
            </p>
          </div>

          <div className="h-[1px] bg-gold/10" />

          {/* Narrative Summary */}
          <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
            {product.description}
          </p>

          {/* Sizing selection */}
          {sizes.length > 0 && (
            <div className="space-y-3">
              <div className="flex justify-between text-xs tracking-wider">
                <span className="uppercase text-[11px] font-semibold text-gold">Select size</span>
                <span className="text-warm-gray text-[10px] italic">Bespoke fitting available</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs px-4 py-2.5 border rounded transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-gold border-gold text-black font-bold"
                        : "border-gold/15 text-ivory hover:border-gold/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Buttons: Add to Bag & Wishlist */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToBag}
              className="flex-1 bg-gold py-4 text-xs font-bold uppercase tracking-widest text-black hover:bg-gold-hover active:scale-[0.98] transition-all duration-300 rounded shadow-lg shadow-gold/5 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Reserve Heirloom
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-4 border rounded transition-all duration-300 ${
                isWishlisted
                  ? "border-red-400 bg-red-400/5 text-red-400"
                  : "border-gold/15 text-warm-gray hover:text-gold hover:border-gold/40"
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className={`h-4.5 w-4.5 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Delivery & Security Accents */}
          <div className="bg-charcoal/40 border border-gold/10 p-4 rounded space-y-3 text-[11px] text-warm-gray leading-relaxed font-light">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ivory uppercase text-[10px] tracking-wider">Secured Vault Transport</p>
                <p>Delivered via specialized armored couriers. Fully insured in transit.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-ivory uppercase text-[10px] tracking-wider">Complimentary Atelier Return</p>
                <p>Includes a 30-day structural inspection and return period.</p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gold/10" />

          {/* Custom Tabs using Framer Motion */}
          <div className="space-y-4">
            <div className="flex border-b border-gold/10 text-xs">
              {(["details", "shipping", "authenticity"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 pb-3 text-center uppercase tracking-widest font-semibold transition-colors duration-200 relative ${
                    activeTab === tab ? "text-gold" : "text-warm-gray hover:text-ivory"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[100px] text-xs text-warm-gray leading-relaxed font-light pt-2">
              {activeTab === "details" && (
                <ul className="list-disc pl-4 space-y-1.5">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="marker:text-gold">{detail}</li>
                  ))}
                </ul>
              )}
              {activeTab === "shipping" && (
                <p>
                  Our diamonds are protected under armored custody during shipping. Every box contains the GIA diamond passport, the hallmarks certificates, and customized jewelry cleaning cloth. Sizing alterations take 3-5 business days at our Place Vendôme studio.
                </p>
              )}
              {activeTab === "authenticity" && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gold">
                    <Award className="h-4 w-4" />
                    <span className="uppercase text-[9px] tracking-wider font-bold">Hallmarked Signature</span>
                  </div>
                  <p>
                    Every design is stamped with the Aurum trademark and European carat standards hallmarks. Certifications from the Gemological Institute of America (GIA) are enclosed in a premium leather presentation folder.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* 3. Recommends Section */}
      <section className="py-24 border-t border-gold/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-light tracking-wide text-center text-ivory mb-16">
            Other Treasures in the Vault
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
