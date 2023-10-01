import { connect } from "react-redux";
import ReceiptList from "./ReceiptList";
import { useParams } from "react-router";

const mapStateToProps = (state) => {
  const params = useParams();
  const id = params.id;
  return {
    orders: state.orders[id],
  };
};

const VisibleReceipt = connect(mapStateToProps)(ReceiptList);

export default VisibleReceipt;
