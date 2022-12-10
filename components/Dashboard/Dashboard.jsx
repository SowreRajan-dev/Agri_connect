import React from "react";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
function Dashboard() {
  const labelsBar = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const labelsDoughBot = [
    "section 1",
    "section 2",
    "section 3",
    "section 4",
    "section 5",
    "section 6",
  ];
  const dataDoughNut = {
    labels: labelsDoughBot,
    datasets: [
      {
        label: "Doughnut chart",
        data: [65, 59, 83, 89, 76, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        hoverBorderWidth: 8,
        hoverBorderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
    ],
  };

  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "dataset",

        data: [65, 59, 83, 89, 76, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ["Peas", "Cabbage", "Lemon", "Carrot", "Tomato", "Orange"],
    datasets: [
      {
        label: "# of sales",
        data: [12, 19, 3, 5, 2, 3, 2],
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
  return (
    <div>
      {" "}
      <div className="w-full h-full p-5 flex flex-wrap justify-around ">
        <div className="w-full f-full flex flex-wrap items-center justify-around">
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Sales Amount
            </p>
            <p className="font-dmsans text-[#00922B]">₹ 1,34,204</p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total orders{" "}
            </p>
            <p className="font-dmsans ">36</p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Products
            </p>
            <p className="font-dmsans ">63</p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Users{" "}
            </p>
            <p className="font-dmsans ">11</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-around w-full h-full ">
            <div className="w-[40%] h-[250px] mr-10 rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10 p-5">
              <p className="font-dmsans">Sales Analysis</p>
              <Line
                datasetIdKey="id"
                data={{
                  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
                  datasets: [
                    {
                      id: 1,
                      label: "",
                      data: [5, 6, 7, 56, 33, 12],
                    },
                    {
                      id: 2,
                      label: "",
                      data: [3, 2, 1, 234, 55, 6],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                }}
              />
            </div>
            <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
              <p className="font-dmsans ">Quarterly Sales</p>
              <Pie data={dataPie} />
            </div>
            <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
              <p className="font-dmsans ">Half yearly Sales</p>
              <Bar data={dataBar} />
            </div>
            <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
              <p className="font-dmsans ">Monthly Sales</p>
              <Doughnut data={dataBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
