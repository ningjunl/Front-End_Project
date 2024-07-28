import Navbar from "./components/NavBar";
import { useState } from "react";
import Cart from "./components/Cart";
import ExpenseList from "./expense-tracker/components/expenseList";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "Food" },
    { id: 2, description: "Dog", amount: 100, category: "Brian" },
    { id: 3, description: "Father", amount: 100, category: "Peter" },
    { id: 4, description: "Daughter", amount: 100, category: "Meg" },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
}
export default App;
