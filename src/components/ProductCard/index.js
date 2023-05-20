import React from "react";
import classes from "./product-card.module.scss";
import ReviewStars from "./ReviewStars";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ProductCard(product) {
  return (
    <div className={classes["card-container"]}>
      <div>
        <div className={classes["image-container"]}>
          <img
            src={product.image_url}
            className={classes["product-image"]}
            alt={product.name}
            aria-label="Product image"
          />
          <div className={classes["product-brand"]} aria-label="Product brand">
            {product.brand}
          </div>
        </div>
        <div
          className={classes["product-price"]}
          aria-label="Product price USD"
        >
          ${product.price.toFixed(2)}
        </div>
      </div>
      <div>
        <a
          className={classes["product-title"]}
          href={product.product_url}
          target="_blank"
          rel="noreferrer"
          aria-label="Link to product from brand's website"
        >
          {product.name}
        </a>
        <div className={classes["review-details"]} aria-label="Product rating">
          <ReviewStars rating={product.rating} name={product.name} />
          <span
            className={classes["review-count"]}
            aria-label="Product review count"
          >
            ({product.rating})
          </span>
        </div>
      </div>
      <IconButton
        sx={{
          position: "absolute",
          bottom: "0.25rem",
          right: "0.25rem",
          color: "primary.highlight",
          padding: "0.25rem",
        }}
        aria-label="Add to cart"
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
}
