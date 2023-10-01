const addOrders = (state = {}, action) => {
  let newState = {};
  for (let key in state) {
    newState[key] = { ...state[key] };
  }
  newState[action.orders.id_orders] = {
    id_orders: action.orders.id_orders,
    id_tables: action.orders.id_tables,
    items: action.orders.items,
    total: action.orders.total,
    status: action.orders.status,
  };
  return newState;
};

const changeOrder = (state = {}, action) => {
  let quantity = action.item.quantity;
  let newState = {};
  for (let key in state) {
    newState[key] = { ...state[key] };
  }
  if (quantity === 0) delete newState[action.item.id];
  else newState[action.item.id].quantity = quantity;
  return newState;
};

const orders = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ORDERS":
      return addOrders(state, action);
    case "CHANGE_ITEM_ORDERS":
      return changeOrder(state, action);
    default:
      return state;
  }
};

export default orders;
