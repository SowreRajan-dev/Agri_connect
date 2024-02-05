import React from "react";
import DashBoardNavBar from "../DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../DashBoardSidebar/DashBoardSidebar";

function AdminLayout({ children }) {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <DashBoardNavBar />
        <div className="flex">
          <div className="w-full h-full">
            <DashBoardSidebar>{children}</DashBoardSidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
