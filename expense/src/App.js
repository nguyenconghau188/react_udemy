import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { title: "Iphone 12", amount: "699", date: new Date("2022-03-25") },
    { title: "Car Insurance", amount: "299", date: new Date("2022-05-25") },
    { title: "Macbook pro", amount: "1699", date: new Date("2022-08-25") },
    { title: "Travelling", amount: "899", date: new Date("2022-09-25") },
    { title: "Iphone 13", amount: "799", date: new Date("2022-10-25") },
  ]);

  const handleAddExpense = (data) => {
    setExpenses([data, ...expenses]);
  };

  return (
    <div>
      <NewExpense addExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
