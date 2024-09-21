import React from "react";
import "../App.css";

const NoDataMessage = ({ message }) => {
  return (
    <div className="noData_msg">
      <img
        src="https://insum.talan.com/wp-content/uploads/2021/03/animation_300_km18j416.gif"
        height="150"
        width="190"
      />
      <h4>{message}</h4>
    </div>
  );
};

export default React.memo(NoDataMessage);
