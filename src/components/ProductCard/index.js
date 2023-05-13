import React from "react";
import classes from "./product-card.module.scss";
import ReviewStars from "./ReviewStars";

export default function ProductCard(product) {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["image-container"]}>
        <img
          src={product.image_url}
          className={classes["product-image"]}
          alt={product.name}
        />
        <div className={classes["product-brand"]}>{product.brand}</div>
      </div>
      <div>
        <a
          className={classes["product-title"]}
          href={product.product_url}
          target="_blank"
          rel="noreferrer"
        >
          {product.name}
        </a>
        <div className={classes["review-details"]}>
          <ReviewStars rating={product.rating} name={product.name} />
          <span className={classes["review-count"]}>({product.rating})</span>
        </div>
      </div>
    </div>
  );
}
