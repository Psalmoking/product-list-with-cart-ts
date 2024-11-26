export interface imageItemType {
  thumbnail: string;
  mobile: string;
  desktop: string;
  tablet: string;
}

export interface DessertItemType {
  name: string;
  category: string;
  price: number;
  image: imageItemType;
}

export interface CartItemType {
  name: string;
  category: string;
  price: number;
  amount: number;
  total: number;
}

export type DessertsType = DessertItemType[];
export type CartType = CartItemType[];

export type CartContextType = {
  desserts: DessertsType;
  cart: CartType;
  totalPrice: number;
  increaseAmount: (category: string) => void;
  decreaseAmount: (category: string) => void;
}
