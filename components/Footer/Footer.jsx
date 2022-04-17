import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#D6F2E6] w-full h-[400px] relative p-5">
      <div className="absolute bottom-0 ">
        <Image
          src="/Images/LeafLeft.png"
          width="100px"
          height="270px"
          alt="leaf-left"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/Images/LeafRight.png"
          width="140px"
          height="360px"
          alt="leaf-left"
        />
      </div>
      <div>
        <div className="flex items-center justify-evenly font-bold font-montserrat">
          <div>About us</div>
          <div>Clients</div>
          <div>Contact</div>
          <div>Terms of use</div>
          <div>FAQ</div>
          <div>Privacy Policy</div>
        </div>
        <div className="flex items-center justify-center mt-20 cursor-pointer ">
          <Image
            src="/Images/Logo/Instagram.png"
            width="60px"
            height="60px"
            alt="insta-logo"
            className="hover:scale-105"
          />
          <Image
            src="/Images/Logo/Facebook.png"
            width="60px"
            height="60px"
            alt="fb-logo"
            className="hover:scale-105"
          />
          <Image
            src="/Images/Logo/Whatsapp.png"
            width="60px"
            height="60px"
            className="hover:scale-105"
            alt="insta-logo"
          />
        </div>
        <h3 className="text-center font-bold font-poppins text-[25px] mt-5">
          <q>Customers Service is about empathy</q>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
