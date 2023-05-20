import React from "react";
import classes from "./shopping-cart.module.scss";
import { Button, IconButton } from "@mui/material";
import { HAIR_WAX } from "../../constants/hair-products";
import CartItem from "./CartItem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";

const itemsInCart = HAIR_WAX.slice(0, 5);

export default function ShoppingCart(props) {
  const navigate = useNavigate();
  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <IconButton
          sx={{ padding: "0.25rem", color: "white" }}
          onClick={props.close}
        >
          <NavigateBeforeIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        Cart (6 Items)
      </div>
      <div className={classes["content"]}>
        {itemsInCart.map((item) => (
          <CartItem product={item} key={`${item.name}-cart`} />
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "280px",
        }}
      >
        Total: $420.69
        <Button
          style={{ backgroundColor: "black" }}
          onClick={() => navigate("/checkout")}
        >
          <ShoppingCartCheckoutIcon />
        </Button>
      </div>
    </div>
  );
}
