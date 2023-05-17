import React from "react";
import { HAIR_WAX } from "../../constants/hair-products";
import ProductCard from "../../components/ProductCard";
import classes from "./hair-products.module.scss";
import SearchBar from "../../components/SearchBar";

export default function HairProducts() {
  return (
    <div>
      <SearchBar options={HAIR_WAX.map((product) => product.name)} />
      <div className={classes["grid"]}>
        {HAIR_WAX.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
