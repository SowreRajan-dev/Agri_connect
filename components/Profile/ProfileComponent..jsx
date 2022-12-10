import Image from "next/image";
import React from "react";

function ProfileComponent() {
  return (
    <div className="w-[100%] h-full p-10  ">
      <div className="flex flex-col">
        <p className="text-[30px] font-poppins text-center">My Profile</p>
        <div>
          <div className="w-[500px] mt-10 flex items-center justify-around">
            <Image
              src="https://images.unsplash.com/photo-1670438664300-d6d70b3fbf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              width={150}
              height={150}
              alt="profile-img"
              className="rounded-full "
            />
            <div>
              <p className="text-[30px] font-poppins">VINISH S</p>
              <p className="text-[16px] font-poppins font-extralight">
                vinish@admin.agriconnect.com
              </p>
              <p className="text-[16px] font-poppins font-extralight">#914</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-poppins">Sale Products</p>
            <div className="p-10 border border-[#C9C9C9] shadow-md">
              <p className="text-[16px] font-poppins font-extralight">
                <b className="font-bold">Products : </b> CARROT, BANNANA FRENCH
                BEANS, CABBAGE
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-poppins">Reviews</p>
            <div className="p-10 border border-[#C9C9C9] shadow-md">
              <p className="text-[16px] font-poppins font-extralight">
                <b className="font-bold">AVG Review : </b> 4.5/5
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-poppins">Income</p>
            <div className="p-10 border border-[#C9C9C9] shadow-md">
              <p className="text-[16px] font-poppins font-extralight">
                <b className="font-bold">Income Generated : </b> 4.5/5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;