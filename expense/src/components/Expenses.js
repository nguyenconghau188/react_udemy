import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <div className="expenses ">
      {expenses.map((item, index) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Expenses;
