import React from "react";

const Products = (props) => {
  return (
    <div className="basis-1/4 w-1/4 sm:w-1/2  rounded-lg bg-indigo-100 p-4 m-2 shadow-md">
      <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 uppercase">
        {props.name}
      </h5>
      <h6
        className="mb-5 mt-3 text-xl leading-tight text-neutral-800 font-bold"
        data-value={props.price}
        data-name="price"
      >
        {props.price}K
      </h6>
      <p className="mb-5">{props.type}</p>
      <button
        type="button"
        className="flex items-center justify-center rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white text-center"
        onClick={() => props.addItem(props.id)}
      >
        Add
      </button>
    </div>
  );
};

export default Products;
