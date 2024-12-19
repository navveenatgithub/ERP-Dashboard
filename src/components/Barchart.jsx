// src/components/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // important for Chart.js v3

const BarChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 10, 4, 7, 8, 2, 17],
        backgroundColor: '#5970F5',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-lg h-full w-full" >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
