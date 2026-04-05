"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function FAQ() {
  const { openCart, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const faqs = [
    {
      question: "Where are your cacao beans sourced from?",
      answer: "We source our single-origin cacao directly from small-batch farms in Venezuela, Madagascar, and Ecuador. Every bean is ethically harvested and fairly traded to ensure the highest quality and sustainability."
    },
    {
      question: "Are your chocolates vegan or gluten-free?",
      answer: "Many of our dark chocolate selections, such as the 85% Noir Ganache, are naturally vegan. We also clearly mark any products containing gluten, dairy, or nuts. However, our kitchen processes nuts and dairy, so trace amounts may be present."
    },
    {
      question: "How should I store my luxury chocolates?",
      answer: "For the ideal tasting experience, store your chocolates in a cool, dry place away from direct sunlight (ideally around 65°F or 18°C). Avoid refrigerating them, as extreme temperature changes can cause sugar bloom."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship globally using temperature-controlled packaging to ensure your chocolates arrive in pristine condition, regardless of the season."
    }
  ];

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
            <Link href="/faq" className="text-[#F5EFE6] border-b-2 border-[#B58266] pb-1 font-sans text-sm font-bold tracking-wide">FAQ</Link>
            <Link href="/contact" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={openCart} className="text-[#F5EFE6] hover:text-[#B58266] transition-colors duration-300 scale-95 hover:scale-100 ease-in-out relative">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#B58266] text-[#050505] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 pt-32 pb-48">
        <div className="text-center mb-24">
          <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-4">Inquiries</span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#F5EFE6]">Frequently Asked</h1>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1A0B08] pb-12">
              <h3 className="font-serif text-2xl text-[#B58266] mb-4">{faq.question}</h3>
              <p className="text-[#F5EFE6]/60 font-sans leading-relaxed text-lg max-w-3xl">
                {faq.answer}
              </p>
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
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/shop">Shop</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/our-story">Our Story</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/faq">FAQ</Link>
              <Link className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="/contact">Contact</Link>
              <a className="text-[#F5EFE6]/60 hover:text-[#B58266] font-sans text-sm transition-all duration-300" href="#">Terms of Service</a>
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
