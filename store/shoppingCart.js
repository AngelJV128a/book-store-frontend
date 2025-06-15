import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShoppingCart = create()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.product.id === product.id
        );

        if (existingItem) {
          // Sumar cantidad si ya existe
          const updatedItems = items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );

          set({ items: updatedItems });
        } else {
          // Agregar producto nuevo
          set({ items: [...items, { product, quantity }] });
        }
        console.log("producto agregado");
        console.log(items);
      },
      removeItem: (productId) => {
        const { items } = get();

        set({ items: items.filter((item) => item.product.id !== productId) });
      },
      increaseQuantity: (productId, quantity = 1) => {
        const { items } = get();

        const newItems = structuredClone(items);
        const itemIndex = newItems.findIndex(
          (item) => item.product.id === productId
        );
        const itemData = newItems[itemIndex];

        newItems[itemIndex] = {
          ...itemData,
          quantity: itemData.quantity + quantity,
        };

        set({ items: newItems });
      },
      decreaseQuantity: (productId, quantity = 1) => {
        const { items } = get();

        const newItems = structuredClone(items);
        const itemIndex = newItems.findIndex(
          (item) => item.product.id === productId
        );
        const itemData = newItems[itemIndex];

        const newQuantity =
          itemData.quantity !== 1 ? itemData.quantity - quantity : quantity;

        newItems[itemIndex] = { ...itemData, quantity: newQuantity };

        set({ items: newItems });
      },
      getTotalPrice: () => {
        const { items } = get();

        return items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      clearCart: () => set({ items: [] }),
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "shopping-cart",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
