import { Button } from "@mui/material";
import React from "react";

export default function SocialButton(props) {
  return (
    <Button
      sx={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
    >
      {props.children}
    </Button>
  );
}
