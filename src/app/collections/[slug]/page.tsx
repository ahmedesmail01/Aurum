"use client";

import React, { useState, useEffect, useMemo, use } from "react";
import Link from "next/link";
import { SlidersHorizontal, ArrowUpDown, RefreshCw, Grid3X3, Grid2X2 } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // State management for filters and sorting
  const [selectedCategory, setSelectedCategory] = useState(slug);
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  // Sync category state with route changes
  useEffect(() => {
    setSelectedCategory(slug);
  }, [slug]);

  // Categories list
  const categories = [
    { name: "All Vaults", slug: "all" },
    { name: "Rings", slug: "rings" },
    { name: "Necklaces", slug: "necklaces" },
    { name: "Earrings", slug: "earrings" },
    { name: "Bracelets", slug: "bracelets" },
  ];

  // Filtering & sorting logic computed in-memory
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by Price
    result = result.filter((p) => p.price <= maxPrice);

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategory, maxPrice, sortBy]);

  const handleResetFilters = () => {
    setMaxPrice(6000);
    setSortBy("featured");
  };

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "rings":
        return "The Ring Vault";
      case "necklaces":
        return "The Necklace Vault";
      case "earrings":
        return "The Earring Vault";
      case "bracelets":
        return "The Bracelet Vault";
      case "all":
      default:
        return "The Main Vault Selection";
    }
  };

  return (
    <div className="bg-obsidian min-h-screen text-ivory">
      {/* 1. Header Banner */}
      <div className="border-b border-gold/10 bg-black/30 py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">
            Bespoke Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-gold-gradient mt-2 uppercase">
            {getCategoryTitle()}
          </h1>
          <p className="text-xs text-warm-gray max-w-lg mx-auto font-light leading-relaxed">
            Hand-welded structures housing GIA certified solitaire diamonds and cushion-cut natural emeralds. Filter our private reserve below.
          </p>
        </div>
      </div>

      {/* 2. Collections Category Navigation Bar */}
      <div className="border-b border-gold/5 bg-charcoal/30 sticky top-[72px] md:top-[80px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`text-[10px] uppercase tracking-widest px-4 py-2 border rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? "bg-gold border-gold text-black"
                  : "border-gold/15 text-ivory/80 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Workspace */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Filters and Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gold/5 pb-8 mb-12">
          
          {/* Left panel: Filters (Interactive) */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-warm-gray">
            
            {/* Price Slider */}
            <div className="flex items-center gap-4">
              <SlidersHorizontal className="h-4 w-4 text-gold" />
              <div className="flex flex-col gap-1.5 min-w-[150px]">
                <div className="flex justify-between text-[10px]">
                  <span>Max Price:</span>
                  <span className="text-gold font-semibold">${maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="6000"
                  step="250"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-gold h-1 bg-charcoal-light rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Reset Button */}
            {(maxPrice !== 6000 || sortBy !== "featured") && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-gold hover:text-gold-hover uppercase text-[10px] font-bold tracking-wider transition-colors duration-200"
              >
                <RefreshCw className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>

          {/* Right panel: Sorting & Layout */}
          <div className="flex items-center justify-between lg:justify-end gap-6 text-xs">
            {/* Sort selection */}
            <div className="flex items-center gap-2 text-warm-gray">
              <ArrowUpDown className="h-3.5 w-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-charcoal border border-gold/15 text-ivory text-[11px] px-3 py-1.5 rounded outline-none focus:border-gold/50 cursor-pointer"
              >
                <option value="featured">Vault Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid layout toggle (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 border-l border-gold/15 pl-4">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 transition-colors duration-200 ${gridCols === 3 ? "text-gold" : "text-warm-gray hover:text-ivory"}`}
                aria-label="3 Column Grid"
              >
                <Grid2X2 className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 transition-colors duration-200 ${gridCols === 4 ? "text-gold" : "text-warm-gray hover:text-ivory"}`}
                aria-label="4 Column Grid"
              >
                <Grid3X3 className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Product Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <p className="font-serif text-xl text-warm-gray italic">No pieces found matching your criteria.</p>
            <p className="text-xs text-warm-gray">Try adjusting the price threshold or category filter.</p>
            <button
              onClick={handleResetFilters}
              className="border border-gold/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              gridCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
            } gap-x-6 gap-y-12`}
          >
            {filteredAndSortedProducts.map((product, idx) => (
              <ScrollReveal
                key={product.id}
                direction="up"
                delay={(idx % 4) * 0.08}
              >
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
