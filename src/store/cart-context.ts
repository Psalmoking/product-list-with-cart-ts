import React from "react";

// Define the type for the context value
interface CartContextType {
  desserts: Record<string, unknown>; // Adjust `unknown` to the specific type if known
  cart: Array<unknown>; // Replace `unknown` with the specific type of items in the cart
  totalPrice: number | null; // Use `number` or `null` for optional total price
  increaseAmount: () => void; // Function type for increasing amount
  decreaseAmount: () => void; // Function type for decreasing amount
}

// Create the context with a default value
const CartContext = React.createContext<CartContextType>({
  desserts: {},
  cart: [],
  totalPrice: null,
  increaseAmount: () => {},
  decreaseAmount: () => {},
});

export default CartContext;
