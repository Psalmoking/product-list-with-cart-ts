import confirmOrderIcon from "../../assets/images/icon-order-confirmed.svg";
import Modal from "./Modal";
import OrderItem from "./OrderItem";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { cartActions } from "../../store/cart";

export default function Order() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const total = cart.reduce((acc, cur) => acc + cur.total, 0);

  const startNewOrderHandler = () => {
    dispatch(cartActions.clearCart());
    alert("Start new order");
  };

  return (
    <Modal>
      <div className="w-[22rem] max-w-[100%]">
        <img src={confirmOrderIcon} alt="confirm-order-icon" className="w-8 " />
        <h1 className="font-bold text-3xl mt-3 mb-2">Order Confirmed</h1>
        <p className="text-xs text-[hsl(12,20,44)]">
          We hope you enjoy your food!
        </p>
        <div className="px-4 py-2 mt-4 bg-[hsl(20,50,98)]">
          <div className="flex flex-col gap-4 max-h-48 overflow-auto max-xs:max-h-60">
            {cart.map(item => <OrderItem name={item.name} amount={item.amount} category={item.category} price={item.price} total={item.total} key={item.category} />)}
          </div>
          <div className="flex w-full justify-between items-center px-0 pt-4 pb-2">
            <p className="text-xs font-medium text-[hsl(12,20,44)]">Order Total</p>
            <h3 className="font-bold text-xl text-[hsl(14,65,9)]">${total.toFixed(2)}</h3>
          </div>
        </div>
        <button className="w-full py-2 border-0 rounded-[2rem] bg-red-800 text-white font-semibold text-sm shadow-[0px_0px_10px_rgba(0,0,0,0.2)] mt-3" onClick={startNewOrderHandler}>Start New Order</button>
      </div>
    </Modal>
  );
}
