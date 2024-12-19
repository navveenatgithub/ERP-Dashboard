import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // important for Chart.js v3

const LineChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Trend Line 1',
        data: [12, 19, 3, 5, 2, 3, 10, 4, 7, 8, 2, 17],
        borderColor: '#5970F5', // Blue color for the line
        backgroundColor: 'rgba(89, 112, 245, 0.2)', // Light blue fill color
        tension: 0.4, // Smooth curves
      },
      {
        label: 'Trend Line 2',
        data: [5, 10, 15, 8, 12, 9, 14, 7, 10, 11, 13, 16],
        borderColor: '#F57F5F', // Red color for the line
        backgroundColor: 'rgba(245, 127, 95, 0.2)', // Light red fill color
        tension: 0.4, // Smooth curves
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
    <div className="flex justify-center items-center bg-white rounded-lg h-auto w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
