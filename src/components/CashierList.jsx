import React from "react";
import Cashier from "./Cashier";

const CashierList = (props) => {
  let Kit = [];
  for (let id_orders in props.orders) {
    let item = props.orders[id_orders];
    Kit.push(<Cashier {...item} key={item.id_orders} />);
  }
  return <div className="flex flex-wrap w-10/12 justify-center">{Kit}</div>;
};

export default CashierList;
