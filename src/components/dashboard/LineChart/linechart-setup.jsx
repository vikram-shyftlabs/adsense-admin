import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const LineChartSetUp = () => {
  const chartRef = useRef(null);
  const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "",
        },
      },
    },
  };

  useEffect(() => {
    const myChart = new Chart(chartRef.current, config);
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div style={{display: "flex", height: "430px", width: "96%", justifyContent: "space-around"}}>
        <canvas width={1} ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default LineChartSetUp;
