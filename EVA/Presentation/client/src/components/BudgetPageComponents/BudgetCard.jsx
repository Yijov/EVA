import React from "react";
import DonutChart from "./DonutChart";

export default function BudgetCard({ header, budget }) {
  return (
    <div className="buggetCard">
      <h3>{header}</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Production Capital</td>
              <td>${budget.budProductionCapital.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Fixed Expenses</td>
              <td>${budget.budFixedExpenses.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Payroll</td>
              <td>${budget.budPayroll.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Assets</td>
              <td>${budget.budAssets.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Contingency</td>
              <td>${budget.budContingency.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total Budget</td>
              <td>${budget.totalBudget.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      <DonutChart budget={budget} />
    </div>
  );
}
