import React from "react";
import Kitchen from "./Kitchen";

const KitchenList = (props) => {
  let Kit = [];
  for (let id_orders in props.orders) {
    let item = props.orders[id_orders];
    Kit.push(<Kitchen {...item} key={item.id_orders} />);
  }
  return <div className="flex flex-wrap w-10/12 justify-center">{Kit}</div>;
};

export default KitchenList;
