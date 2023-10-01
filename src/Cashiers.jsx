import React from "react";
import VisibleCash from "./components/VisibleCash";
import Menu from "./components/Menu";

const Cashiers = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-24">
      <Menu />
      <VisibleCash />
    </main>
  );
};

export default Cashiers;
