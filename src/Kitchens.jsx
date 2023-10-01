import React from "react";
import Menu from "./components/Menu";
import VisibleKitchen from "./components/VisibleKitchen";
import store from "./app/store";

const Kitchens = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-24">
      <Menu />
      <VisibleKitchen orders={store.getState()["orders"]} />
    </main>
  );
};

export default Kitchens;
