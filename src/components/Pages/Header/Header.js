import React, { Fragment } from "react";
import logo from "../../Images/myPic.jpg";
import classes from "./Header.module.css";
import Button from "../../UI/Button";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.alignContent}>
        <img className={classes.photo} src={logo} alt="Logo" />

        <div className={classes.push}>
          <div className={classes.header}>
            <Button name="SignUp" id="SignUp"> Sign Up</Button>
            <Button name = "Login" id = "Login"> Login </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
