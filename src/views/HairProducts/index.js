import React, { useState } from "react";
import { HAIR_WAX } from "../../constants/hair-products";
import ProductCard from "../../components/ProductCard";
import classes from "./hair-products.module.scss";
import SearchBar from "../../components/SearchBar";
import ShoppingCart from "../../components/ShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton, Drawer } from "@mui/material";

export default function HairProducts() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpen = () => {
    setOpenDrawer(true);
  };
  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={classes["page-container"]}>
      <SearchBar options={HAIR_WAX.map((product) => product.name)} />
      <div className={classes["grid"]}>
        {HAIR_WAX.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className={classes["shop-cart-icon"]}>
        <div style={{ position: "relative" }}>
          <div className={classes["item-count"]}>6</div>
          <IconButton
            sx={{ color: "primary.highlight", border: 2 }}
            onClick={handleOpen}
          >
            <ShoppingCartIcon
              sx={{ color: "primary.main", fontSize: "2rem" }}
            />
          </IconButton>
        </div>
      </div>
      <Drawer open={openDrawer} onClose={handleClose} anchor="right">
        <Box
          style={{
            width: "min(300px, 100vw)",
          }}
        >
          <ShoppingCart close={handleClose} />
        </Box>
      </Drawer>
    </div>
  );
}
