import Image from "next/image";
import React from "react";

function AdminProductCard({ productName, productImg }) {
  return (
    <div className="p-10 cursor-pointer hover:scale-105 duration-100">
      {" "}
      <div className="w-80 bg-white border items-center border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-gray-700">
        <div className="w-80 h-[250px]">
          <img
            className="rounded-lg w-full h-full p-2"
            src={productImg}
            alt="product-image"
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            These Products are Directly from Farm. To Home
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#20E58F] rounded-lg hover:bg-[#20E58F]/80  focus:outline-none"
          >
            Sales Report{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminProductCard;
