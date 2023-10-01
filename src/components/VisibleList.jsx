import { connect } from "react-redux";
import List from "./List";
import { addItem, notify } from "../actions";

const mapStateToProps = (state) => {
  return {
    itemListing: state.itemListing,
    showNotification: state.showNotification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
      dispatch(notify());
    },
  };
};

const VisibleList = connect(mapStateToProps, mapDispatchToProps)(List);

export default VisibleList;
