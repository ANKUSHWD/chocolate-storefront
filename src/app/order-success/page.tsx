"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const clearCart = useCartStore((state) => state.clearCart);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!cleared) {
      clearCart();
      setCleared(true);
    }
  }, [clearCart, cleared]);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#050505]/95 backdrop-blur-md flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto border-b border-[#F5EFE6]/10">
        <Link href="/" className="font-serif text-2xl font-bold text-[#B58266] uppercase tracking-widest">
          Aura Luxury
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/shop" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Shop</Link>
          <Link href="/our-story" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Our Story</Link>
          <Link href="/contact" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-24">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Animated checkmark */}
          <div className="flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#1A0B08] border border-[#B58266]/30 flex items-center justify-center shadow-[0_0_60px_rgba(181,130,102,0.15)]">
              <span className="material-symbols-outlined text-[#B58266]" style={{ fontSize: "3rem" }}>
                check_circle
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block">Order Confirmed</span>
            <h1 className="font-serif text-6xl md:text-7xl text-[#F5EFE6] leading-tight">
              Thank You
            </h1>
            <p className="text-[#F5EFE6]/60 font-sans text-lg leading-relaxed max-w-lg mx-auto">
              Your luxurious selection is being carefully hand-packed and will be dispatched with the utmost care.
            </p>
          </div>

          {/* Order ID */}
          {sessionId && (
            <div className="bg-[#1A0B08] border border-[#3C2A21] rounded-xl p-6 text-left space-y-3">
              <div className="flex justify-between items-center border-b border-[#3C2A21] pb-3">
                <span className="text-[#B58266] font-sans text-xs uppercase tracking-widest font-semibold">Order Reference</span>
              </div>
              <p className="font-mono text-[#F5EFE6]/80 text-sm break-all">{sessionId}</p>
              <p className="text-[#F5EFE6]/40 font-sans text-xs">Save this reference for your records. A confirmation will be sent via Stripe.</p>
            </div>
          )}

          {/* Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-[#1A0B08] rounded-xl p-6 text-left space-y-3">
              <span className="material-symbols-outlined text-[#B58266]">inventory_2</span>
              <h3 className="font-serif text-lg text-[#F5EFE6]">Hand-Packed</h3>
              <p className="text-[#F5EFE6]/50 font-sans text-sm leading-relaxed">Every order is individually inspected and ribbon-sealed in our atelier.</p>
            </div>
            <div className="bg-[#0A0A0A] border border-[#1A0B08] rounded-xl p-6 text-left space-y-3">
              <span className="material-symbols-outlined text-[#B58266]">local_shipping</span>
              <h3 className="font-serif text-lg text-[#F5EFE6]">Temperature Safe</h3>
              <p className="text-[#F5EFE6]/50 font-sans text-sm leading-relaxed">Shipped in insulated packaging to preserve texture and temper.</p>
            </div>
            <div className="bg-[#0A0A0A] border border-[#1A0B08] rounded-xl p-6 text-left space-y-3">
              <span className="material-symbols-outlined text-[#B58266]">article</span>
              <h3 className="font-serif text-lg text-[#F5EFE6]">Tasting Notes</h3>
              <p className="text-[#F5EFE6]/50 font-sans text-sm leading-relaxed">Complimentary tasting card enclosed with pairing suggestions.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/shop"
              className="px-10 py-4 bg-gradient-to-r from-[#B58266] to-[#89523E] text-[#050505] rounded-full font-bold font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(181,130,102,0.3)]"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="px-10 py-4 bg-transparent border border-[#3C2A21] text-[#F5EFE6]/70 rounded-full font-sans text-sm tracking-widest uppercase hover:border-[#B58266] hover:text-[#B58266] transition-all"
            >
              Return Home
            </Link>
          </div>

          {/* Quote */}
          <div className="border-t border-[#1A0B08] pt-10">
            <p className="font-serif italic text-[#F5EFE6]/40 text-lg">
              &quot;The finest chocolate is not eaten. It is experienced.&quot;
            </p>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#B58266]/60">— Aura Luxury Atelier</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#050505] min-h-screen flex items-center justify-center">
        <span className="material-symbols-outlined text-[#B58266] animate-spin" style={{ fontSize: "3rem" }}>progress_activity</span>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
