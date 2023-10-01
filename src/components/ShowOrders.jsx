import React, { useState } from "react";
import OrderList from "./OrderList";
import { v4 as uuid } from "uuid";
import store from "../app/store";
import { disableNotify, emptyCart } from "../actions";

const ShowOrders = (props) => {
  let cart = props.shoppingCart;
  let count = 0;
  let totalBeforeDiscount = 0;
  let discount = 0;
  let typeDiscount = 0;
  props.shoppingCart.forEach((item) => {
    count += item.quantity;
    totalBeforeDiscount += item.price * item.quantity;
    discount += (item.price * item.quantity * item.discount) / 100;
    typeDiscount += (item.price * item.quantity * item.typeDiscount) / 100;
  });
  const newUuid = uuid();
  const [tables, setTables] = useState("");
  const setOrders = () => {
    setTables("");
    document.querySelector("input").defaultValue = "";
    let newOrder = {
      id_orders: newUuid,
      id_tables: tables,
      items: [...props.shoppingCart],
      total: totalBeforeDiscount,
      status: "prepare",
    };

    store.dispatch({
      type: "ADD_ORDERS",
      orders: newOrder,
    });
    store.dispatch(emptyCart());
    store.dispatch(disableNotify());
  };

  const resetCart = () => {
    store.dispatch(emptyCart());
  };

  return (
    <div className="w-3/6 md:w-1/2 lg:w-1/2 flex flex-col">
      <div className="flex-row mt-5 mb-1">
        <h5 className="mb-1 text-left text-2xl font-bold">Summary Order</h5>
      </div>
      <div className="flex flex-row mx-auto w-full justify-center">
        <div className="flex flex-row flex-wrap w-9/12">
          {cart.length === 0 ? (
            <div className="bg-gray-100 rounded-lg inline-flex w-full">
              <h1 className="flex justify-center items-center w-full">
                No Order Here
              </h1>
            </div>
          ) : (
            cart.map((item) => (
              <OrderList
                key={item.id}
                incrementItem={props.incrementItem}
                decrementItem={props.decrementItem}
                removeItem={props.removeItem}
                changeItem={props.changeItem}
                {...item}
              />
            ))
          )}
        </div>
        <div className="flex w-3/12 h-2/6 ml-1">
          <>
            <div className="w-full mt-6 rounded-lg border bg-white py-4 px-4 shadow-md md:mt-0 ">
              <div className="mb-2 flex justify-between flex-col">
                <p className="text-gray-700 mb-2">Set Table</p>

                <input
                  type="text"
                  name="tables"
                  className="form-input px-4 py-1 rounded outline outline-1 outline-gray-400 w-full"
                  onChange={(e) => {
                    setTables(e.target.value);
                  }}
                />
              </div>
              <hr className="my-4" />
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Item Orders</p>
                <p className="text-gray-700">({count})</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    Rp.{totalBeforeDiscount}.000
                  </p>
                </div>
              </div>
              <button
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                onClick={() => {
                  setOrders();
                }}
              >
                Set Order
              </button>
              <button
                className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600"
                onClick={() => resetCart()}
              >
                Reset Order
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ShowOrders;
