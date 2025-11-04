import removeItemIcon from "../../assets/images/icon-remove-item.svg";

import { useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../store/cart";

interface CartItemProps {
  name: string;
  amount: number;
  price: number;
  total: number;
  category: string;
}

export default function CartItem({ name, amount, price, total, category }: CartItemProps) {
  const dispatch = useAppDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.deleteFromCart({ category }))
  }

  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-[rgb(222,215,215)] pb-2 bg-white">
      <div className="flex flex-col gap-1">
        <h5 className="text-sm font-medium">{name}</h5>
        <div className="text-xs text-[hsl(12,20,44)]">
          <span className=" font-bold text-[hsl(14,64,46)]">{amount}x</span>
          <span className="font-semibold my-0 mr-[0.5rem] ml-[0.8rem]">
            @${price.toFixed(2)}
          </span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="border border-1 border-solid border-gray-300 py-1 px-1 rounded-full hover:cursor-pointer hover:border-[1.5px] hover:border-gray-400" onClick={removeItemHandler}>
        <img src={removeItemIcon} alt="remove-item-icon" />
      </div>
    </div>
  );
}
