import { combineReducers } from "@reduxjs/toolkit";
import shoppingCart from "./cart";
import itemListing from "./listing";
import orders from "./order";

const showNotification = (state = false, action) => {
  if (action.type === "SHOW_NOTIFICATION") state = true;
  else if (action.type === "REMOVE_NOTIFICATION") state = false;
  return state;
};

const shoppingCartApp = combineReducers({
  shoppingCart,
  itemListing,
  showNotification,
  orders,
});

export default shoppingCartApp;
