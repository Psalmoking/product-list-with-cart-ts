import desserts from '../../data.json'

interface OrderItemProp {
  name: string;
  amount: number;
  category: string;
  price: number;
  total: number;
}

export default function OrderItem({name, amount, category, price, total}: OrderItemProp) {
  const dessertItem = desserts.find(item => item.category === category) 

  return (
    <div className="flex pb-2 border-b-[1px] border-b-[hsl(13,31,94)]">
      <img
        src={dessertItem?.image.thumbnail}
        alt={`${category}-thumbnail`}
        className="w-10 h-10 rounded-md mr-3"
      />
      {/* summary */}
      <div className="flex w-full justify-between items-center">
        {/* item-details */}
        <div className="flex flex-col h-full justify-center gap-1">
          <h5 className="text-sm font-medium">{name}</h5>
          <p className="text-sm">
            <span className="font-bold text-red-500 mr-4 ">{amount}x</span>{" "}
            <span className="ml-1 text-[hsl(12,20,44)]">${price.toFixed(2)}</span>
          </p>
        </div>
        <div className="font-medium text-md">${total.toFixed(2)}</div>
      </div>
    </div>
  );
}
