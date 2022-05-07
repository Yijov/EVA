import React, { useEffect, useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";
import FormsModal from "./FormsModal";
import UpdateModal from "./UpdateModal";
import ExpenseForm from "./Forms/ExpenseForm";

export default function ExpenseList() {
  const { currentProjectExpenses, setCurrentProjectExpenses } = useContext(
    CurrentProjectContext
  );

  const addExpense = (expense) => {
    let newExpenses = JSON.parse(
      localStorage.getItem("currentProjectExpenses")
    );
    newExpenses.push(expense);
    localStorage.setItem("currentProjectExpenses", JSON.stringify(newExpenses));
    setCurrentProjectExpenses(
      JSON.parse(localStorage.getItem("currentProjectExpenses"))
    );
  };

  const UpdateExpense = (expense) => {
    let newExpenses = JSON.parse(
      localStorage.getItem("currentProjectExpenses")
    );
    newExpenses = newExpenses.filter((exp) => exp.id !== expense.id);
    newExpenses.push(expense);
    localStorage.setItem("currentProjectExpenses", JSON.stringify(newExpenses));
    setCurrentProjectExpenses(
      JSON.parse(localStorage.getItem("currentProjectExpenses"))
    );
  };

  const deleteExpense = (expense) => {
    if (window.confirm("¿Are you shure you want to delete this item?")) {
      let newExpenses = JSON.parse(
        localStorage.getItem("currentProjectExpenses")
      );
      newExpenses = newExpenses.filter((exp) => exp.id !== expense.id);
      localStorage.setItem(
        "currentProjectExpenses",
        JSON.stringify(newExpenses)
      );
      setCurrentProjectExpenses(
        JSON.parse(localStorage.getItem("currentProjectExpenses"))
      );
      window.alert("Item Deleted");
    }
  };

  useEffect(() => {
    setCurrentProjectExpenses(
      JSON.parse(localStorage.getItem("currentProjectExpenses"))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"FormList"}>
      <br />

      <FormsModal>
        <ExpenseForm
          updateExpenseList={addExpense}
          defaultState={{
            name: "",
            amount: "",
            type: "undef",
          }}
        />
      </FormsModal>
      <br />
      <h2>Expenses</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {currentProjectExpenses.map((expense) => (
            <UpdateModal
              item={expense}
              key={expense.id}
              deleteAction={deleteExpense}
              row={<ExpenseRow expense={expense} />}
            >
              <ExpenseForm
                updateExpenseList={UpdateExpense}
                defaultState={expense}
              />
            </UpdateModal>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExpenseRow({ expense }) {
  return (
    <>
      <td>{expense.name}</td>
      <td>$ {expense.amount}</td>
      <td>{expense.type}</td>
    </>
  );
}
