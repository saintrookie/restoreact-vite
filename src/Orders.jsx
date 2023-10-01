import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import VisibleOrders from "./components/VisibleOrders";

const Orders = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-24">
        <Menu />
        <VisibleOrders />
      </main>
    </>
  );
};

export default Orders;
