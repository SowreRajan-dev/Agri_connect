import React from "react";
import DashBoardNavBar from "../../../components/DashBoardNavBar/DashBoardNavBar";
import DashBoardSidebar from "../../../components/DashBoardSidebar/DashBoardSidebar";
import ProfileComponent from "../../../components/Profile/ProfileComponent.";

function Profile() {
  return (
    <div>
      {" "}
      <div className="w-full h-full">
        <DashBoardNavBar />
        <div className="flex">
          <div className="w-full h-full">
            <DashBoardSidebar>
              <ProfileComponent />
            </DashBoardSidebar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
