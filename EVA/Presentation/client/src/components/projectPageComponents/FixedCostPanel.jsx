import React, { useContext } from "react";
import { CurrentProjectContext } from "../../context/CurrentProjectContext";

import Donut from "./charts/Donut";

export default function FixedCostPanel() {
  const { currentProjecBody } = useContext(CurrentProjectContext);
  const { expenses, payroll } = currentProjecBody;
  return (
    <div className="dataBox fixedCostPanel">
      <h2>MONTHLY FIXED COST</h2>
      {expenses && (
        <Donut
          expensesAmount={expenses.monthlyExpense}
          payrollAmount={payroll.monthlyPayroll}
        />
      )}
      {expenses && (
        <p> Total: {expenses.monthlyExpense + payroll.monthlyPayroll} </p>
      )}
    </div>
  );
}
