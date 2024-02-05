import React, { useEffect, useState } from "react";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import { useSelector } from "react-redux";
import SalesAnalysisChart from "../Charts/SalesAnalysisChart";
import SalesPieChart from "../Charts/SalesPieChart";
import ProductHalfYearlyChart from "../Charts/ProductHalfYearlyChart";
import MonthlySalesChart from "../Charts/MonthlySalesChart";

Chart.register(...registerables);
function Dashboard() {
  const [purchasedOrder, setPurchasedOrder] = useState([]);
  const [adminAnalytics, setAdminAnalytics] = useState(null);

  const { isLoggedIn, admin } = useSelector((state) => state.admin);

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get(`http://localhost:3000/api/admin/purchase?adminId=${admin.id}`)
        .then((response) => {
          const { data } = response;
          setPurchasedOrder(data.purchaseHistory);
        });
    }
  }, [admin.id, isLoggedIn]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/admin/purchase/analysis?adminId=${admin.id}`
      )
      .then((response) => {
        const { data } = response;
        setAdminAnalytics(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {" "}
      <div className="w-full h-full p-5 flex flex-wrap justify-around ">
        <div className="w-full f-full flex flex-wrap items-center justify-around">
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Sales Amount
            </p>

            <p className="font-dmsans text-[#00922B]">
              {adminAnalytics
                ? `₹${adminAnalytics.totalSalesAmount._sum.totalCost}`
                : "₹0"}
            </p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total orders{" "}
            </p>
            <p className="font-dmsans ">
              {adminAnalytics ? `${adminAnalytics.totalOrders}` : "0"}
            </p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Products
            </p>
            <p className="font-dmsans ">
              {adminAnalytics ? `${adminAnalytics.totalProducts._all}` : "0"}
            </p>
          </div>
          <div className="w-[250px] h-[100px] rounded-md border border-[#C9C9C9] shadow-md flex flex-col items-center justify-center mb-10">
            <p className="font-dmsans text-[#5A5A5A] font-[400]">
              Total Users Brought{" "}
            </p>
            <p className="font-dmsans ">
              {adminAnalytics ? `${adminAnalytics.usersCount.userId}` : "0"}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-around w-full h-full ">
            <SalesAnalysisChart salesData={purchasedOrder} />
            <SalesPieChart purchaseHistory={purchasedOrder} />
            <ProductHalfYearlyChart salesData={purchasedOrder} />
            <MonthlySalesChart salesData={purchasedOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
// function getServerSideProps() { }
