import React from "react";

const Kitchen = (props) => {
  return (
    <div className="flex flex-col justify-between w-1/5 rounded-lg bg-indigo-100 p-4 m-2 shadow-md h-auto">
      <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 uppercase">
        Table : {props.id_tables}
      </h5>
      <div className="flex flex-wrap flex-row py-2">
        {props.items.map((item) => (
          <div key={item.id} className="pr-2 py-2">
            <div className="mt-5 sm:mt-0 bg-gray-100 rounded p-2">
              <label className="text-sm text-gray-900">
                {item.quantity} x{" "}
                <span className="capitalize font-semibold">{item.name}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <p>Status: {props.status}</p>
      <button
        type="button"
        className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
      >
        Serve
      </button>
    </div>
  );
};

export default Kitchen;
