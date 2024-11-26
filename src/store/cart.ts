import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../types/index.types";
import desserts from "../data.json";

interface EditCartPayloadType {
  category: string;
}

const initialCartState: CartType = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<EditCartPayloadType>) => {
      const category = action.payload.category;
      const item = state.find((item) => item.category === category);
      const dessertItem = desserts.find((item) => item.category === category);

      if (item) {
        item.amount++;
        item.total += item.price;
      } else {
        if (dessertItem) {
          state.push({
            name: dessertItem.name,
            amount: 1,
            category: dessertItem.category,
            price: dessertItem.price,
            total: dessertItem.price,
          });
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<EditCartPayloadType>) => {
      const category = action.payload.category;
      const item = state.find((item) => item.category === category);

      if (item) {
        if (item.amount === 1) {
          const index = state.findIndex((item) => item.category === category);
          if (index !== -1) {
            state.splice(index, 1);
          }
        } else {
          item.amount--;
          item.total -= item.price;
        }
      }
    },
    deleteFromCart: (state, action: PayloadAction<EditCartPayloadType>) => {
      const category = action.payload.category;
      const index = state.findIndex((item) => item.category === category);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
