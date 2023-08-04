import Dashboard from "@/components/Dashboard";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const ChartSection = () => {
  // Example data for the charts
  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Dashboard>
      <section className="p-8 lg:p-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Bar Chart</h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2">
              <Bar data={barChartData} />
            </div>
            <div className="w-full lg:w-1/2">
              <p>Additional details about the bar chart.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Line Chart</h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2">
              <Line data={lineChartData} />
            </div>
            <div className="w-full lg:w-1/2">
              <p>Additional details about the line chart.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Pie Chart</h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2">
              <Pie data={pieChartData} />
            </div>
            <div className="w-full lg:w-1/2">
              <p>Additional details about the pie chart.</p>
            </div>
          </div>
        </div>
      </section>
    </Dashboard>
  );
};

export default ChartSection;
