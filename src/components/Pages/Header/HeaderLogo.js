import React, { Fragment } from "react";
import logo from "../../Images/myPic.jpg";
import classes from "./Header.module.css";
import Button from "../../UI/Button";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.alignContent}>
        <img className={classes.photo} src={logo} alt="Logo" />
      </div>
    </Fragment>
  );
};

export default Header;
