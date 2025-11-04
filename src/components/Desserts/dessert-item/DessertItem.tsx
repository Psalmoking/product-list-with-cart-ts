import { useAppSelector } from "../../../hooks/hooks";

import AddToCartButton from "../add-to-cart-btn/AddToCartButton";
import { DessertItemProps } from "./DessertItem.types";

export default function DessertItem({ category, name, price, image }: DessertItemProps) {
  const cart = useAppSelector(state => state.cart);
  const itemInCart = cart.find(item => item.category === category);
  const itemIsInCart = itemInCart ? true : false;

  return (
    <div className="w-full">
      <header className="grid place-items-center">
        <img src={image.desktop} width={160} height={140} className={`rounded-md border border-[1.5px] ${itemIsInCart && "border-red-700"} max-xs:object-cover max-xs:w-[95%] max-xs:h-[10rem]`} alt={`${category}-image`} />
        <AddToCartButton category={category} itemIsInCart={itemIsInCart} />
      </header>
      <div className="px-2">
        <p className="font-medium text-gray-500 text-[10px]">{category}</p>
        <h5 className="font-bold text-[10.5px]">{name}</h5>
        <p className="text-red-500 text-[12px] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
