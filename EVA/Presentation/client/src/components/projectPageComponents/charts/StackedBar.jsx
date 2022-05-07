import React from "react";
import Chart from "react-apexcharts";

export default function StackedBar({
  sales,
  fixedExpenses,
  salesCost,
  totalTax,
  netIncome,
}) {
  const state = {
    series: [
      {
        name: "Sales",
        data: [sales, 0],
      },
      {
        name: "Taxes",
        data: [0, totalTax],
      },
      {
        name: "Fixed Cost",
        data: [0, fixedExpenses],
      },
      {
        name: "Sales Cost",
        data: [0, salesCost],
      },
      {
        name: "Net Income",
        data: [0, 0, netIncome],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 3,
        colors: ["#fff"],
      },

      xaxis: {
        categories: ["Income", "Expense", "Net Income"],
        labels: {
          formatter: function (val) {
            return null;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$RD" + val;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 50,
      },
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
        height="200"
      />
    </div>
  );
}
