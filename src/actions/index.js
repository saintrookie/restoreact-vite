export const addItem = (id) => {
  return {
    type: "ADD_ITEM",
    item: {
      id: id,
    },
  };
};

export const changeQuantity = (id, quantity) => {
  return {
    type: "CHANGE_ITEM",
    item: {
      id: id,
      quantity: quantity,
    },
  };
};

export const decrementItem = (id) => {
  return {
    type: "DECREMENT_ITEM",
    item: {
      id: id,
    },
  };
};

export const notify = () => {
  return {
    type: "SHOW_NOTIFICATION",
  };
};

export const disableNotify = () => {
  return {
    type: "REMOVE_NOTIFICATION",
  };
};

export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

export const newOrders = (newOrders) => {
  return {
    type: "ADD_ORDERS",
    orders: newOrders,
  };
};
