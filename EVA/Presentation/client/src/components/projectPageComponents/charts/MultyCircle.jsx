import React from "react";
import Chart from "react-apexcharts";

export default function MultyCircle({ assets }) {
  let seriesArray = assets.items.map((asset) =>
    ((asset.totalCost / assets.assetsTotalAmount) * 100).toFixed(2)
  );
  let labelsArray = assets.items.map(
    (asset) => `${asset.name}  $${asset.totalCost.toFixed(2)}`
  );

  const state = {
    series: seriesArray,
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return "$" + assets.assetsTotalAmount;
              },
            },
          },
        },
      },
      labels: labelsArray,
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}
