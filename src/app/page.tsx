"use client";

import { useCartStore } from "@/store/useCartStore";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const { openCart, addItem, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const p1X = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const p1Y = useTransform(scrollYProgress, [0, 0.6], [0, 400]);
  const p1R = useTransform(scrollYProgress, [0, 0.6], [15, -25]);

  const p2Y = useTransform(scrollYProgress, [0, 0.6], [0, -150]);
  const p2Scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.4]);

  const p3X = useTransform(scrollYProgress, [0, 0.6], [0, 400]);
  const p3Y = useTransform(scrollYProgress, [0, 0.6], [0, 500]);
  const p3R = useTransform(scrollYProgress, [0, 0.6], [15, 45]);

  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="bg-[#050505]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md flex justify-between items-center w-full px-8 py-6 max-w-full mx-auto border-b border-[#F5EFE6]/5">
        <div className="flex items-center gap-8">
          <a className="font-serif text-2xl tracking-tighter text-[#B58266]" href="/">
            Luxury Chocolates
          </a>
          <nav className="hidden md:flex gap-8">
            <a className="font-sans text-sm tracking-wide text-[#F5EFE6] font-bold transition-colors duration-300 hover:text-[#B58266]" href="/shop">Shop</a>
            <a className="font-sans text-sm tracking-wide text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300" href="/our-story">Our Story</a>
            <a className="font-sans text-sm tracking-wide text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300" href="/faq">FAQ</a>
            <a className="font-sans text-sm tracking-wide text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300" href="/contact">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={openCart} className="hover:text-[#B58266] transition-colors duration-300 active:scale-95 transition-transform relative group cursor-pointer">
            <span className="material-symbols-outlined text-[#F5EFE6]">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#B58266] text-[#050505] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{cartCount}</span>
          </button>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Shattering Diagonal Panels — GPU-composited via will-change */}
        <section ref={containerRef} className="h-[250vh] w-full relative">
          <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#050505]">
            
            <motion.div 
              className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A0B08] to-[#050505]"
            />

            <motion.div 
              className="relative z-20 flex flex-col items-start justify-center w-full md:w-1/2 px-8 pl-12 md:pl-24"
              style={{ y: textY, opacity: mainTextOpacity, willChange: "transform, opacity" }}
            >
              <h1 className="font-serif text-7xl md:text-[9rem] text-[#B58266] font-bold uppercase tracking-widest leading-none">
                INDULGE
              </h1>
              <p className="mt-8 text-xl font-serif tracking-widest text-[#F5EFE6]/60 uppercase border-b border-[#B58266]/30 pb-4">
                A Symphony of Rich Cocoa
              </p>
            </motion.div>

            <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] flex items-center justify-center pointer-events-none z-10 overflow-visible translate-x-12">
              <div className="relative w-96 h-[600px] flex gap-2">
                
                {/* Panel 1 */}
                <motion.div 
                  className="w-1/3 h-[90%] mt-8 relative overflow-hidden rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#3C2A21]"
                  style={{ x: p1X, y: p1Y, rotate: p1R, willChange: "transform" }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH"
                    className="absolute top-[-10%] left-[-50%] w-[300%] h-[120%] max-w-none object-cover"
                    alt="Texture 1"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* Panel 2 */}
                <motion.div 
                  className="w-1/3 h-full relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-t border-b border-[#3C2A21] z-20"
                  style={{ y: p2Y, scale: p2Scale, rotate: 15, willChange: "transform" }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH"
                    className="absolute top-[-15%] left-[-150%] w-[300%] h-[120%] max-w-none object-cover"
                    alt="Texture 2"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                </motion.div>

                {/* Panel 3 */}
                <motion.div 
                  className="w-1/3 h-[85%] mt-12 relative overflow-hidden rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#3C2A21]"
                  style={{ x: p3X, y: p3Y, rotate: p3R, willChange: "transform" }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH"
                    className="absolute top-[-20%] left-[-250%] w-[300%] h-[120%] max-w-none object-cover"
                    alt="Texture 3"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>

              </div>
            </div>
            
            <div className="absolute bottom-10 inset-x-0 w-full flex flex-col items-center animate-bounce opacity-80 pointer-events-none z-30">
              <span className="text-[#B58266] text-[10px] tracking-[0.3em] font-bold font-sans uppercase mb-2">Scroll To Break</span>
              <span className="material-symbols-outlined text-[#B58266] text-sm">arrow_downward</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-[#1A0B08] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-2">The Heritage</span>
            <h2 className="font-serif text-5xl text-[#F5EFE6] leading-tight">Sourced With Deep Intent</h2>
            <p className="text-[#F5EFE6]/60 font-sans text-lg leading-relaxed">
              Every bean traversing our pipeline comes from sustainable, multi-generational farms. We ensure an ethical, shade-grown environment that fosters both a rich, complex flavor profile and preserves the fragile equatorial bio-systems.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden border border-[#1A0B08]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH"
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              alt="Cacao Sourcing"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-[#1A0B08] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square w-full overflow-hidden border border-[#1A0B08]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7g0tVWRRlES2LRLT9KwdLfBbFnpip696HBooAGS12fFoACkxOirVFEew9m7szTt-0Tp5H-WWc_aj5brII8O8NqdvWTy0lAZXGz7ORsYs828bakXR3vcsjuMv4LlLKrSVGuT6YEiLAWIdHRHnTcdL0VIVZB3ViL5vA-DUAu8zg2oxO1t_mmMfG7A4L98w5iDGJkdX72QVWxUv9s1JwJh5Pzi7kXyrx737q1bIjwlcsZWXvw__pwxBinfhH5na0izbOXaokVPlVlC0"
              className="w-full h-full object-cover opacity-80 mix-blend-screen"
              alt="Chocolatier Mastery"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-2">The Mastery</span>
            <h2 className="font-serif text-5xl text-[#F5EFE6] leading-tight">Folded By Hand</h2>
            <p className="text-[#F5EFE6]/60 font-sans text-lg leading-relaxed">
              We rely on sensory intuition over automated machinery. In our atelier, master chocolatiers temper the chocolate in small batches, ensuring continuous crystallization that creates the signature snap and silken mouthfeel our collections are known for.
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-[#1A0B08] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-2">The Pairings</span>
            <h2 className="font-serif text-5xl text-[#F5EFE6] leading-tight">Elevated Tasting</h2>
            <p className="text-[#F5EFE6]/60 font-sans text-lg leading-relaxed">
              Our dark cacao profiles are engineered to stand up to robust companions. From a dry aged Cabernet to a fiercely strong ristretto, our collections possess the deep tannin structures necessary for perfect, complementary pairings without getting lost on the palate.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden border border-[#1A0B08]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfSWr007O3Bu26eutdswP10qShw7RhhO-31_4NrbP8MXx2k0UzaPAUe8kY2V-rQWrcpb4LnjhBxAbysNYu1h2Wyki8HdiLGbn3b8PAHtyDVMiFnwoZ4AjQ2zcqf--BNRvaCS62fy3luM73Ti_-NUJSzTvPSknfgqTnvs3BPBDhZTly2X5Qmy2FMseLr73-uQikLbdbu0B0NQE_TimzFUQ_uSF9HjsEbolbA59Rv5htgoJqTQ9zo8TD_xrs6cDh0Ihk9ItQg_TfYkrb"
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              alt="Chocolate Pairings"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-[#1A0B08] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square w-full overflow-hidden border border-[#1A0B08]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRBXrwQqyrpAArxU1tY8WsHoi0pySdPWVqbQFk6x_aqaoxGkAGJW8zfX1yc9OucvVIJTG9pa5YFaia5pg8ENOlrsIBmfQgph51RXdwyLzB80OVv9nxuzF0PWkcc5ToAt-3tZzi78itPRrIlCQ4U6q3OKUZ8xQ0B7BNEUA6sKRkMjh-s3zkJkeoJiMlvcTQbaZLMeHFgVoxeVWw15OGVw4azuVvHYTALTZbzCq0gsoYU61uS9pG408nEo_bhqS1R3CBp9FHpawvSW4"
              className="w-full h-full object-cover opacity-80 mix-blend-screen bg-black"
              alt="Bespoke Gifting"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-2">Client Privileges</span>
            <h2 className="font-serif text-5xl text-[#F5EFE6] leading-tight">Bespoke Curation</h2>
            <p className="text-[#F5EFE6]/60 font-sans text-lg leading-relaxed">
              We offer exclusive client services for bespoke corporate gifting, wedding centerpieces, and personalized tasting flights. Every box is hand-packed, ribbon-tied, and wax-sealed to ensure the unboxing experience matches the profound luxury inside.
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto border-t border-[#1A0B08]">
          <div className="mb-20 flex justify-between items-end">
            <div className="max-w-2xl">
              <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
              <h2 className="font-serif text-5xl text-[#F5EFE6]">The Truffle Collection</h2>
            </div>
            <a className="text-[#F5EFE6] font-sans text-sm uppercase tracking-widest border-b border-[#F5EFE6]/20 pb-1 hover:border-[#B58266] transition-all" href="/shop">View All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Velvet Espresso", desc: "72% Venezuelan Cacao & Arabica", price: "$4.50", img: "AB6AXuDfSWr007O3Bu26eutdswP10qShw7RhhO-31_4NrbP8MXx2k0UzaPAUe8kY2V-rQWrcpb4LnjhBxAbysNYu1h2Wyki8HdiLGbn3b8PAHtyDVMiFnwoZ4AjQ2zcqf--BNRvaCS62fy3luM73Ti_-NUJSzTvPSknfgqTnvs3BPBDhZTly2X5Qmy2FMseLr73-uQikLbdbu0B0NQE_TimzFUQ_uSF9HjsEbolbA59Rv5htgoJqTQ9zo8TD_xrs6cDh0Ihk9ItQg_TfYkrb" },
              { title: "Rose Pistachio", desc: "White Ganache & Persian Petals", price: "$5.00", img: "AB6AXuAXRBXrwQqyrpAArxU1tY8WsHoi0pySdPWVqbQFk6x_aqaoxGkAGJW8zfX1yc9OucvVIJTG9pa5YFaia5pg8ENOlrsIBmfQgph51RXdwyLzB80OVv9nxuzF0PWkcc5ToAt-3tZzi78itPRrIlCQ4U6q3OKUZ8xQ0B7BNEUA6sKRkMjh-s3zkJkeoJiMlvcTQbaZLMeHFgVoxeVWw15OGVw4azuVvHYTALTZbzCq0gsoYU61uS9pG408nEo_bhqS1R3CBp9FHpawvSW4", mt: "mt-12 md:mt-24" },
              { title: "Smoked Sea Salt", desc: "Slow-Cooked Caramel & Maldón", price: "$4.50", img: "AB6AXuBCc77i4iGWbxOUp3fCjE4xZJdN2h4dIfr9G5baw3P7cgZaIyEz7xEEtDyO7IzppnwJ-_p7n7-nSdpjK0btcmnjqtiketQwiF5nSRSMdQcXxZv0nHsd8uVyzKlIWNFRE99fRCzJXnQF-8mu2tCqKQxsPltgB01qIP0RIMUG8gNFFV-XyQ5M4nS6LwQHVdeqKLzxZQL1e_nuUqZojeMYt4Gh372UZoIpmOFIFJd7iGY8YCO-nx6n_5yewmzT8bNJ0S4s7W0lVkI3QoSZ" }
            ].map((truffle, i) => (
              <div key={i} className={`group relative flex flex-col space-y-6 ${truffle.mt || ''}`}>
                <div className="aspect-[4/5] overflow-hidden bg-[#1A0B08] relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    alt={truffle.title}
                    src={`https://lh3.googleusercontent.com/aida-public/${truffle.img}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    onClick={() => addItem({ id: truffle.title, title: truffle.title, price: parseFloat(truffle.price.replace('$', '')), img: truffle.img })}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-[#050505]/70 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#B58266] hover:text-[#050505] text-[#F5EFE6]"
                  >
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F5EFE6]">{truffle.title}</h3>
                    <p className="text-[#F5EFE6]/60 text-sm mt-1">{truffle.desc}</p>
                  </div>
                  <span className="font-sans font-semibold text-[#B58266]">{truffle.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0A0A0A] py-32 overflow-hidden border-t border-b border-[#1A0B08]">
          <div className="px-8 max-w-7xl mx-auto mb-16">
            <h2 className="font-serif text-5xl text-[#F5EFE6]">Discover Your Flavor</h2>
          </div>
          <div className="flex overflow-x-auto pb-12 px-8 gap-8 no-scrollbar scroll-smooth snap-x">
            {[
              { type: "Intensity", name: "70% Dark Origin", img: "AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH" },
              { type: "Classic", name: "Hazelnut Praline", img: "AB6AXuDMSn2nioNKbArDreJ9qsiLX8akYq5afrR4-K3KfUS92MygzNbwENyTy0OYLaHmcBWIjoyKInsGjtEfzVxgzVAQInZXXSgjT_muogp012DmwxmknwLxGIiXXeuQNxg0VtVQWRHlYFncaMxHQ504qRP724UD_sDJtEWkFSUpJ8k9nFHLxPKYIO22393o_nWI0Mxn0dVr7vNpLfwFyKSMMFpXU-q6rWs_wfF5gkEiylWw1FaA-vzvjWNhq54cOArG2bQh3r6Z2JXKtOSc" },
              { type: "Sophisticated", name: "Sea Salt Caramel", img: "AB6AXuANmg8jAoUkuNnZj__lbwuaRO3oXsO8vnvQLOKdICD63xEsnYuWu-lUoTkt7UXmjC60F-objZC7IAFbsBHTOWOPV5Yo5huV75CZ-NuVOaI-0bVdpGn8qV9Gbmkq5VHCvl_eGHLIYQ2Lp4cPf6Fr222XMEH2176hMk0k5tnjCKgUDWQ_T48NPEhvd0zisiQdAC3nLK1lXXv5ZCXnbxk1idwwv1Fh05RnJEciKjaeJrXaB9VnCdw1y_nigLr9Q4kdnxUqXg0k_J2bH_Y1" }
            ].map((flavor, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[450px] snap-center">
                <div className="relative aspect-video group overflow-hidden bg-[#1A0B08]">
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt={flavor.name}
                    src={`https://lh3.googleusercontent.com/aida-public/${flavor.img}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#050505] to-transparent">
                    <span className="text-[#B58266] font-sans text-xs uppercase tracking-widest mb-2">{flavor.type}</span>
                    <h4 className="text-[#F5EFE6] font-serif text-3xl">{flavor.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-8 flex flex-col items-center text-center space-y-8 bg-[#050505]">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-serif text-4xl text-[#F5EFE6]">The Chocolatier's Journal</h2>
            <p className="text-[#F5EFE6]/60 font-light">Join our inner circle for exclusive seasonal releases and artisanal stories.</p>
          </div>
          <div className="w-full max-w-md flex flex-col md:flex-row gap-4">
            <input className="flex-grow bg-[#1A0B08] border border-[#3C2A21] px-6 py-4 text-xs tracking-widest text-[#F5EFE6] focus:outline-none focus:ring-1 focus:ring-[#B58266] placeholder:text-[#F5EFE6]/30" placeholder="YOUR EMAIL ADDRESS" type="email" />
            <button className="bg-[#B58266] text-[#050505] px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#F5EFE6] transition-colors">Subscribe</button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A0A0A] grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 w-full border-t border-[#1A0B08]">
        <div className="space-y-6">
          <span className="font-serif text-lg text-[#F5EFE6]">Aura Luxury Chocolates</span>
          <p className="font-sans text-xs uppercase tracking-widest text-[#F5EFE6]/40">© 2026 Aura Luxury Chocolates. Hand-dipped excellence.</p>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-end items-start mt-1">
          <div className="flex flex-col gap-4">
            <a className="font-sans text-xs uppercase tracking-widest text-[#F5EFE6]/60 hover:text-[#B58266] transition-all" href="#">Shipping</a>
            <a className="font-sans text-xs uppercase tracking-widest text-[#F5EFE6]/60 hover:text-[#B58266] transition-all" href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-sans text-xs uppercase tracking-widest text-[#F5EFE6]/60 hover:text-[#B58266] transition-all" href="#">Terms of Service</a>
            <a className="font-sans text-xs uppercase tracking-widest text-[#B58266] hover:text-[#F5EFE6] transition-all" href="#">Newsletter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
