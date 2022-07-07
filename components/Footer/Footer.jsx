import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#D6F2E6] w-full h-[400px] relative p-5 sm_max:-z-10">
      <div className="w-[100px] h-[270px] absolute bottom-0 sm_max:w-[90px] sm_max:h-[250px] sm_max:-left-1 sm_max:-z-[1]">
        <Image src="/Images/LeafLeft.png" layout="fill" alt="leaf-left" />
      </div>
      <div className="w-[140px] h-[350px] absolute bottom-0 right-0 sm_max:w-[120px] sm_max:h-[300px] sm_max:-z-[1]">
        <Image src="/Images/LeafRight.png" layout="fill" alt="leaf-left" />
      </div>
      <div>
        <div className="flex items-center justify-evenly font-bold font-montserrat sm_max:flex-col">
          <div>About us</div>
          <div>Clients</div>
          <div>Contact</div>
          <div>Terms of use</div>
          <div>FAQ</div>
          <div>Privacy Policy</div>
        </div>
        <div className="flex items-center justify-center mt-20  ">
          <Image
            src="/Images/Logo/Instagram.png"
            width="60px"
            height="60px"
            alt="insta-logo"
            className="hover:scale-105 cursor-pointer"
          />
          <Image
            src="/Images/Logo/Facebook.png"
            width="60px"
            height="60px"
            alt="fb-logo"
            className="hover:scale-105 cursor-pointer"
          />
          <Image
            src="/Images/Logo/Whatsapp.png"
            width="60px"
            height="60px"
            className="hover:scale-105 cursor-pointer"
            alt="insta-logo"
          />
        </div>
        <h3 className="text-center font-bold font-poppins text-[25px] mt-5 sm_max:text-[1rem] ">
          <q>Customers Service is about empathy</q>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
