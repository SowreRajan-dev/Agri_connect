import React from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { getProductsByCategory } from "../../api/products/[category]";
import styles from "../../../styles/category.module.css";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar/Navbar";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Results for {router.query.category}</h1>
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              product={product}
              price={product.price}
              imageUrl={product.imageUrl}
              weight={product.weight}
              location={product.location}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

export async function getServerSideProps(context) {
  const { category } = context.query;
  console.log(category);
  const products = await getProductsByCategory(category);

  return {
    props: {
      products,
    },
  };
}
