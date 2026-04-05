"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { openCart, addItem, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // In a real app we'd load the product via ID.
  return (
    <div className="bg-[#050505] min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md flex justify-between items-center px-8 py-6 border-b border-[#F5EFE6]/10">
        <Link href="/" className="text-2xl font-serif tracking-tighter text-[#B58266] uppercase">
          Aura Luxury
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/shop" className="text-[#F5EFE6] hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium">Shop</Link>
          <Link href="/our-story" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium">Our Story</Link>
          <Link href="/faq" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium">FAQ</Link>
          <Link href="/contact" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium">Contact</Link>
        </div>
        <div className="flex items-center space-x-6">
          <button onClick={openCart} className="text-[#F5EFE6] hover:text-[#B58266] transition-colors duration-300 active:scale-95 transition-transform flex items-center justify-center relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#B58266] text-[#050505] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 min-h-screen">
        <section className="flex flex-col md:flex-row min-h-[921px]">
          <div className="w-full md:w-[60%] h-[614px] md:h-auto sticky top-24 overflow-hidden bg-[#1A0B08] p-4 lg:p-12">
             <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(181,130,102,0.1)] border border-[#3C2A21]">
                <img 
                  alt="Noir Ganache" 
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.1] opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7g0tVWRRlES2LRLT9KwdLfBbFnpip696HBooAGS12fFoACkxOirVFEew9m7szTt-0Tp5H-WWc_aj5brII8O8NqdvWTy0lAZXGz7ORsYs828bakXR3vcsjuMv4LlLKrSVGuT6YEiLAWIdHRHnTcdL0VIVZB3ViL5vA-DUAu8zg2oxO1t_mmMfG7A4L98w5iDGJkdX72QVWxUv9s1JwJh5Pzi7kXyrx737q1bIjwlcsZWXvw__pwxBinfhH5na0izbOXaokVPlVlC0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent"></div>
             </div>
          </div>

          <div className="w-full md:w-[40%] px-8 md:px-16 py-12 md:py-20 flex flex-col justify-center bg-[#050505]">
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-[#F5EFE6]/50 font-sans tracking-wide uppercase text-[10px] font-bold">
                <li><Link href="/" className="hover:text-[#B58266] transition-colors">Home</Link></li>
                <li><span className="mx-2 text-[#F5EFE6]/20">/</span></li>
                <li><Link href="/shop" className="hover:text-[#B58266] transition-colors">Shop</Link></li>
                <li><span className="mx-2 text-[#F5EFE6]/20">/</span></li>
                <li className="text-[#B58266] font-bold">Signature Series</li>
              </ol>
            </nav>
            <h1 className="font-serif text-6xl md:text-8xl text-[#F5EFE6] leading-none tracking-tighter mb-4">
              Noir <br/> Ganache
            </h1>
            <p className="text-3xl font-serif italic text-[#B58266] mb-10">$4.50</p>
            
            <div className="space-y-8 mb-12">
              <p className="text-[#F5EFE6]/80 font-sans leading-relaxed text-lg max-w-md">
                Experience the profound depth of 85% Madagascar cacao. This is not merely a chocolate; it is a velvet suspension of flavor, emphasizing a mouthfeel that transitions from a crisp snap to an impossibly smooth, melty richness.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1A0B08] border border-[#3C2A21] text-[#F5EFE6] text-xs font-medium rounded-md tracking-wider flex items-center shadow-sm">
                  <span className="material-symbols-outlined text-sm mr-2 text-[#B58266]">water_drop</span>
                  Smoked Sea Salt
                </span>
                <span className="px-4 py-2 bg-[#1A0B08] border border-[#3C2A21] text-[#F5EFE6] text-xs font-medium rounded-md tracking-wider flex items-center shadow-sm">
                  <span className="material-symbols-outlined text-sm mr-2 text-[#B58266]">forest</span>
                  Earthy
                </span>
                <span className="px-4 py-2 bg-[#1A0B08] border border-[#3C2A21] text-[#F5EFE6] text-xs font-medium rounded-md tracking-wider flex items-center shadow-sm">
                  <span className="material-symbols-outlined text-sm mr-2 text-[#B58266]">bolt</span>
                  Intense
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center bg-[#1A0B08] border border-[#3C2A21] rounded-full px-6 py-3">
                <button className="text-[#F5EFE6] hover:text-[#B58266] transition-colors"><span className="material-symbols-outlined">remove</span></button>
                <span className="mx-6 font-bold text-[#F5EFE6]">1</span>
                <button className="text-[#F5EFE6] hover:text-[#B58266] transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <button onClick={() => addItem({ id: 'Noir Ganache', title: 'Noir Ganache', price: 4.50, img: 'AB6AXuDA7g0tVWRRlES2LRLT9KwdLfBbFnpip696HBooAGS12fFoACkxOirVFEew9m7szTt-0Tp5H-WWc_aj5brII8O8NqdvWTy0lAZXGz7ORsYs828bakXR3vcsjuMv4LlLKrSVGuT6YEiLAWIdHRHnTcdL0VIVZB3ViL5vA-DUAu8zg2oxO1t_mmMfG7A4L98w5iDGJkdX72QVWxUv9s1JwJh5Pzi7kXyrx737q1bIjwlcsZWXvw__pwxBinfhH5na0izbOXaokVPlVlC0' })} className="flex-1 bg-gradient-to-r from-[#B58266] to-[#89523E] text-[#050505] rounded-full py-4 px-8 font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(181,130,102,0.3)]">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        <section className="md:px-24 py-32 bg-[#0A0A0A] border-t border-[#1A0B08]">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="font-serif text-4xl text-[#F5EFE6] mb-12">Nutritional Elegance</h2>
                <div className="space-y-8 border-t border-[#3C2A21] pt-8">
                  <div className="flex justify-between items-end pb-4 border-b border-[#3C2A21]">
                    <span className="font-sans text-sm uppercase tracking-widest text-[#B58266] font-semibold">Principal Ingredients</span>
                    <span className="font-sans text-[#F5EFE6] text-right max-w-[200px]">85% Dark Cacao, Organic Cane Sugar, Madagascar Vanilla, Fleur de Sel.</span>
                  </div>
                  <div className="flex justify-between items-end pb-4 border-b border-[#3C2A21]">
                    <span className="font-sans text-sm uppercase tracking-widest text-[#B58266] font-semibold">Dietary Profile</span>
                    <span className="font-sans text-[#F5EFE6]">Vegan, Soy-Free, Non-GMO</span>
                  </div>
                  <div className="flex justify-between items-end pb-4">
                    <span className="font-sans text-sm uppercase tracking-widest text-[#B58266] font-semibold">Shelf Life</span>
                    <span className="font-sans text-[#F5EFE6]">4 Months from tempering</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A0B08] p-12 rounded-xl shadow-lg border border-[#3C2A21]">
                <span className="material-symbols-outlined text-[#B58266] text-4xl mb-6">wine_bar</span>
                <h3 className="font-serif text-2xl text-[#F5EFE6] mb-4">Curated Pairings</h3>
                <p className="text-[#F5EFE6]/70 font-sans leading-relaxed italic mb-8">
                  "The high tannin content and complex berry notes of the Madagascar bean find their perfect mirror in a robust Cabernet Sauvignon or an aged single-malt Scotch."
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0A0A0A] ring-2 ring-[#B58266]/30">
                    <img alt="Pairing" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmkxnB4wnm-jrteBavGi3m5u-hiSAvz37np-yb9IoLK9sI4REYtJ-gqNe3zNlVuiwBBscagFWDVcinq-9kOcG_lO6kIrnowdl_PH-FG9xloenPI4Au69Rv1zvmX-dZ5xVJ2aftvTiTSfABf3kuITWeknXBrF96vj2ZU3yfmiUJde0a-VmCHNt1V3GG-p9PRnwXWKMbdNUQlH1MZ22lN3L1OLq4m-lR3K1MYb1o40YgY3XqWk9sW86rRz8GdKR2d5uIReTmJzaJbjdw"/>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0A0A0A] ring-2 ring-[#B58266]/30">
                    <img alt="Pairing" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV-KyGOSb7IqdEtdjRiqmpkY-GyQdoA4LvxLoAfpkovfmTKWGoiq4AA5_GrxX-pC5G0Y1NSBx7NbmnpmU7yiNfI6sqc_y4J6A_w78uQarD75ZLErdsVc3MLrhpcKoyvNhdQu8WLlq7_HsRaCafI0FtnG3aJm3pHohZsmyltYAXY25hdJajOgeUda2dVDwrr6qzpMLzN5UiWCoo4aTZwtr9zOzfBXk3AYh_QoP-bt9Y_sDr7RlARqJXEAGD0DiL9ddIVFVVG3tY9yp"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#050505] border-t border-[#1A0B08] flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full">
        <div className="text-xl font-serif text-[#B58266] mb-8 md:mb-0">
          Aura Luxury
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <Link href="#" className="text-[#F5EFE6]/60 font-sans hover:text-[#B58266] transition-colors text-sm">Sustainability</Link>
          <Link href="#" className="text-[#F5EFE6]/60 font-sans hover:text-[#B58266] transition-colors text-sm">Shipping</Link>
          <Link href="#" className="text-[#F5EFE6]/60 font-sans hover:text-[#B58266] transition-colors text-sm">Wholesale</Link>
          <Link href="#" className="text-[#F5EFE6]/60 font-sans hover:text-[#B58266] transition-colors text-sm">Privacy</Link>
        </div>
        <div className="text-[#F5EFE6]/40 font-sans text-xs uppercase tracking-widest">
          © 2026 Aura Luxury Chocolates
        </div>
      </footer>
    </div>
  );
}
