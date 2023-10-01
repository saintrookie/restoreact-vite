import React from "react";

const Receipt = (props) => {
  var dates = new Date().toLocaleString() + "";

  return (
    <>
      <h1 className="font-bold font-mono text-2xl my-4 text-center text-blue-600">
        D'RESTO
      </h1>
      <div className="flex flex-col justify-center mb-6">
        <h1 className="text-center text-lg font-bold">Receipt</h1>
        <div className="text-gray-700 text-center">
          <div>Date: {dates}</div>
          <div>Invoice #: {props.id_orders}</div>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead className="mb-2">
          <tr>
            <th className="text-left font-bold text-gray-700">Description</th>
            <th className="text-right font-bold text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody className="py-2">
          {props.items.map((item) => (
            <tr key={item.id}>
              <td className="text-left text-gray-700">
                {item.quantity} x {item.name}
              </td>
              <td className="text-right text-gray-700">
                Rp.{item.price * item.quantity}.000
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-left font-bold text-gray-700">Total</td>
            <td className="text-right font-bold text-gray-700">
              Rp.{props.total}.000
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="text-gray-700 mb-2">Thank you for Coming!</div>
    </>
  );
};

export default Receipt;
