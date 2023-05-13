import React from "react";
import { HAIR_WAX } from "../../constants/hair-products";
import ProductCard from "../../components/ProductCard";
import classes from "./hair-products.module.scss";

export default function HairProducts() {
  return (
    <div className={classes["grid"]}>
      {HAIR_WAX.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
