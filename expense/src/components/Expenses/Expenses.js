import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
  const [yearSelect, setYearSelect] = useState(2022);

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == yearSelect;
  });

  const handleChangeSelectYear = (year) => {
    setYearSelect(year);
  };

  let totalYear = expenses.reduce((totalYear, expense) => {
    return totalYear + parseInt(expense.amount);
  }, 0);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeSelectYear={handleChangeSelectYear} />
      <Chart totalYear={totalYear} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
