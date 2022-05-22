import React from "react";
import Image from "next/image";
import ReactStars from "react-stars";

function ProductCard({ product, imageUrl, location, weight }) {
  return (
    <div className="w-[300px] h-[340px]  border-[#ac7d87] rounded-xl ">
      <div>
        <Image
          src={imageUrl}
          alt={product}
          className="rounded-sm rounded-t-xl"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between  p-2 font-roboto ">
        <div className="flex flex-col  ">
          <h3 className="font-extrabold text-lg">{product}</h3>
          <span className="flex">
            <p className="text-lg font-light">Location :</p>{" "}
            <p className="ml-5">1.5km Apart</p>
          </span>
          <div className="flex items-center">
            <ReactStars count={5} size={35} color2={"#ffd700"} />{" "}
            <p className="ml-5 text-sm font-medium">2 reviews</p>
          </div>
          <div>
            <button className="flex border-2 border-[#ac7d87]  hover:bg-[hsl(347,89%,81%)] rounded-sm items-center p-1">
              <Image
                src="/Images/Icons/shoppingCart.png"
                width="20px"
                height="20px"
                alt="shopping cart"
              />
              <p className="ml-3 font-semibold">Add to cart</p>
            </button>
          </div>
        </div>
        <div className="text-lg font-semibold">
          <h3>{weight}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
