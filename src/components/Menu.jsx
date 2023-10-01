import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="inline-flex mb-8">
        <h1 className="text-center font-mono font-bold text-4xl">D'RESTO</h1>
      </div>
      <div
        className="flex justify-center mb-5 w-10/2 lg:w-10/4 md:w-10/12"
        role="group"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-white rounded-l-lg cursor-pointer"
              : "bg-indigo-200 px-4 py-2 text-sm font-medium text-gray-900 border border-white rounded-l-lg cursor-pointer"
          }
        >
          MENU
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-white cursor-pointer"
              : "bg-indigo-200 px-4 py-2 text-sm font-medium text-gray-900 border border-white cursor-pointer"
          }
        >
          ORDER
        </NavLink>
        <NavLink
          to="/dapur"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-white cursor-pointer"
              : "bg-indigo-200 px-4 py-2 text-sm font-medium text-gray-900 border border-white cursor-pointer"
          }
        >
          DAPUR
        </NavLink>
        <NavLink
          to="/kasir"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "px-4 py-2 text-sm font-medium text-white bg-indigo-600 border rounded-r-lg border-white cursor-pointer"
              : "bg-indigo-200 px-4 py-2 text-sm font-medium text-gray-900 border rounded-r-lg border-white cursor-pointer"
          }
        >
          KASIR
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
