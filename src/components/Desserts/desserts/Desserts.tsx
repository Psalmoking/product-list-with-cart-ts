import DessertItem from "../dessert-item/DessertItem";

interface ImageDetail {
  thumbnail: string;
  mobile: string;
  desktop: string;
  tablet: string;
}

interface Detail {
  name: string;
  category: string;
  price: number;
  image: ImageDetail;
}

type Desserts = Detail[];

const data = require("../../../data.json");
const desserts: Desserts = data;
console.log(desserts);

export default function Desserts() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Desserts</h1>
      {/* add a min-width to the grid */}
      <section className="grid grid-cols-3 gap-3 w-fit min-w-[25rem]">
        {desserts.map((dessert) => (
          <DessertItem
            category={dessert.category}
            name={dessert.name}
            price={dessert.price}
            image={dessert.image}
            key={dessert.category}
          />
        ))}
      </section>
    </div>
  );
}
