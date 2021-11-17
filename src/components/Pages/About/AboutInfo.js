import React from "react";
import logo from "../../Images/myPic.jpg";
import { Fragment } from "react";
import classes from "./AboutInfo.module.css";

const AboutInfo = () => {
  return (
    <Fragment>
      <div className={classes.rowC}>
        <div className={classes["columnC:left"]}>
          <div className={classes.rowc}>
            <p className={classes.body}>
              {" "}
              Hey! Welcome to Children and Youth Mental Health.
            </p>
            <p className={classes.bodyText}>
              {" "}
              Children and Youth Mental Health (CYMH) is the University research
              project lead by Dr. Dora Tam, who is associated with Faculty of
              Social Work [FSW] at University of Calgary. This project is being
              done in partnership with Big Brothers and Big Sisters of
              Lethbridge and the Centre for Young Parents to understand and
              promote wellbeing of children and youth in Lethbridge and Grand
              Prairie. Our goal of the project is to engage children, youth,
              parents, and community partners in development of service
              user-focused initiatives for the promotion and early intervention
              of mental wellness among children and youth aged 12-17 in Canada
              and China. We will be using web-based applications designed to
              facilitate mental health and wellbeing with children and youth. We
              are seeking youth feedback through focus groups to enhance mental
              health education, prevention, and intervention in a digital
              format. Our website includes many features to promote mental
              wellness which includes a mood tracker, journal, and resources.
            </p>
          </div>
        </div>
        <img className={classes["columnC:righ"]} src={logo} alt="Logo" />
      </div>
    </Fragment>
  );
};

export default AboutInfo;
