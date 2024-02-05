import React from "react";
import { Doughnut } from "react-chartjs-2";

function MonthlySalesChart({ salesData }) {
  const monthlySales = salesData.reduce((monthlySales, purchase) => {
    const purchaseDate = new Date(purchase.purchasedAt);
    const month = purchaseDate.toLocaleString("default", { month: "long" });

    if (!monthlySales[month]) {
      monthlySales[month] = 0;
    }

    monthlySales[month] += purchase.totalCost;

    return monthlySales;
  }, {});
  const months = Object.keys(monthlySales);
  const salesAmounts = Object.values(monthlySales);
  const randomColors = months.map(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  });

  const data = {
    labels: months,
    datasets: [
      {
        data: salesAmounts,
        backgroundColor: randomColors,
      },
    ],
  };

  return (
    <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
      <p className="font-dmsans ">Monthly Sales</p>
      <Doughnut data={data} />
    </div>
  );
}

export default MonthlySalesChart;
