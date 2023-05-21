import React from "react";
import AdminProductComponent from "../../../components/AdminProductsComponent/AdminProductComponent";
import DashBoardNavBar from "../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../components/DashBoardSidebar/DashBoardSidebar";

function AdminProduct() {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <DashBoardNavBar />
        <div className="flex">
          <div className="w-full h-full">
            <DashBoardSidebar>
              <AdminProductComponent />
            </DashBoardSidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
