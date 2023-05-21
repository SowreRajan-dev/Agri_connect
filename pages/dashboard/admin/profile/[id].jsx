import React from "react";
import DashBoardNavBar from "../../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../../components/DashBoardSidebar/DashBoardSidebar";
import Dashboard from "../../../../components/Dashboard/Dashboard";
import { useRouter } from "next/router";

function DashBoard() {
  const router = useRouter();

  return (
    <div>
      <DashBoardNavBar />
      <div className="flex">
        <div className="">
          <DashBoardSidebar>
            <Dashboard />{" "}
          </DashBoardSidebar>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
