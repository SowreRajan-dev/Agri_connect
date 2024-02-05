import React from "react";
import { Pie } from "react-chartjs-2";

function SalesPieChart({ purchaseHistory }) {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 1);

  const productSalesData = purchaseHistory
    .filter((purchase) => new Date(purchase.purchasedAt) > currentDate)
    .reduce((productSales, purchase) => {
      purchase.productsBrought.forEach((product) => {
        const productId = product.id;
        if (!productSales[productId]) {
          productSales[productId] = {
            name: product.name,
            quantity: 0,
          };
        }
        productSales[productId].quantity += product.quantity;
      });
      return productSales;
    }, {});

  const labels = Object.values(productSalesData).map((product) => product.name);
  const data = Object.values(productSalesData).map(
    (product) => product.quantity
  );

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };
  return (
    <div className="w-[40%] h-[250px] mr-10 flex flex-col items-center justify-center rounded-md border border-[#C9C9C9] shadow-md  mb-10 p-5">
      <p className="font-dmsans ">Quarterly Sales</p>
      <Pie data={chartData} />
    </div>
  );
}

export default SalesPieChart;
