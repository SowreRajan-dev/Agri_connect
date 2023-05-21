import React from "react";
import DashBoardNavBar from "../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../components/DashBoardSidebar/DashBoardSidebar";
import ProfileComponent from "../../../components/Profile/ProfileComponent.";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Profile() {
  const admin = useSelector((state) => state.admin)?.admin;
  const [productsSold, setProductsSold] = useState([]);

  const getProductsAndFilterNames = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/admin/products/${admin.id}`
    );
    const names = res.data.map((product) => product.name);
    const productSoldNames = Array.from(new Set(names));
    setProductsSold(productSoldNames);
  };

  useEffect(() => {
    getProductsAndFilterNames();
  }, []);
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <DashBoardNavBar />
        <div className="flex">
          <div className="w-full h-full">
            <DashBoardSidebar>
              <ProfileComponent admin={admin} productsSold={productsSold} />
            </DashBoardSidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
