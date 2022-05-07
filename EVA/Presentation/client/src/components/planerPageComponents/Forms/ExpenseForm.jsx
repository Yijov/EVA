import React, { useState } from "react";
import { Expense } from "../../../clases/ExpenseClass";

export default function ExpenseForm({
  updateExpenseList,
  Toggle,
  defaultState,
}) {
  const [expense, setExpense] = useState(defaultState);
  const hadleChange = (e) => {
    const newValue = { [e.target.name]: e.target.value };
    setExpense((prevState) => ({ ...prevState, ...newValue }));
  };
  const hadleUpdateExpenseList = (e) => {
    e.preventDefault();
    let newExpense = new Expense(
      expense.name,
      expense.amount,
      expense.type,
      expense.id
    );
    updateExpenseList(newExpense);
    //update de default values of the form in case is an update
    if (expense.id) {
      defaultState = newExpense;
    }
    setExpense(defaultState);
    Toggle();
  };
  return (
    <div>
      <form onSubmit={hadleUpdateExpenseList}>
        <div className="formImput">
          <label htmlFor="name">Expense</label>
          <input
            value={expense.name}
            onChange={hadleChange}
            type="text"
            name="name"
            placeholder="Expense name"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="amount">Amount</label>
          <input
            value={expense.amount}
            onChange={hadleChange}
            type="number"
            name="amount"
            placeholder="Monthly amount"
            required
          ></input>
        </div>
        <br />
        <div className="formImput">
          <label htmlFor="type">Expense type</label>
          <select
            name="type"
            onChange={hadleChange}
            value={expense.type}
            required
          >
            <option value="undef">select</option>
            <option value="service">service</option>
            <option value="operations">Operations</option>
            <option value="marketing">Marketing/Advertizing</option>
            <option value="maintenance">Maintenance</option>
            <option value="materials">Materials</option>
          </select>
        </div>
        <br />
        <div className="formImput">
          <button>DONE</button>
        </div>
      </form>
    </div>
  );
}
