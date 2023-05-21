import React from "react";
import AddProductAdmin from "../../components/AddProductAdmin/AddProductAdmin";
import DashBoardNavBar from "../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../components/DashBoardSidebar/DashBoardSidebar";

function AddProduct() {
  return (
    <div>
      <DashBoardNavBar />
      <div className="flex">
        <div className="w-full">
          <DashBoardSidebar>
            <AddProductAdmin />{" "}
          </DashBoardSidebar>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
