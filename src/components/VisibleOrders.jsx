import { connect } from "react-redux";
import { changeQuantity, addItem, decrementItem, emptyCart } from "../actions";
import ShowOrders from "./ShowOrders";

const mapStateToProps = (state) => {
  let cart = [];
  for (let id in state.shoppingCart) {
    if (state.itemListing.hasOwnProperty(id)) {
      let item = { ...state.itemListing[id] };
      item.quantity = state.shoppingCart[id].quantity;
      item.typeDiscount = item.type === "fiction" ? 15 : 0;
      cart.push(item);
    }
  }
  return {
    shoppingCart: cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeItem: (id, quantity) => {
      if (quantity >= 0) dispatch(changeQuantity(id, quantity));
    },
    removeItem: (id) => {
      dispatch(changeQuantity(id, 0));
    },
    incrementItem: (id) => {
      dispatch(addItem(id));
    },
    decrementItem: (id) => {
      dispatch(decrementItem(id));
    },
    emptyCart: (id) => {
      dispatch(emptyCart(id));
    },
  };
};

const VisibleOrders = connect(mapStateToProps, mapDispatchToProps)(ShowOrders);

export default VisibleOrders;
