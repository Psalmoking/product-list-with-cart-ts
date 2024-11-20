import addToCartIcon from "../../../assets/images/icon-add-to-cart.svg";

export default function AddToCartButton() {
  return (
    <div className="flex items-center bg-white border border-red-500 border-1 rounded-2xl py-1 px-3 w-fit mt-[-13px] font-medium">
      <img src={addToCartIcon} className="w-4 mr-1.5 inline" alt="add-to-cart-icon" />
      <span className="text-xs">Add to cart</span>
    </div>
  );
}
