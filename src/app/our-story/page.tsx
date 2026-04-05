"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function OurStory() {
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
            <Link href="/our-story" className="text-[#F5EFE6] border-b-2 border-[#B58266] pb-1 font-sans text-sm font-bold tracking-wide">Our Story</Link>
            <Link href="/faq" className="text-[#F5EFE6]/70 hover:text-[#B58266] transition-colors duration-300 font-sans text-sm font-medium tracking-wide">FAQ</Link>
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

      <main className="max-w-screen-2xl mx-auto px-8 pt-24 pb-48">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="text-[#B58266] font-sans text-xs uppercase tracking-[0.3em] block mb-4">Origins</span>
          <h1 className="font-serif text-6xl md:text-8xl text-[#F5EFE6]">Crafting With Intention</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto mb-32">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl text-[#B58266]">The Bean</h2>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              Our journey begins in the lush rainforests of Venezuela and Madagascar. We don't just purchase cacao; we cultivate relationships with generational single-estate farmers, ensuring that every harvested pod meets exact fermentation standards.
            </p>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              By controlling the entire process from crop to crystal, we achieve a purity of flavor that mass-produced chocolates inherently lack.
            </p>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A0B08]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReScb8LYbGY72csnnJGDrrGH4246Kc7qyc5JnjwSuvHXDOk1QpSR2K175eL3qNKr3dOYcDcNv4hrDRjnn42_L06_HMTlfCNvRScdoZ9tK0lP3EzJl1uAE0Aw0A79GIyi4Z3bcXS6QpDPWiRyVfnRacknCCMjeMvVpWgoZ2vKVT0hp3Uu0JX3U1XzRS-C6P7pPdVZvjsVj3gbwyf7077w-QGP4yhm6RxoISFBOWdgQcSPndseWsG7u_rLMGBhCg8tJGnf1zE67v9PH" className="w-full h-full object-cover opacity-80" alt="Cacao Beans" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto mb-32">
          <div className="order-2 md:order-1 aspect-[4/5] w-full overflow-hidden border border-[#1A0B08]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7g0tVWRRlES2LRLT9KwdLfBbFnpip696HBooAGS12fFoACkxOirVFEew9m7szTt-0Tp5H-WWc_aj5brII8O8NqdvWTy0lAZXGz7ORsYs828bakXR3vcsjuMv4LlLKrSVGuT6YEiLAWIdHRHnTcdL0VIVZB3ViL5vA-DUAu8zg2oxO1t_mmMfG7A4L98w5iDGJkdX72QVWxUv9s1JwJh5Pzi7kXyrx737q1bIjwlcsZWXvw__pwxBinfhH5na0izbOXaokVPlVlC0" className="w-full h-full object-cover opacity-80 mix-blend-screen bg-black" alt="The Truffle Process" />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="font-serif text-4xl text-[#B58266]">The Temper</h2>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              In our London atelier, master chocolatiers work in small batches, relying on sensory intuition rather than automated machinery. The perfect temper is a matter of temperature, time, and precise crystallization.
            </p>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              The result: A distinct snap, a silken melting point, and a lingering complex finish that defines the Aura Luxury standard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto mb-32">
          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="font-serif text-4xl text-[#B58266]">The Alchemy</h2>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              Chocolate is a canvas for flavor. Our infusions are crafted using rare botanicals, hand-harvested sea salts, and single-estate coffee beans. We do not use extracts or artificial compounds. 
            </p>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              Every ingredient is folded into the ganache at exact temperatures to ensure the essential oils are preserved, creating a symphony that unfolds sequentially on the palate.
            </p>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A0B08]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCc77i4iGWbxOUp3fCjE4xZJdN2h4dIfr9G5baw3P7cgZaIyEz7xEEtDyO7IzppnwJ-_p7n7-nSdpjK0btcmnjqtiketQwiF5nSRSMdQcXxZv0nHsd8uVyzKlIWNFRE99fRCzJXnQF-8mu2tCqKQxsPltgB01qIP0RIMUG8gNFFV-XyQ5M4nS6LwQHVdeqKLzxZQL1e_nuUqZojeMYt4Gh372UZoIpmOFIFJd7iGY8YCO-nx6n_5yewmzT8bNJ0S4s7W0lVkI3QoSZ" className="w-full h-full object-cover opacity-80" alt="Botanical Ingredients" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto mb-32">
          <div className="order-2 md:order-1 aspect-[4/5] w-full overflow-hidden border border-[#1A0B08]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfSWr007O3Bu26eutdswP10qShw7RhhO-31_4NrbP8MXx2k0UzaPAUe8kY2V-rQWrcpb4LnjhBxAbysNYu1h2Wyki8HdiLGbn3b8PAHtyDVMiFnwoZ4AjQ2zcqf--BNRvaCS62fy3luM73Ti_-NUJSzTvPSknfgqTnvs3BPBDhZTly2X5Qmy2FMseLr73-uQikLbdbu0B0NQE_TimzFUQ_uSF9HjsEbolbA59Rv5htgoJqTQ9zo8TD_xrs6cDh0Ihk9ItQg_TfYkrb" className="w-full h-full object-cover opacity-80" alt="The Aging Process" />
          </div>
          <div className="space-y-8 order-1 md:order-2 flex flex-col justify-center">
            <h2 className="font-serif text-4xl text-[#B58266]">The Aging</h2>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              Time is the ultimate luxury. Just as fine wine requires patience, our dark chocolate reserves are aged in climate-controlled cellars for up to 6 months before they are melted for molding.
            </p>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              This resting period allows the intense tannins of the raw cacao to mellow, replacing bitterness with deep, earthy undertones and a remarkably smooth profile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="font-serif text-4xl text-[#B58266]">The Legacy</h2>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              Aura is more than a chocolatier; it is a commitment to the preservation of true craftsmanship. From the hand-painted detailing on our signature truffles to the sustainable sourcing of our beans, we refuse to cut corners.
            </p>
            <p className="text-[#F5EFE6]/70 font-sans leading-relaxed text-lg">
              We invite you to break boundaries. Experience luxury that you can taste, feel, and share. This is the new standard of chocolate.
            </p>
          </div>
          <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A0B08]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXRBXrwQqyrpAArxU1tY8WsHoi0pySdPWVqbQFk6x_aqaoxGkAGJW8zfX1yc9OucvVIJTG9pa5YFaia5pg8ENOlrsIBmfQgph51RXdwyLzB80OVv9nxuzF0PWkcc5ToAt-3tZzi78itPRrIlCQ4U6q3OKUZ8xQ0B7BNEUA6sKRkMjh-s3zkJkeoJiMlvcTQbaZLMeHFgVoxeVWw15OGVw4azuVvHYTALTZbzCq0gsoYU61uS9pG408nEo_bhqS1R3CBp9FHpawvSW4" className="w-full h-full object-cover opacity-80" alt="The Aura Legacy" />
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
