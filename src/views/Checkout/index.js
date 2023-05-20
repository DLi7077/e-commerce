import React from "react";
import classes from "./checkout.module.scss";
import { ITEMS_IN_CART } from "../../constants/hair-products";
import CartItem from "../../components/ShoppingCart/CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes["card-list"]}>
        {ITEMS_IN_CART.map((item) => (
          <CartItem product={item} hideMutate key={`${item.name}-cart`} />
        ))}
      </div>
      <div>
        <div className={classes["space-between"]}>
          <div>Sub-total:</div>
          <div>$420.69</div>
        </div>
        <div className={classes["space-between"]}>
          <div>Tax:</div>
          <div>$36.81</div>
        </div>
        <div className={classes["space-between"]}>
          <div>Shipping:</div>
          <div>$4.99</div>
        </div>
        <div className={classes["space-between"]}>
          <div>Total:</div>
          <div>$462.49</div>
        </div>
      </div>
      <div className={classes["payments"]}>
        <Button onClick={() => navigate("/tracking")}>Credit/Debit Card</Button>
        <Button onClick={() => navigate("/tracking")}>Paypal</Button>
      </div>
    </div>
  );
}
