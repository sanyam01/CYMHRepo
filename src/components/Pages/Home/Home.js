import React, { Fragment } from "react";
import classes from "./Home.module.css";
import VideoDummy from "../../Images/VideoDummy.jpg";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.infoBody}>
        <p className={classes.text}>
          {" "}
          Welcome to Children and Youth Mental Health Innovation. Our aim is to
          promote mental wellness and to provide early intervention resources.
          <br></br>
        </p>

        <p className={classes.text}>
          You are not alone if you have experienced any mental health issue.
          Please login/sign up if you have not done so. <br></br>
        </p>

        <p className={classes.text}>
          {" "}
          We provide several features that are aimed to develop mental wellness.
          For instance, maintaining a journal of all your worries and happiness,
          and get connected to people you trust. See the video for an
          illustration and what you will get from this website.
        </p>

        <img className={classes.photo} src={VideoDummy} alt="Logo" />
      </div>
    </Fragment>
  );
};

export default Home;
