import tiramisuThumbnail from "../../assets/images/image-tiramisu-thumbnail.jpg";

export default function OrderItem() {
  return (
    <div className="flex pb-2 border-b-[1px] border-b-[hsl(13,31,94)]">
      <img
        src={tiramisuThumbnail}
        alt="tiramisu-thumbnail"
        className="w-10 h-10 rounded-md mr-3"
      />
      {/* summary */}
      <div className="flex w-full justify-between items-center">
        {/* item-details */}
        <div className="flex flex-col h-full justify-center gap-1">
          <h5 className="text-sm font-medium">Classic Tiramisu</h5>
          <p className="text-sm">
            <span className="font-bold text-red-500 mr-4 ">1x</span>{" "}
            <span className="ml-1 text-[hsl(12,20,44)]">$5.00</span>
          </p>
        </div>
        <div className="font-medium text-md">$50.00</div>
      </div>
    </div>
  );
}
