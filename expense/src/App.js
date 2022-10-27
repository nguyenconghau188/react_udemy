import Expenses from "./components/Expenses";

function App() {
  const expense = [
    { title: "Iphone 12", amount: "699", date: new Date("2022-03-25") },
    { title: "Car Insurance", amount: "299", date: new Date("2022-05-25") },
    { title: "Macbook pro", amount: "1699", date: new Date("2022-08-25") },
    { title: "Travelling", amount: "899", date: new Date("2022-09-25") },
    { title: "Iphone 13", amount: "799", date: new Date("2022-10-25") },
  ];

  return (
    <div>
      <h2>Let's get start!</h2>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
