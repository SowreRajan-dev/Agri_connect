import axios from "axios";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function ProfileComponent({ admin, productsSold }) {
  const { isLoggedIn } = useSelector((state) => state.admin);
  const [adminAnalytics, setAdminAnalytics] = useState(null);

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
  console.log(adminAnalytics);
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
              <p className="text-[30px] font-poppins">{admin.user_name}</p>
              <p className="text-[16px] font-poppins font-normal">
                {admin.email}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-poppins">Sale Products</p>
            <div className="p-10 border border-[#C9C9C9] shadow-md">
              <div className=" flex">
                <b className="font-bold ">Products : </b>
                {productsSold.length > 0 ? (
                  productsSold?.map((name, index) => (
                    <div key={index}>
                      <p key={index} className="text-[16px] font-poppins  ml-2">
                        {name} {index < productsSold?.length - 1 ? ", " : "."}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="ml-2 font-roboto">No Products Yet!</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-poppins">Reviews</p>
            <div className="p-10 border border-[#C9C9C9] shadow-md">
              <p className="text-[16px] font-poppins font-light">
                <b className="font-bold">AVG Review : </b> 4.5/5
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[30px]  font-poppins">Income</p>
            <div className="p-10 border border-[#C9C9C9]  shadow-md">
              <p className="text-[16px] font-poppins font-light">
                <b className="font-bold">Income Generated : </b>{" "}
                {adminAnalytics
                  ? `₹${adminAnalytics.totalSalesAmount._sum.totalCost}`
                  : "₹0"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
