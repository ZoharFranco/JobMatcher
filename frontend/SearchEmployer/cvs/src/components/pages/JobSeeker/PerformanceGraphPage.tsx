import React from "react";
import {Bar} from "react-chartjs-2";
import '../../../styels/ChartComponent.css'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
};

type dataSet = {
    label: string,
    data: number[]
    backgroundColor: string
}

type data = {
    labels: string[],
    datasets: dataSet[]
    name: string
}
type Props = { datasets: data[] };

const PerformanceGraphPage: React.FC<Props> = ({datasets}) => {
    return (
        <div className="graph-page">
            {datasets.map((dataset) => (
                <div>
                    <h2>{dataset.name}</h2>
                    <Bar data={dataset} options={options}/>
                </div>
            ))}
        </div>
    );
};

export default PerformanceGraphPage;


