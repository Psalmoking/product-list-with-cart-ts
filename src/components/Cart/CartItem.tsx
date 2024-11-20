import removeItemIcon from "../../assets/images/icon-remove-item.svg";

export default function CartItem() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-[rgb(222,215,215)] pb-2 bg-white">
      <div className="flex flex-col gap-1">
        <h5 className="text-sm font-medium">Classic Tiramisu</h5>
        <div className="text-xs text-[hsl(12,20,44)]">
          <span className=" font-bold text-[hsl(14,64,46)]">1x</span>
          <span className="font-semibold my-0 mr-[0.5rem] ml-[0.8rem]">
            @$5.50
          </span>
          <span className="font-bold">$5.50</span>
        </div>
      </div>
      <div className="border border-1 border-solid border-grey-500 py-1 px-1 rounded-full">
        <img src={removeItemIcon} alt="remove-item-icon" />
      </div>
    </div>
  );
}
