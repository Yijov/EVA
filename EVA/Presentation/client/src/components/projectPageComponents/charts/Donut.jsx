import React from "react";

import Chart from "react-apexcharts";

export default function Donut({ expensesAmount, payrollAmount }) {
  const state = {
    options: {
      labels: ["Payroll", "Fixed Expenses"],
      legend: {
        position: "top",
      },
    },
    series: [payrollAmount, expensesAmount],
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="350"
      />
    </div>
  );
}
