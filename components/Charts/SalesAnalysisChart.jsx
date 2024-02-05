import React from "react";
import { Line } from "react-chartjs-2";

function SalesAnalysisChart({ salesData }) {
  function groupSalesByMonth(data) {
    const monthlySales = {};
    data.forEach((purchase) => {
      const date = new Date(purchase.purchasedAt);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;
      if (!monthlySales[key]) {
        monthlySales[key] = 0;
      }
      monthlySales[key] += purchase.totalCost;
    });
    return monthlySales;
  }
  const monthlysales = groupSalesByMonth(salesData);
  const labels = Object.keys(monthlysales);
  const totalSales = Object.values(monthlysales);
  function getMonthName(dateString) {
    const [year, month] = dateString.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex]}, ${year}`;
  }
  function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`;
      colors.push(color);
    }
    return colors;
  }

  const borderColor = generateRandomColors(totalSales.length);
  const monthLabels = labels.map((label) => getMonthName(label));

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Monthly Sales",
        data: totalSales,
        fill: false,
        borderColor: borderColor,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="w-[40%] h-[250px] mr-10 rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10 p-5">
      <p className="font-dmsans">Sales Analysis</p>
      <Line data={data} />
    </div>
  );
}

export default SalesAnalysisChart;
