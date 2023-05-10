import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Haircare</Link>
      <Link to="/login" style={{ marginLeft: "auto" }}>
        Login
      </Link>
    </nav>
  );
}
