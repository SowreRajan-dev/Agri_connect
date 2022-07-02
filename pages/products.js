import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Styles from "../styles/Products.module.css";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import ProductSearchCard from "../components/ProductSearchCard/ProductSearchCard";
import ProductCard from "../components/ProductCard/ProductCard";
import { products, searchProducts } from "../testData";
import axios from "axios";

function Product({ products }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredProduct = products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredProduct);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full ">
        <div className="w-[100%] h-[400px] relative flex items-center  justify-center divide-black opacity-75 ">
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
                  onChange={(e) => searchItems(e.target.value)}
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
      {filteredResults.length > 0 && searchInput.length > 1 ? (
        <>
          <p className="ml-10 font-medium text-xl"> Search Results....</p>
          <div className="flex flex-col items-center">
            <div>
              {filteredResults.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="cursor-pointer hover:scale-105 transition duration-150 ease-out hover:ease-in"
                  >
                    <ProductCard
                      product={product}
                      pids={product.id}
                      imageUrl={product.image}
                      productName={product.name}
                      location={product.location}
                      price={product.price}
                      weight={product.weight}
                      key={product.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

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
        <div className="">
          <div className={`${Styles.productCards} mb-10 cursor-pointer `}>
            {products.map(
              (product, index) =>
                index > 3 && (
                  <>
                    <div
                      className="hover:scale-105 transition duration-150 ease-out hover:ease-in"
                      key={product.id}
                    >
                      <ProductCard
                        productName={product.name}
                        pids={product.id}
                        imageUrl={product.image}
                        location={product.location}
                        product={product}
                        price={product.price}
                        weight={product.weight}
                      />
                    </div>
                  </>
                )
            )}
          </div>
          <p className="font-medium text-lg hover:underline hover:text-blue-500">
            <Link href="/shoppingproducts" passHref>
              ... Search other products here
            </Link>
          </p>
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
          {searchProducts.map((product) => (
            <>
              <Link href={`/product/category/${product.type}`} passHref>
                <div key={product.id}>
                  <ProductSearchCard
                    name={product.productName}
                    type={product.type.toLowerCase()}
                    productImg={product.imageUrl}
                    bgColor={product.bgColor}
                  />
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

export async function getServerSideProps(context) {
  const products = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: products.data,
    },
  };
}
