import React from "react";
import DashBoardNavBar from "../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../components/DashBoardSidebar/DashBoardSidebar";
import ReviewComponent from "../../../components/ReviewsComponent/ReviewComponent";

function Reviews() {
  return (
    <div>
      <DashBoardNavBar />
      <div className="flex">
        <div className="w-full">
          <DashBoardSidebar>
            <ReviewComponent />
          </DashBoardSidebar>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
