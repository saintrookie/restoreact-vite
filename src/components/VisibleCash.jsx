import { connect } from "react-redux";
import CashierList from "./CashierList";

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const VisibleCash = connect(mapStateToProps)(CashierList);

export default VisibleCash;
