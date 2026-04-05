"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { products, formatPrice } from "@/lib/products";

export default function Shop() {
  const { openCart, addItem, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#050505] min-h-screen">
      <nav className="bg-[#050505]/95 backdrop-blur-md flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto sticky top-0 z-50 transition-all duration-300 border-b border-[#F5EFE6]/10">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-serif text-2xl font-bold text-[#B58266] uppercase tracking-widest">
            Aura Luxury
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/shop" className="text-[#F5EFE6] border-b-2 border-[#B58266] pb-1 font-sans text-sm font-bold tracking-wide">Shop</Link>
            <Link href="/our-story" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Our Story</Link>
            <Link href="/faq" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">FAQ</Link>
            <Link href="/contact" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={openCart} className="text-[#F5EFE6] hover:text-[#B58266] transition-colors duration-300 scale-95 hover:scale-100 ease-in-out relative">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B58266] text-[#050505] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>
            )}
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#B58266]/30">
            <img alt="Customer Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGXJ-SZQD7I9Vod8zanKB6pOtxKeRz-Ty-ZSGtP_RNHHSTxoseF8Srsea6PwtN4k2kNxyNDruZuY0eY49U6Ndlfmt0W_BDTTkBlo89CBNw5Lo6BSOe1YeBLgsrBcpKC0p0gnv4P95pjVg4pRYLH4MGnOEjwMTpFMn_k0qC4PVbX4E98PPGuUSe3MfN8VJxW0eUMA69K23_80sN_xnDJ-ltxqG4OgP--ahPCKfvo1TURVGCsLT6p1uA8aIXwM2An64Br-3OjP-2qPq"/>
          </div>
        </div>
      </nav>

      <header className="max-w-screen-2xl mx-auto px-8 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h1 className="font-serif text-6xl md:text-8xl text-[#F5EFE6] leading-tight tracking-tighter">The Collection</h1>
            <p className="text-[#B58266] font-sans italic text-lg max-w-md">Curated sensory experiences, sculpted in pure cacao and rare botanicals.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2.5 rounded-full bg-[#B58266] text-[#050505] font-sans text-sm font-bold transition-all hover:scale-105 active:scale-95">All</button>
            <button className="px-6 py-2.5 rounded-full bg-[#1A0B08] text-[#F5EFE6] border border-[#3C2A21] font-sans text-sm font-medium transition-all hover:bg-[#3C2A21] hover:scale-105 active:scale-95">Cacao %</button>
            <button className="px-6 py-2.5 rounded-full bg-[#1A0B08] text-[#F5EFE6] border border-[#3C2A21] font-sans text-sm font-medium transition-all hover:bg-[#3C2A21] hover:scale-105 active:scale-95">Flavor Notes</button>
            <button className="px-6 py-2.5 rounded-full bg-[#1A0B08] text-[#F5EFE6] border border-[#3C2A21] font-sans text-sm font-medium transition-all hover:bg-[#3C2A21] hover:scale-105 active:scale-95">Dark</button>
            <button className="px-6 py-2.5 rounded-full bg-[#1A0B08] text-[#F5EFE6] border border-[#3C2A21] font-sans text-sm font-medium transition-all hover:bg-[#3C2A21] hover:scale-105 active:scale-95">Milk</button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[10px] gap-x-12">
          {products.map((product, idx) => (
            <div key={idx} className={`${product.span} group relative flex flex-col justify-end ${product.mt}`}>
              <div className="absolute inset-0 bg-[#0A0A0A] rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(181,130,102,0.1)] border border-[#1A0B08]">
                <img alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src={`https://lh3.googleusercontent.com/aida-public/${product.img}`}/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
              </div>
              <div className="relative p-8 text-[#F5EFE6] z-10 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-[#B58266] mb-1 block">{product.subtitle}</span>
                    <h3 className="font-serif text-3xl">{product.title}</h3>
                  </div>
                  <p className="font-serif text-xl border-b border-[#B58266]/30 pb-0.5">{formatPrice(product.priceInCents)}</p>
                </div>
                <p className="text-sm font-sans opacity-0 group-hover:opacity-80 transition-opacity duration-300 line-clamp-2 text-[#F5EFE6]/80 pt-2">{product.desc}</p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button
                    onClick={() => addItem({
                      id: product.id,
                      title: product.title,
                      price: product.priceInCents / 100,
                      img: product.img,
                    })}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B58266] text-[#050505] transition-all hover:scale-110 active:scale-90 shadow-[0_0_20px_rgba(181,130,102,0.4)]"
                  >
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-[#0A0A0A] text-[#F5EFE6] border-t border-[#1A0B08]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <p className="font-serif italic text-xl text-[#B58266]">Aura Luxury</p>
            <p className="text-sm opacity-50 font-sans leading-relaxed max-w-xs">Elevating the simple joy of chocolate into a multisensory editorial experience natively on the web.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Shop</h4>
            <div className="flex flex-col gap-2">
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Truffle Boxes</a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Bars</a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Limited Editions</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Company</h4>
            <div className="flex flex-col gap-2">
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Shipping</a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Privacy Policy</a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Returns</a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Terms of Service</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Connect</h4>
            <div className="flex gap-4">
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
            <div className="pt-4">
              <p className="text-xs opacity-40">© 2026 Aura Luxury Chocolates. Crafted with Cacao.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
