import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import classes from "./cart-item.module.scss";

const styles = {
  icon: {
    padding: "0.15rem",
    color: "white",
  },
};

const randomInt = (num) => 1 + Math.floor(Math.random() * num);

export default function CartItem({ product, hideMutate }) {
  const [count, setCount] = useState(randomInt(4));
  return (
    <div className={classes["container"]}>
      <img
        src={product.image_url}
        alt={product.name}
        className={classes["item-image"]}
        aria-label="Product image"
      />
      <div>
        <div className={classes["item-name"]} aria-label="Product name">
          {product.name}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div aria-label="price in USD">${product.price.toFixed(2)}</div>
          {!hideMutate && (
            <div className={classes["quantity"]}>
              <IconButton
                style={styles.icon}
                onClick={() => setCount((p) => p - 1)}
                aria-label="Remove one"
              >
                <RemoveIcon style={{ fontSize: "1rem" }} />
              </IconButton>
              {count}
              <IconButton
                style={styles.icon}
                onClick={() => setCount((p) => p + 1)}
                aria-label="Add another one"
              >
                <AddIcon style={{ fontSize: "1rem" }} />
              </IconButton>
            </div>
          )}
          {hideMutate && <div style={{ marginRight: "0.5rem" }}>{count}x</div>}
        </div>
      </div>
    </div>
  );
}
