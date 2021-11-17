import React from "react";
import { Fragment } from "react";
import Button from "../../UI/Button";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <Button name="Home" id="home" />
        <Button name="About" id="about" />
        <Button name="Resources" id="resources" />
        <Button name="Contact" id="contact" />
      </div>
    </Fragment>
  );
};

export default HomePage;
