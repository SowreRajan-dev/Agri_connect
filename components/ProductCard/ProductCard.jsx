import React from "react";
import Image from "next/image";
import ReactStars from "react-stars";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({
  pids,
  productName,
  product,
  imageUrl,
  location,
  price,
  weight,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const onAddProducts = async () => {
    dispatch(addToCart(product));
    toast.success("Added product successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    if (!user.id && product) return;
  };
  return (
    <div
      className="w-[300px] h-[340px]  border-[#ac7d87] rounded-xl sm_max:mb-[50px]"
      key={pids}
    >
      <div>
        <Image
          src={imageUrl}
          alt={productName}
          className="rounded-sm rounded-t-xl"
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between  p-2 font-roboto ">
        <div className="flex flex-col  ">
          <Link href={`/product/${pids}`} passHref>
            <h3 className="font-extrabold text-lg">{productName}</h3>
          </Link>
          <span className="flex">
            <p className="text-lg font-light">Location :</p>{" "}
            <p className="ml-5">{location} km Apart</p>
          </span>
          <div className="flex items-center ">
            <ReactStars count={5} size={35} color2={"#ffd700"} />{" "}
            <p className="ml-5 text-sm font-medium">2 reviews</p>
          </div>
          <div>
            <button
              className="flex border-2 rounded-[12px] bg-[#20E58F] hover:bg-[#229764]  border-transparent focus:border-transparent focus:ring-0  text-white   items-center p-2"
              onClick={onAddProducts}
            >
              <Image
                src="/Images/Icons/shopping-cart.png"
                width="20px"
                height="20px"
                alt="shopping cart"
              />
              <p className="ml-3 font-normal">Add to cart</p>
            </button>
          </div>
        </div>
        <div className="text-sm font-semibold sm_max:text-x">
          <h3>
            ₹ {price}
            {weight}
          </h3>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default ProductCard;
