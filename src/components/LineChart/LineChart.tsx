import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    y: {
      type: 'linear',
      ticks: {
        callback: function (value) {
          // Type guard to ensure value is a number
          if (typeof value === 'number' && value % 10 === 0 && value <= 50) {
            return value;
          }
          return null; // Return null to omit this value
        },
        stepSize: 10,
      },
      min: 10, // Minimum value for the y-axis
      max: 50, // Maximum value for the y-axis
    },
  },
};

const LineChart = () => {
  const chartStyle = {
    width: '100%', // Adjust the width as needed
    height: 'auto',
    margin: '0 auto',
  };

  return (
    <div style={chartStyle}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
