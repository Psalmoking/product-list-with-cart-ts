import CartItem from "./CartItem";
import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg"
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import emptyCartImage from "../../assets/images/illustration-empty-cart.svg";
import { modalActions } from "../../store/modal";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const total = cart.reduce((acc, cur) => acc + cur.total, 0);

  const orderHandler = () => {
    dispatch(modalActions.displayModal());
  };

  return (
    <div className="bg-white h-fit px-4 py-5 mt-[-1rem] rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <h1 className="text-2xl text-[hsl(14,64,46)] font-bold">Your Cart</h1>
      {(cart.length !== 0) && <section>
        <div className="mt-6 flex flex-col gap-1.5">
          {cart.map((item) => (
            <CartItem
              name={item.name}
              amount={item.amount}
              price={item.price}
              total={item.total}
              key={item.category}
              category={item.category}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mx-0 mt-6 mb-4">
          <span className="font-medium text-sm text-[hsl(12,20,44)]">
            Order Total
          </span>
          <h4 className="text-xl font-bold">${total.toFixed(2) || 0.00}</h4>
        </div>
        <div className="py-1">
          <div className="py-2 px-3 bg-[hsl(20,50,98)] w-full font-medium text-xs rounded-lg mx-auto my-0 flex items-center gap-2">
            <img src={carbonNeutralIcon} alt="icon" />
            <p>
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="w-full rounded-3xl py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold mt-4 border-0 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] hover:cursor-pointer" onClick={orderHandler}>
            Confirm Order
          </button>
        </div>
      </section>}
      {(cart.length === 0) && (
        <div className="p-4 flex flex-col gap-4 items-center">
          <img src={emptyCartImage} alt="empty-cart-image" />
          <p className="text-sm font-semibold text-[hsl(12,20,44)]">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}
