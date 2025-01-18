// components/BarChart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: number[];
    labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Values',
                data,
                backgroundColor: 'bg-green-500', // Tailwind color classes
                borderColor: 'border-green-600',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    color: '#fff', // Customize legend color
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff', // X-axis label color
                },
                grid: {
                    color: '#fff', // Grid color for x-axis
                },
            },
            y: {
                ticks: {
                    color: '#fff', // Y-axis label color
                },
                grid: {
                    color: '#fff', // Grid color for y-axis
                },
            },
        },
    };

    return (
        <div className="w-full h-64 md:h-96 p-4 bg-gray-800 rounded-lg shadow-lg">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
