import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { runFireworks } from "../lib/utils";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetCart } from "../redux/cartSlice";

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  // const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user)?.user;

  useEffect(() => {
    dispatch(resetCart(cart));
    setTimeout(() => {
      router.push("/orders");
    }, 10000);
    runFireworks();
  }, [cart, dispatch, router]);
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[80%] h-[50%] bg-[#DCDCDC] rounded-lg">
        <p className="text-green-600 text-[40px]">
          <BsBagCheckFill />
        </p>
        <h2 className="capitalize mt-[15px] font-[900] text-[40px] text-[#324d67]">
          Thank you for your order!
        </h2>
        <p className="text-[16px] text-center font-[600]">
          Check your email inbox for the receipt.
        </p>
        <p className="text-[16px] font-[600] text-center m-[10px] mt-[30px]">
          If you have any questions, please email
          <a className="ml-5 text-[#f02d34]" href="mailto:order@example.com">
            order@agriconnect.com
          </a>
        </p>

        <Link href="/products" passHref>
          <button
            type="button"
            width="300px"
            className="w-[60%] py-[10px] px-[12px] rounded-3xl uppercase border-none text-[20px] mt-[40px] cursor-pointer bg-[#21E591] hover:scale-105 transition duration-150 ease-out hover:ease-in"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Success;
