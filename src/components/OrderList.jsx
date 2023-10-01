import React from "react";

const OrderList = (props) => {
  return (
    <>
      <div className="rounded-lg px-2 w-1/2">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start outline outline-1 outline-gray-300">
          <span
            className="text-black cursor-pointer"
            onClick={() => props.removeItem(props.id)}
          >
            X
          </span>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-xl font-bold text-gray-900">{props.name}</h2>
              <p className="mt-1 text-xs text-gray-700">
                Qty : {props.quantity}
              </p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center justify-end border-gray-100">
                Price
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">Rp.{props.quantity * props.price}.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
