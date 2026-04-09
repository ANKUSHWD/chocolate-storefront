"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed. Please try again.");
      }

      // Redirect to Stripe's hosted checkout page
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1d1b16]/40 backdrop-blur-md transition-opacity"
        onClick={closeCart}
      />

      {/* The Drawer */}
      <div className="relative w-full md:w-[35%] h-full bg-[#f5efe6] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">

        {/* Header */}
        <div className="flex justify-between items-center px-8 h-24 shrink-0 bg-[#f5efe6]">
          <h2 className="font-serif text-3xl font-bold text-[#25160e] italic">Your Collection</h2>
          <button onClick={closeCart} className="group p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#25160e] group-hover:rotate-90 transition-transform duration-300">close</span>
          </button>
        </div>

        {/* Scrollable Cart Items Area */}
        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-12">

          {items.length === 0 ? (
            <p className="text-[#25160e]/50 font-sans italic my-12 text-center">Your collection is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-6 group">
                <div className="w-32 h-32 shrink-0 bg-[#f3ede4] overflow-hidden rounded-lg">
                  <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={`https://lh3.googleusercontent.com/aida-public/${item.img}`} loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#25160e] mb-1">{item.title}</h3>
                    <p className="text-[#87503c] font-semibold font-sans">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-[#f9f3ea] rounded-full px-3 py-1 gap-4">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-[#25160e] hover:text-[#87503c]"><span className="material-symbols-outlined text-sm">remove</span></button>
                      <span className="font-sans text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-[#25160e] hover:text-[#87503c]"><span className="material-symbols-outlined text-sm">add</span></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[#87503c] font-sans text-xs uppercase tracking-widest font-bold hover:underline underline-offset-4">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Added Value Section */}
          <div className="bg-[#f9f3ea] p-6 rounded-xl border-l-4 border-[#87503c]/20">
            <p className="font-serif italic text-[#25160e] leading-relaxed">&quot;Chocolate is a sensory ritual. Our ganache is infused for 24 hours to ensure the aromatic notes of the ritual are preserved.&quot;</p>
            <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.2em] text-[#87503c] font-black">— The Chocolatier</p>
          </div>

        </div>

        {/* Footer Section */}
        <div className="p-8 bg-[#ffffff] border-t border-[#25160e]/5">
          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-[#4f4540] font-sans text-sm uppercase tracking-wider">Subtotal</span>
              <span className="text-[#25160e] font-serif text-xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#4f4540] font-sans text-sm uppercase tracking-wider">Shipping</span>
              <span className="text-[#4f4540] font-sans text-xs italic">Calculated at next step</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <p className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 font-sans">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={isLoading || items.length === 0}
            className="w-full h-16 bg-gradient-to-r from-[#3c2a21] to-[#25160e] text-white font-sans font-bold tracking-widest uppercase rounded-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? (
              <>
                <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                Processing...
              </>
            ) : (
              <>
                Proceed to Checkout
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            )}
          </button>

          {/* Trust indicators */}
          <div className="mt-5 flex items-center justify-center gap-4 text-[#25160e]/40">
            <span className="material-symbols-outlined text-base">lock</span>
            <p className="font-sans italic text-xs">Secure checkout powered by Stripe</p>
          </div>
          <p className="mt-2 text-center text-[#25160e]/50 font-sans italic text-xs">
            Complimentary tasting notes included with every order.
          </p>
        </div>

      </div>
    </div>
  );
}
