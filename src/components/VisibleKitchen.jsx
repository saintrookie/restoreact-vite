import { connect } from "react-redux";
import KitchenList from "./KitchenList";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const VisibleKitchen = connect(mapStateToProps)(KitchenList);

export default VisibleKitchen;
