import React, { Fragment } from "react";
import classes from "./About.module.css";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <Fragment>
      <div className={classes.header}> About Us</div>
      <AboutInfo />

      <div className={classes.format}>
      </div>
    </Fragment>
  );
};

export default About;
