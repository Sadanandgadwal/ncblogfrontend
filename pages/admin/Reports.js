import React from "react";
import Chart from "chart.js/auto";
import Dashboard from "@/components/Dashboard";
export default function Reports() {
  const chart1Ref = React.useRef(null);
  const chart2Ref = React.useRef(null);
  const chart3Ref = React.useRef(null);

  React.useEffect(() => {
    // Create Chart 1
    const chart1Ctx = chart1Ref.current.getContext("2d");
    new Chart(chart1Ctx, {
      type: "bar",
      data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Chart 1",
            data: [10, 20, 30, 40, 50],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Create Chart 2
    const chart2Ctx = chart2Ref.current.getContext("2d");
    new Chart(chart2Ctx, {
      type: "line",
      data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Chart 2",
            data: [50, 40, 30, 20, 10],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Create Chart 3
    const chart3Ctx = chart3Ref.current.getContext("2d");
    new Chart(chart3Ctx, {
      type: "doughnut",
      data: {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            label: "Chart 3",
            data: [60, 25, 15],
            backgroundColor: [
              "rgba(255, 205, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 205, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return (
    <Dashboard>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <canvas ref={chart1Ref} />
        </div>
        <div className="flex-1">
          <canvas ref={chart2Ref} />
        </div>
        <div className="flex-1">
          <canvas ref={chart3Ref} />
        </div>
      </section>
    </Dashboard>
  );
}
