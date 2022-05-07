import React from "react";
import Chart from "react-apexcharts";

export default function DonutChart({ budget }) {
  const state = {
    options: {
      labels: [
        "Production Capital",
        "Fixed Expenses",
        "Payroll",
        "Assets",
        "Contingency",
      ],
      legend: {
        position: "bottom",
      },
    },
    series: [
      budget.budProductionCapital,
      budget.budFixedExpenses,
      budget.budPayroll,
      budget.budAssets,
      budget.budContingency,
    ],
  };
  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="420"
      />
    </div>
  );
}
