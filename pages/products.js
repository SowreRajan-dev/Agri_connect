import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Styles from "../styles/Products.module.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import ProductSearchCard from "../components/ProductSearchCard/ProductSearchCard";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../testData";

function product() {
  return (
    <>
      <Navbar />

      <div className="w-full ">
        <div className="w-[100%] h-[400px] relative flex items-center  justify-center divide-black opacity-75">
          <Image
            src="/Images/search.png"
            className="bg-cover"
            alt="searchbg"
            layout="fill"
            objectFit="contain"
          />

          <div className="absolute w-96 ">
            <div className="flex items-center justify-center mt-10  ">
              <div className="flex items-center bg-white border-2 border-[#000] w-full h-[60px] text-center p-3 font-poppins rounded-md">
                <input
                  type="text"
                  placeholder="Search the product"
                  className="w-full h-full p-5 focus:outline-none"
                />
                <button className="w-[50px] h-[45px] bg-black hover:bg-[#252424] rounded-full">
                  <div className="flex items-center justify-center">
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
        </div>
      </div>

      <div className="mx-28 my-24">
        <div className="mb-5">
          <h3 className="text-3xl font-abel ">Products Available Nearby</h3>
          <Image
            src="/Images/Icons/downCurve.png"
            alt="vector image"
            width="300px"
            height="28px"
          />
        </div>

        <div className="flex flex-wrap justify-between ">
          <div className="mb-10 cursor-pointer">
            {products.map((product) => (
              <ProductCard
                product={product.name}
                key={product.id}
                imageUrl={product.imageUrl}
                location={product.location}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="ml-24">
          <h3 className="text-3xl  font-abel">Fruits And Vegetables</h3>
          <Image
            src="/Images/Icons/downCurve.png"
            alt="vector image"
            width="300px"
            height="28px"
          />
        </div>

        <div className={`${Styles.nftcards} `}>
          <ProductSearchCard
            name="Carrot"
            type="vegetable"
            productImg="/Images/Bitmap.png"
            bgColor=" #e6a582"
          />
          <ProductSearchCard
            name="Carrot"
            type="vegetable"
            productImg="/Images/Bitmap.png"
            bgColor=" #e6a582"
          />
          <ProductSearchCard
            name="Carrot"
            type="vegetable"
            productImg="/Images/Bitmap.png"
            bgColor=" #e6a582"
          />
          <ProductSearchCard
            name="Banana"
            type="Fruit"
            productImg="/Images/Bitmap1.png"
            bgColor="#edd251"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default product;
