import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "../styles/ShopPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import { getProducts } from "./api/products";

const ShoppingProducts = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>All Results</h1>
        <div className={styles.cards}>
          {products.map((product) => (
            <div
              key={product.id}
              className="hover:scale-105 transition duration-150 ease-out hover:ease-in cursor-pointer"
            >
              <ProductCard
                key={product.id}
                productName={product.name}
                pids={product.id}
                imageUrl={product.imageUrl}
                location={product.location}
                product={product}
                price={product.price}
                weight={product.weight}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingProducts;

export async function getStaticProps() {
  const products = await getProducts();
  // console.log("products in static props", products);
  return {
    props: {
      products,
    },
  };
}
