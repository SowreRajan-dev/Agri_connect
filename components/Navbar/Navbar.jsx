import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
const Navbar = () => {
  const selectedRoute = useState("Home");
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
            <div className="underline  decoration-[#20E58F] decoration-[0.25rem] motion-safe:transition-all motion-safe:duration-200 hover:decoration-[0.25rem] focus:decoration-[0.5rem] hover:decoration-green-500/50 focus:decoration-green-500/50">
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/products">Products</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-end">
            <Image
              src="/images/Icons/Arrow_icon.png"
              alt="arrow-icon"
              width={30}
              height={30}
            />
            <p className="ml-2 font-dnsansItal  text-[26px]">Sign Up</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
