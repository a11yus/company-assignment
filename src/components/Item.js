import React from "react";
import "../App.css"


const Item = ({ item }) => {
  return <div className="item">{item.name}</div>;
};

export default React.memo(Item);
