import React, { Fragment } from "react";
import classes from "./About.module.css";
import AboutInfo from "./AboutInfo";
import Typography from "@material-ui/core";
import AboutInfoMaterial from "./AboutInfoMaterial";

const About = () => {
  return (
    <Fragment>
      <div className={classes.header}> About Us</div>
     

      <AboutInfoMaterial />
    </Fragment>
  );
};

export default About;
