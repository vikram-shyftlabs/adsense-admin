import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { color } from 'chart.js/helpers';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Google', 'Meta'],
      datasets: [{
        data: [30, 40],
        hoverOffset: 2,
        borderColor: ["#718096"],
        borderWidth: 1,
        backgroundColor: [
          '#ff9800',
          'rgb(54, 162, 235)',
        ],
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'right'
          },                        
        }
      }
    };

    const myChart = new Chart(chartRef.current, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">      
      <div className="w-[50%]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default PieChart;
