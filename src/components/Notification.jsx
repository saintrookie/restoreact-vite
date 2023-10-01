import React, { Component } from "react";
import { connect } from "react-redux";
import { disableNotify } from "../actions";

class Notification extends Component {
  constructor() {
    super();
    this.state = {};
  }
  UNSAFE_componentWillUpdate(nextProps) {
    if (this.id) clearTimeout(this.id);
    this.id = undefined;
    if (nextProps.showNotification)
      this.id = setTimeout(() => this.props.disableNotify(), 3000);
    return false;
  }
  componentWillUnmount() {
    if (this.id) clearTimeout(this.id);
  }
  render() {
    if (this.props.showNotification)
      return (
        <>
          <div className="transition ease-in-out duration-75 text-center py-4 lg:px-4">
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                New
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                Your Item has been added to Order
              </span>
            </div>
          </div>
        </>
      );
    else return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    showNotification: state.showNotification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    disableNotify: (id) => {
      dispatch(disableNotify(id));
    },
  };
};

const ShowNotification = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);

export default ShowNotification;
