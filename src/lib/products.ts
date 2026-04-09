// Centralized product catalog — single source of truth for all pages
// Prices are in cents for Stripe compatibility

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  priceInCents: number; // e.g. 450 = $4.50
  img: string; // Google image ID (used with lh3.googleusercontent.com prefix)
  span?: string; // grid row span for masonry layout
  mt?: string;   // margin top for staggered layout
  type: "dark" | "milk" | "white"; // chocolate base
  cacaoHigh: boolean; // true if 70%+ cacao
  hasFlavorNotes: boolean; // true if botanicals, spices, or special infusions
}

export const products: Product[] = [
  {
    id: "noir-ganache",
    title: "Noir Ganache",
    subtitle: "Signature Series",
    desc: "85% Madagascar cacao with a whisper of smoked sea salt.",
    priceInCents: 450,
    img: "AB6AXuDA7g0tVWRRlES2LRLT9KwdLfBbFnpip696HBooAGS12fFoACkxOirVFEew9m7szTt-0Tp5H-WWc_aj5brII8O8NqdvWTy0lAZXGz7ORsYs828bakXR3vcsjuMv4LlLKrSVGuT6YEiLAWIdHRHnTcdL0VIVZB3ViL5vA-DUAu8zg2oxO1t_mmMfG7A4L98w5iDGJkdX72QVWxUv9s1JwJh5Pzi7kXyrx737q1bIjwlcsZWXvw__pwxBinfhH5na0izbOXaokVPlVlC0",
    span: "row-[span_55]",
    mt: "",
    type: "dark",
    cacaoHigh: true,
    hasFlavorNotes: true,
  },
  {
    id: "rosemary-honey",
    title: "Rosemary Honey",
    subtitle: "Botanical Infusion",
    desc: "Wildflower infusion in velvet milk chocolate.",
    priceInCents: 375,
    img: "AB6AXuBIsxlSMVHQZ2TAyWU9Cw-4gaHETXd--C3KPzvX6m9UknQmjtlQJS6kMwlGh6Q9CIfhFj2lcf9gs_9w-pou1xeUbUWWLgav5uW2JjkyIJrtFQ2wocNw6N0UjwZl5mq_Y56Umx_FXsx7jm62k2zXpi6qETBZNHA-Jj0rY0WLl8sqyLnOcji4LJWKYwTqUX3NNsOoQahPAbbKsdQv-Ruj0ydePmD4iusYSDDsyEKouNfwuUEQ_UXzzHy4D0Y_yO1zbUmDwq8NuJPd-qMt",
    span: "row-[span_45]",
    mt: "",
    type: "milk",
    cacaoHigh: false,
    hasFlavorNotes: true,
  },
  {
    id: "espresso-dust",
    title: "Espresso Dust",
    subtitle: "Rich Roasts",
    desc: "Triple-shot Arabica blend encased in 70% dark shell.",
    priceInCents: 400,
    img: "AB6AXuAhONeiEpMHy4phvhCyIgMqCq0-Hi7VmszLKIIhRoVPaxMlIxv2IlYkcxN1XoqBbFb4DHXoPkX4hEMFykiVSqfGNylv91ZfZl4RG_IdBOAcCeQIRKk5SRHWeP7CkJXrgpsgy0snbNfu82gt7HiLu0PggCTLfHq5uf5CKInfnvPbuecIJRcMyRhcljtS-mDwNIFYeJKxageHiD2tBkGYrtQ1zdRbWw1cRERBVcaGS1qqzgenKvdPb4kz_Cbgah0K4L7Fe6KcvG4YhI75",
    span: "row-[span_55]",
    mt: "mt-12 md:mt-0",
    type: "dark",
    cacaoHigh: true,
    hasFlavorNotes: true,
  },
  {
    id: "lavender-bloom",
    title: "Lavender Bloom",
    subtitle: "Florals",
    desc: "Provencal lavender and white chocolate silk.",
    priceInCents: 525,
    img: "AB6AXuA3kJYt4s-3xIbNDa0Sv23UyzBYCFgspRFNuLBO_z0h92oePrtN6NyyGIOxRGYVgBDUSNPWVuC7rOEwV25UyDVJO0uqWNEoj5QJBnYFLluCcb38NxSoqWdKJvX99mq46r8phXGgTrDImSdTkkG-hLtcjuNTMZNMYdDEK2NUfMC3npwsy3_cK60VDM4B0EJEORWlPTJ1eSXwqHJIGAJ8IvcTX_veLz78xi7GpPjbSUSzUQjIEjqQKfW9cLvH4aYnXBFW-IvdnNeS_Ns0",
    span: "row-[span_45]",
    mt: "md:-mt-24",
    type: "white",
    cacaoHigh: false,
    hasFlavorNotes: true,
  },
  {
    id: "pistachio-creme",
    title: "Pistachio Crème",
    subtitle: "Nutty Profiles",
    desc: "Roasted Sicilian pistachio butter and milk chocolate.",
    priceInCents: 650,
    img: "AB6AXuD452hyNwUbYqP8Y7S_2PnPuBhXOf0CgquRGys9KLQApXSin05oIu63ECD5khSq5mCFvTKMcIFqtdHWcMZndLEl13nllvvvXv4LbCgtV2FcumVkYDAXM0hJVo_C0qIm-m3kSnmaN350U4W1QzvkB3rqTX7hdHHBWpH6gKi_bet-A7IQSLB04X0CqmVrNMHar2DDRQbkun89IumErZ5ZRLIwXtlbL5r9FQ7GY57nPu9EAgNZulh5l3CVqrETi-ShZPruddz03li5YLKy",
    span: "row-[span_55]",
    mt: "mt-4",
    type: "milk",
    cacaoHigh: false,
    hasFlavorNotes: false,
  },
  {
    id: "chilli-heat",
    title: "Chilli Heat",
    subtitle: "Spiced Collection",
    desc: "Ancho chilli and dark chocolate fusion.",
    priceInCents: 450,
    img: "AB6AXuCGc7h3czXAOHKDOVn6XdBK0-Tt1HBLmntAVko6t6CvwA0_7S3ppfT-KqfUr0VceCEFrx05yFRXBjGT8WeJc6wIkwdiiyhXqVBxSsTXcG0kKD_Unxd5E8JGBpzxd6vOgOE3O6hU6g6eOIEuuzDHtYkAsFlCqz2-RZTqFMmGLOmDTx_p6vEZDwCaUzLQCz5oey6kRLhjkSKUGGApZR6KdY6fXRr5LOx7rotDS9WYI_twWSVdAHDwbnSSpmyjg0YDSwxdDOBGfbY1Jkc8",
    span: "row-[span_45]",
    mt: "md:-mt-12",
    type: "dark",
    cacaoHigh: false,
    hasFlavorNotes: true,
  },
  {
    id: "velvet-espresso",
    title: "Velvet Espresso",
    subtitle: "Rich Roasts",
    desc: "72% Venezuelan Cacao & Arabica beans.",
    priceInCents: 450,
    img: "AB6AXuDfSWr007O3Bu26eutdswP10qShw7RhhO-31_4NrbP8MXx2k0UzaPAUe8kY2V-rQWrcpb4LnjhBxAbysNYu1h2Wyki8HdiLGbn3b8PAHtyDVMiFnwoZ4AjQ2zcqf--BNRvaCS62fy3luM73Ti_-NUJSzTvPSknfgqTnvs3BPBDhZTly2X5Qmy2FMseLr73-uQikLbdbu0B0NQE_TimzFUQ_uSF9HjsEbolbA59Rv5htgoJqTQ9zo8TD_xrs6cDh0Ihk9ItQg_TfYkrb",
    span: "row-[span_55]",
    mt: "mt-4 md:mt-0",
    type: "dark",
    cacaoHigh: true,
    hasFlavorNotes: true,
  },
  {
    id: "rose-pistachio",
    title: "Rose Pistachio",
    subtitle: "Florals & Nuts",
    desc: "White Ganache & Persian Petals with crushed pistachio.",
    priceInCents: 500,
    img: "AB6AXuAXRBXrwQqyrpAArxU1tY8WsHoi0pySdPWVqbQFk6x_aqaoxGkAGJW8zfX1yc9OucvVIJTG9pa5YFaia5pg8ENOlrsIBmfQgph51RXdwyLzB80OVv9nxuzF0PWkcc5ToAt-3tZzi78itPRrIlCQ4U6q3OKUZ8xQ0B7BNEUA6sKRkMjh-s3zkJkeoJiMlvcTQbaZLMeHFgVoxeVWw15OGVw4azuVvHYTALTZbzCq0gsoYU61uS9pG408nEo_bhqS1R3CBp9FHpawvSW4",
    span: "row-[span_45]",
    mt: "md:-mt-24",
    type: "white",
    cacaoHigh: false,
    hasFlavorNotes: true,
  },
  {
    id: "smoked-sea-salt",
    title: "Smoked Sea Salt",
    subtitle: "Classic Caramel",
    desc: "Slow-Cooked Caramel & Maldón crystals inside a dark shell.",
    priceInCents: 450,
    img: "AB6AXuBCc77i4iGWbxOUp3fCjE4xZJdN2h4dIfr9G5baw3P7cgZaIyEz7xEEtDyO7IzppnwJ-_p7n7-nSdpjK0btcmnjqtiketQwiF5nSRSMdQcXxZv0nHsd8uVyzKlIWNFRE99fRCzJXnQF-8mu2tCqKQxsPltgB01qIP0RIMUG8gNFFV-XyQ5M4nS6LwQHVdeqKLzxZQL1e_nuUqZojeMYt4Gh372UZoIpmOFIFJd7iGY8YCO-nx6n_5yewmzT8bNJ0S4s7W0lVkI3QoSZ",
    span: "row-[span_55]",
    mt: "mt-4",
    type: "dark",
    cacaoHigh: false,
    hasFlavorNotes: true,
  },
];

// Helper: format price for display (e.g. 450 → "$4.50")
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

// Helper: get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// Filter types
export type FilterKey = "all" | "cacao" | "flavor" | "dark" | "milk";

export function filterProducts(products: Product[], filter: FilterKey): Product[] {
  switch (filter) {
    case "all":    return products;
    case "dark":   return products.filter((p) => p.type === "dark");
    case "milk":   return products.filter((p) => p.type === "milk" || p.type === "white");
    case "cacao":  return products.filter((p) => p.cacaoHigh);
    case "flavor": return products.filter((p) => p.hasFlavorNotes);
    default:       return products;
  }
}
