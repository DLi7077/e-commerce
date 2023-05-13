import React from "react";
import HAIR_PRODUCTS from "../../constants/hair-products";
import ProductCard from "../../components/ProductCard";
import classes from "./hair-products.module.scss"; 

export default function HairProducts() {
  return (
    <div className={classes["grid"]}>
      {HAIR_PRODUCTS.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
