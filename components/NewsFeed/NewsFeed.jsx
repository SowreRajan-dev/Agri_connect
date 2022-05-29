import React from "react";
import Image from "next/image";

const NewsFeed = () => {
  return (
    <div className="mt-20 p-10 flex flex-col">
      <div className="font-poppins text-[#696969] text-[20px] ">
        <Image
          src="/Images/StayInLoop.png"
          alt="stay-in-loop"
          width="532px"
          height="90px"
        />
        <p className="mt-5">Subscribe to recieve news and</p>
        <p>Updates</p>
      </div>
      <div className="flex items-center justify-center mt-10  ">
        <div className="flex items-center border-2 border-[#000] w-1/2 h-[60px] text-center p-4 font-poppins rounded-md sm_max:w-[100%]">
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-full h-full  focus:outline-none"
          />
          <button className="w-[55px] h-[50px] bg-[#20E58F] hover:bg-[#229764] rounded-full">
            <div className="">
              <Image
                src="/Images/Icons/RightArrow.png"
                alt="right-arrow"
                width="30px"
                height="13px"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
