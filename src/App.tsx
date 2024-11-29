import React from "react";

import Desserts from "./components/Desserts/desserts/Desserts";
import Cart from "./components/Cart/Cart";
import { useAppSelector } from "./hooks/hooks";
import Order from "./components/Order/Order";

function App() {
  const showModal = useAppSelector(state => state.modal.showModal);

  return (
    <div className="App bg-[hsl(20,50,98%)]">
      <section className="grid grid-cols-[9fr_6fr] gap-8 w-fit p-[3rem] my-0 mx-auto tablet:flex tablet:flex-col max-xs:flex max-xs:flex-col max-xs:p-2 max-xs:w-full">
        <Desserts />
        <Cart />
        {showModal && <Order />}
      </section>
    </div>
  );
}

export default App;
