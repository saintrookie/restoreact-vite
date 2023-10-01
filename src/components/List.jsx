import React from "react";
import Products from "./Products";

const List = (props) => {
  let List = [];
  for (let id in props.itemListing) {
    let item = props.itemListing[id];
    List.push(<Products {...item} addItem={props.addItem} key={item.id} />);
  }

  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      {List}
    </div>
  );
};

export default List;
