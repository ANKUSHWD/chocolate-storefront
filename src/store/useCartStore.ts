import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number; // in dollars (e.g. 4.50)
  img: string;
  quantity: number;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      isOpen: false,
      items: [],
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === newItem.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { ...newItem, quantity: 1 }],
            isOpen: true,
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, delta) =>
        set((state) => ({
          items: state.items.map((i) => {
            if (i.id === id) {
              const newQty = Math.max(1, i.quantity + delta);
              return { ...i, quantity: newQty };
            }
            return i;
          }),
        })),
      clearCart: () => set({ items: [], isOpen: false }),
    }),
    {
      name: "aura-luxury-cart", // localStorage key
      partialize: (state) => ({ items: state.items }), // only persist items, not UI state
    }
  )
);
