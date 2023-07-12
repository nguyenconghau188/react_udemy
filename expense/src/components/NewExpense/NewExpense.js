import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onAddNewData = (dataInput) => {
    props.addExpense(dataInput);
  };

  const onToggleShowForm = () => {
    setShowForm(!showForm);
  };

  const onToggleCancelShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onAddData={onAddNewData}
        toggleShowForm={onToggleShowForm}
        toggleCancelShowForm={onToggleCancelShowForm}
        isShowForm={showForm}
      />
    </div>
  );
};

export default NewExpense;
