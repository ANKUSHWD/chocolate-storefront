"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Contact() {
  const { openCart, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#050505] min-h-screen">
      <nav className="bg-[#050505]/95 backdrop-blur-md flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto sticky top-0 z-50 transition-all duration-300 border-b border-[#F5EFE6]/10">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-serif text-2xl font-bold text-[#B58266] uppercase tracking-widest">
            Aura Luxury
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/shop" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Shop</Link>
            <Link href="/our-story" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Our Story</Link>
            <Link href="/faq" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">FAQ</Link>
            <Link href="/contact" className="text-[#F5EFE6] border-b-2 border-[#B58266] pb-1 font-sans text-sm font-bold tracking-wide">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={openCart} className="text-[#F5EFE6] hover:text-[#B58266] transition-colors duration-300 scale-95 hover:scale-100 ease-in-out relative">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#B58266] text-[#050505] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12 pr-12">
            <div>
              <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-4">Get in Touch</span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#F5EFE6] mb-8">Reach Out</h1>
              <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
                Whether you wish to inquire about bespoke truffle reservations, limited-time seasonal runs, or simply discuss the finer notes of our dark cacao roasts, our master chocolatiers and client concierges are always available.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-[#1A0B08]">
              <div>
                <h3 className="font-sans font-bold tracking-widest uppercase text-xs text-[#B58266] mb-2">Direct Mail</h3>
                <a href="mailto:kuno.clannation@gmail.com" className="font-serif text-2xl text-[#F5EFE6] hover:text-[#B58266] transition-colors">
                  kuno.clannation@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-sans font-bold tracking-widest uppercase text-xs text-[#B58266] mb-2">Concierge Phone</h3>
                <a href="tel:+918076812631" className="font-serif text-2xl text-[#F5EFE6] hover:text-[#B58266] transition-colors">
                  +91 8076812631
                </a>
              </div>
            </div>

            <div className="pt-8">
              <span className="text-[#F5EFE6]/40 text-sm font-sans block mb-2">Atelier Hours</span>
              <p className="text-[#F5EFE6]/70 font-sans">Monday - Friday: 9am - 6pm GMT<br/>Saturday: 10am - 4pm GMT</p>
            </div>
          </div>

          <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A0B08] group relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCc77i4iGWbxOUp3fCjE4xZJdN2h4dIfr9G5baw3P7cgZaIyEz7xEEtDyO7IzppnwJ-_p7n7-nSdpjK0btcmnjqtiketQwiF5nSRSMdQcXxZv0nHsd8uVyzKlIWNFRE99fRCzJXnQF-8mu2tCqKQxsPltgB01qIP0RIMUG8gNFFV-XyQ5M4nS6LwQHVdeqKLzxZQL1e_nuUqZojeMYt4Gh372UZoIpmOFIFJd7iGY8YCO-nx6n_5yewmzT8bNJ0S4s7W0lVkI3QoSZ" className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 group-hover:scale-100" alt="Aura Luxury Contact" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>

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
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/shop">Shop</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/our-story">Our Story</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/faq">FAQ</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/contact">Contact</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg">Connect</h4>
            <div className="flex gap-4">
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
