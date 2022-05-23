import React from "react";
import Image from "next/image";
import Styles from "../../styles/Products.module.css";
import { useState } from "react";

function ProductSearchCard({ name, type, productImg, bgColor, key }) {
  return (
    <div key={key}>
      <div className={`${Styles.nftc}`} style={{ backgroundColor: bgColor }}>
        <h1 className={Styles.head}>{name}</h1>
        <p className={Styles.p}>{type}</p>
        <Image
          className={Styles.isc}
          src={productImg}
          alt="img"
          width="300px"
          height="250px"
        />
      </div>
    </div>
  );
}

export default ProductSearchCard;
