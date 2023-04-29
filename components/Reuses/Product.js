import Link from "next/link";
import React from "react";
import { replaceWhitespaceWithHyphen, truncateString } from "./Reuse";

const Product = ({ item }) => {
  return (
    <div className="product-card">
      <Link href={`/shop/${item.slug}`} key={item._id}>
        <img src={item.imageUrls[0]} alt={item.name} />
      </Link>
      <h5>{item.name}</h5>
      <p>{truncateString(item.description, 70)}</p>
      <div className="product-price">
        <label>${item.price.$numberDecimal}</label>
        <Link href="/">Buy</Link>
      </div>
    </div>
  );
};

export default Product;
