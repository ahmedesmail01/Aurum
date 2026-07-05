"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import TiltWrapper from "./TiltWrapper";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`} className="block">
        <TiltWrapper className="glass-card overflow-hidden rounded border border-gold/10 aspect-4/5 relative">
          
          {/* Status Badges */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-gold text-black font-semibold text-[8px] tracking-widest uppercase px-2 py-0.5 rounded shadow">
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-charcoal border border-gold/30 text-gold font-semibold text-[8px] tracking-widest uppercase px-2 py-0.5 rounded shadow">
                Vault Select
              </span>
            )}
          </div>

          {/* Product Images (Swap on hover) */}
          <div className="relative w-full h-full overflow-hidden bg-black/40">
            {/* Primary Image */}
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 ease-out ${
                isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            {/* Hover Swap Image */}
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={`${product.name} alternate view`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover absolute inset-0 transition-transform duration-700 ease-out ${
                  isHovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              />
            )}
          </div>

          {/* Quick Add Overlay Button */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex justify-center">
            <button
              onClick={handleQuickAdd}
              className="flex items-center gap-2 border border-gold/50 bg-gold/15 hover:bg-gold hover:text-black text-gold text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-all duration-300 rounded shadow-md"
            >
              <ShoppingBag className="h-3 w-3" />
              Quick Add
            </button>
          </div>
        </TiltWrapper>

        {/* Product Meta */}
        <div className="mt-4 space-y-1.5 px-1">
          <p className="text-[9px] uppercase tracking-widest text-gold-accent font-semibold">
            {product.category}
          </p>
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-sm text-ivory group-hover:text-gold transition-colors duration-300 tracking-wide pr-2">
              {product.name}
            </h3>
            <span className="text-xs font-semibold text-gold">
              ${product.price.toLocaleString()}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-2.5 w-2.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-gold text-gold"
                      : "text-warm-gray"
                  }`}
                />
              ))}
            </div>
            <span className="text-[9px] text-warm-gray">({product.reviews})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
