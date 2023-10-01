import React from "react";
import Receipt from "./Receipt";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const ReceiptList = (props) => {
  const params = useParams();
  const id = params.id;
  let item = props.orders;
  let Res = [];
  if (item.id_orders === id) {
    Res.push(<Receipt {...item} key={item.id_orders} />);
  } else {
    return null;
  }
  return (
    <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
      {Res}
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default ReceiptList;
