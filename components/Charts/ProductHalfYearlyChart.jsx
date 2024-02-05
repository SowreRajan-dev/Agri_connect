import React from "react";
import { Bar } from "react-chartjs-2";

function ProductHalfYearlyChart({ salesData }) {
  const productSalesByMonth = salesData.reduce((monthlySales, purchase) => {
    const purchaseDate = new Date(purchase.purchasedAt);
    const month = purchaseDate.getMonth() + 1; // Months are 0-indexed
    const productName = purchase.productsBrought[0].name; // Assuming one product per purchase

    if (!monthlySales[month]) {
      monthlySales[month] = {};
    }

    if (!monthlySales[month][productName]) {
      monthlySales[month][productName] = 0;
    }

    monthlySales[month][productName] += purchase.totalCost;

    return monthlySales;
  }, {});
  const productNames = Array.from(
    new Set(
      salesData.flatMap((purchase) =>
        purchase.productsBrought.map((product) => product.name)
      )
    )
  );
  const chartData = {
    labels: Object.keys(productSalesByMonth),
    datasets: productNames.map((productName) => ({
      label: productName,
      data: Object.keys(productSalesByMonth).map(
        (month) => productSalesByMonth[month][productName] || 0
      ),
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.6)`,
    })),
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales Amount",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
      <p className="font-dmsans ">Half yearly Sales</p>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ProductHalfYearlyChart;
