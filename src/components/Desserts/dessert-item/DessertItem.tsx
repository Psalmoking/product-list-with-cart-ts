import AddToCartButton from "../add-to-cart-btn/AddToCartButton";
import { DessertItemProps } from "./DessertItem.types";

import WaffleImage from '../../../assets/images/image-waffle-desktop.jpg'

export default function DessertItem({category, name, price, image}: DessertItemProps) {
  return (
    <div className="w-fit">
      <div className="grid place-items-center">
        <img src={image.desktop} width={160} height={140} className="rounded-md" alt={`${category}-image`} />
        <AddToCartButton />
      </div>
      <div className="px-2"> 
        <p className="font-medium text-gray-500 text-[10px]">{category}</p> 
        <h5 className="font-bold text-[10.5px]">{name}</h5> 
        <p className="text-red-500 text-[12px] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
