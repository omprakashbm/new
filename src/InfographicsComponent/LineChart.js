import React from "react";

import { Doughnut } from "react-chartjs-2";

const LineChart = (props) => {
  const { sum1, sum2, sum3, sum4, sum5 } = props;

  return (
    <div style={{ marginTop: "20px" }}>
      <h5 style={{ color: "hsl(205, 80%, 40%)" }}>
        Graphical representation of aggrigate data
      </h5>
      <Doughnut
        data={{
          labels: [
            "Oxygen Concentrator",
            "Ventilator",
            "Oxygen Cylinder",
            "Dialyzer",
            "Other Equipment",
          ],
          datasets: [
            {
              data: [sum1, sum2, sum3, sum4, sum5],
              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
