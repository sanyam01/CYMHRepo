import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <Fragment>
      <div className={classes.rowT}>
        <p className={classes.content}>
          {" "}
          For contact, please email CYMH.Coordinator2@ucalgary.ca.
        </p>

        <p className={classes.content}>
          For any queries or if you need assistance regarding the website,
          please email CYMH.Calgary@ucalgary.ca.
        </p>

        <p className={classes.content}>
          {" "}
          Don’t have your email open? You can also submit your questions below:
        </p>
      </div>
    </Fragment>
  );
};

export default ContactInfo;
