import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import "./navbar.scss";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Haircare</Link>
      <IconButton
        style={{ marginLeft: "auto", color: "white" }}
        onClick={() => navigate("/login")}
      >
        <LoginIcon />
      </IconButton>
    </nav>
  );
}
