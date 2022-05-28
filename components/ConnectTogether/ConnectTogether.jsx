import React from "react";
import Image from "next/image";

const ConnectTogether = () => {
  return (
    <>
      <div className="w-full h-[760px]  flex items-center justify-around bg-[#F4F8F6] p-6">
        <div className="w-full h-full  flex flex-col justify-center items-center">
          <div className="mb-20">
            <Image
              src="/Images/Slogans/Slogan_1.png"
              alt="slogan"
              width="420px"
              height="228px"
            />
          </div>
          <div className="flex flex-col items-start mr-28 font-[400] font-poppins text-md text-[#494242] sm:text-xl">
            <p>Connecting End to End agriculture</p>
            <p>Solutions to help the world thrive</p>
          </div>
          <div className="">
            <button className="w-[160px] h-[60px] mr-32 mt-10 rounded-full font-poppins font-bold text-white bg-[#20E58F] hover:bg-[#229764]">
              {" "}
              View
            </button>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center ">
          <Image
            src="/Images/Agri_leaf.png"
            alt="leaf"
            width={720}
            height={575}
          />
          <div className="absolute bottom-5 right-10 cursor-pointer">
            <Image
              src="/Images/Icons/DownArrow_icon.png"
              alt="dowm-arrow"
              width={20}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectTogether;
