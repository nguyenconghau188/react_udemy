import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";

  if (props.totalYear > 0) {
    let percent = parseInt(props.totalMonth) / parseInt(props.totalYear);
    barFill = Math.round(percent * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
