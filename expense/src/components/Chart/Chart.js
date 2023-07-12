import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const barList = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  if (props.expenses.length > 0) {
    for (const item of props.expenses) {
      barList[item.date.getMonth()].value += parseInt(item.amount);
    }
  }

  return (
    <div className="chart">
      {barList.map((bar, index) => (
        <ChartBar
          totalYear={props.totalYear}
          totalMonth={bar.value}
          label={bar.label}
          key={index}
        />
      ))}
    </div>
  );
};

export default Chart;
