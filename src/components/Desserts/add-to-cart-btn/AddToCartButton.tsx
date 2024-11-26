import { ReactNode, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { cartActions } from "../../../store/cart";
import addToCartIcon from "../../../assets/images/icon-add-to-cart.svg";
import incrementIcon from '../../../assets/images/icon-increment-quantity.svg'
import decrementIcon from '../../../assets/images/icon-decrement-quantity.svg'

interface AddToCartPropsType {
  category: string;
  itemIsInCart: boolean;
}

export default function AddToCartButton({ category, itemIsInCart }: AddToCartPropsType) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart)
  const item = cart.find(item => item.category === category);
  const itemAmount = item?.amount;

  const incrementHandler = () => {
    dispatch(cartActions.addToCart({ category }));
  };

  const decrementHandler = () => {
    dispatch(cartActions.removeFromCart({ category }));
  };

  const mouseLeaveHandler = () => {
    setButtonContent(
      <div className="flex items-center bg-white border border-red-700 border-1 rounded-2xl py-1.5 px-3 w-fit mt-[-16px] font-medium hover:cursor-pointer" onClick={mouseEnterHandler}>
        <img src={addToCartIcon} className="w-4 mr-1.5 inline" alt="add-to-cart-icon" />
        <span className="text-xs">Add to cart</span>
      </div>
    )
  }

  const displayItemAmountEditContent = (amount: number) => (
    <div className="flex bg-red-700 text-white  rounded-2xl w-fit font-medium mt-[-13px] text-xs px-3 py-[0.325rem]" onMouseLeave={mouseLeaveHandler}>
      <div className="flex border border-[1.4px] border-white rounded-full px-[1.5px] hover:cursor-pointer" onClick={decrementHandler}>
        <img src={decrementIcon} alt="decrement-icon" />
      </div>
      <span className="mx-6">{amount}</span>
      <div className="flex border border-[1.4px] border-white rounded-full px-[1.5px] hover:cursor-pointer" onClick={incrementHandler}>
        <img src={incrementIcon} alt="increment-icon" />
      </div>
    </div>
  )

  const mouseEnterHandler = () => {
    setButtonContent(displayItemAmountEditContent(0))
  }

  const [buttonContent, setButtonContent] = useState<ReactNode>(
    <div className="flex items-center bg-white border border-red-700 border-1 rounded-2xl py-1.5 px-3 w-fit mt-[-16px] font-medium hover:cursor-pointer" onClick={mouseEnterHandler}>
      <img src={addToCartIcon} className="w-4 mr-1.5 inline" alt="add-to-cart-icon" />
      <span className="text-xs">Add to cart</span>
    </div>
  )

  return (
    <div>
      {itemIsInCart && displayItemAmountEditContent(itemAmount || 0)}
      {!itemIsInCart && buttonContent}
    </div>
  );
}
