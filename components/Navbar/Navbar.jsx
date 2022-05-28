import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex flex-row items-center flex-wrap p-3  ">
        <div className="flex-1">
          <Link href="/" passHref>
            <Image
              src="/Images/Logo/Agriconnect_logo.png"
              className="cursor-pointer"
              alt="logo"
              width={220}
              height={120}
            />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between font-dnsansItal text-[20px]">
            <div className={`${router.pathname === "/" ? "active" : ""} `}>
              <Link href="/">Home</Link>
            </div>
            <div
              className={`${router.pathname === "/products" ? "active" : ""}`}
            >
              <Link href="/products">Products</Link>
            </div>
            <div className={`${router.pathname === "/about" ? "active" : ""}`}>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-end mr-5">
            <Image
              src="/images/Icons/Arrow_icon.png"
              alt="arrow-icon"
              width={30}
              height={30}
            />
            <Link href="/signup" passHref>
              <p className="ml-2 font-dnsansItal cursor-pointer text-[20px]">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
