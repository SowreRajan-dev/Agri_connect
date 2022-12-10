import React from "react";
import ReactStars from "react-stars";
import { customerReviews } from "../../testData";
function ReviewComponent() {
  return (
    <div className="w-full h-full p-10 ">
      <div>
        <p className="font-poppins text-[30px]">Customer Reviews</p>
        {customerReviews.map((reviewer, index) => (
          <div
            className="h-[70px] flex justify-around items-center mt-10  rounded-md border border-[#C9C9C9] shadow-md"
            key={index}
          >
            <div className="flex-1 flex justify-start items-center ml-10">
              <p className="font-poppins text-[20px]">{reviewer.name} </p>
            </div>
            <div className="flex-2">
              <ReactStars count={reviewer.stars} size={35} color1={"#FFD700"} />
            </div>
            <div className=" flex-1 flex justify-end items-center mr-10">
              <p className="font-poppins text-[20px] text-center">
                {reviewer.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewComponent;
