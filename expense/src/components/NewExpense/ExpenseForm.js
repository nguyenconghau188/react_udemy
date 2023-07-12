import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onAddData(data);
    setTitle("");
    setAmount("");
    setDate("");
  };

  let content = (
    <div className="new-expense__controls">
      <div className="btn-form-expense__actions">
        <button onClick={props.toggleShowForm}>Add New Expense</button>
      </div>
    </div>
  );

  if (props.isShowForm) {
    content = (
      <form onSubmit={onSubmitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={onChangeAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.toggleCancelShowForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return content;
};

export default ExpenseForm;
