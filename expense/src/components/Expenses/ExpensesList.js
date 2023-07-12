import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );
  if (props.expenses.length) {
    expenseContent = props.expenses.map((item, index) => {
      return (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={index}
        />
      );
    });
  }

  return <ul className="expenses-list"> {expenseContent}</ul>;
};

export default ExpensesList;
