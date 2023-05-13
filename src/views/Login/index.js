import React from "react";
import classes from "./login.module.scss";
import { Button, TextField } from "@mui/material";
import SocialButton from "./SocialButton";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Login() {
  return (
    <div className={classes["form-wrapper"]}>
      <div className={classes["login-form"]}>
        <TextField defaultValue={"hesdf"} label="Email" />
        <TextField defaultValue={"hesdf"} label="Password" type="password" />
        <Button style={{ width: "100%" }}>Login</Button>
      </div>
      <div className={classes["social-logins"]}>
        <SocialButton>
          <GoogleIcon style={{ marginRight: "1rem" }} /> Login with Google
        </SocialButton>
        <SocialButton>
          <TwitterIcon style={{ marginRight: "1rem" }} /> Login with Twitter
        </SocialButton>
      </div>
    </div>
  );
}
