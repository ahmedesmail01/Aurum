"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    isOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"idle" | "checking-out" | "success">("idle");

  const handleCheckout = () => {
    setCheckoutStep("checking-out");
    setTimeout(() => {
      setCheckoutStep("success");
      clearCart();
    }, 2000);
  };

  const handleClose = () => {
    if (checkoutStep === "success") {
      setCheckoutStep("idle");
    }
    setCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex h-full w-full max-w-md flex-col bg-charcoal border-l border-gold/15 shadow-2xl text-ivory"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/10 px-6 py-5">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-gold" />
                <span className="font-serif text-lg tracking-wider font-semibold uppercase">
                  Your Selection ({cartCount})
                </span>
              </div>
              <button
                onClick={handleClose}
                className="group rounded-full p-1 text-warm-gray hover:text-gold transition-colors duration-200"
              >
                <X className="h-6 w-6 transform group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Cart body */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {checkoutStep === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center gap-4"
                >
                  <div className="rounded-full bg-gold/10 p-4 border border-gold/30">
                    <CheckCircle className="h-12 w-12 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-wide text-gold">Order Placed</h3>
                  <p className="text-sm text-warm-gray max-w-xs leading-relaxed">
                    Thank you for choosing Aurum. Your bespoke jewelry request has been registered.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 border border-gold/50 bg-gold/10 px-8 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded"
                  >
                    Continue Browsing
                  </button>
                </motion.div>
              ) : checkoutStep === "checking-out" ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-2 border-gold/20"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-gold border-t-transparent animate-spin"></div>
                  </div>
                  <p className="font-serif text-lg text-gold tracking-wide">Processing Secure Request...</p>
                  <p className="text-xs text-warm-gray">Verifying vault reservation</p>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <p className="font-serif text-lg text-warm-gray italic">The velvet tray is empty.</p>
                  <p className="text-xs text-warm-gray max-w-[200px]">
                    Browse our curated collections and add your first heirloom.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 border border-gold/30 bg-transparent px-6 py-2 text-xs font-semibold uppercase tracking-widest text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300"
                  >
                    View Collections
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize || ""}`}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex gap-4 border-b border-gold/5 pb-5"
                    >
                      <div className="relative h-20 w-20 overflow-hidden border border-gold/10 bg-black">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <Link
                              href={`/product/${item.product.id}`}
                              onClick={handleClose}
                              className="font-serif text-sm font-medium tracking-wide text-ivory hover:text-gold transition-colors duration-200"
                            >
                              {item.product.name}
                            </Link>
                            <span className="text-sm font-semibold text-gold">
                              ${item.product.price.toLocaleString()}
                            </span>
                          </div>
                          {item.selectedSize && (
                            <p className="text-[11px] text-warm-gray uppercase tracking-widest mt-1">
                              Size: {item.selectedSize}
                            </p>
                          )}
                          <p className="text-[11px] text-warm-gray capitalize mt-0.5">
                            {item.product.category}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gold/15 bg-black/40 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-warm-gray hover:text-gold transition-colors duration-150"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-warm-gray hover:text-gold transition-colors duration-150"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-warm-gray hover:text-red-400 p-1 transition-colors duration-150"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer summary */}
            {cartItems.length > 0 && checkoutStep === "idle" && (
              <div className="border-t border-gold/10 bg-black/30 px-6 py-6 space-y-4">
                <div className="flex items-center justify-between text-sm tracking-wide">
                  <span className="text-warm-gray uppercase text-xs font-medium">Subtotal</span>
                  <span className="font-serif text-lg font-semibold text-gold">
                    ${cartTotal.toLocaleString()}
                  </span>
                </div>
                <div className="text-[11px] text-warm-gray italic">
                  Shipping, vault insurance, and taxes are calculated at reservation.
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gold py-3 text-xs font-bold uppercase tracking-widest text-black hover:bg-gold-hover active:scale-[0.98] transition-all duration-300 rounded shadow-lg shadow-gold/10"
                >
                  Reserve Vault Reservation
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
