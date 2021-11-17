import React, { Fragment } from "react";
import classes from "./Resources.module.css";

const Resources = () => {
  return (
    <Fragment>
      <div className={classes.header}> Useful Resources for Mental Health </div>
      <div className={classes.container}>
        {" "}
        <div className={classes.child}>
          <p className={classes.headText}> Anxiety Canada </p>
          <p className={classes.infoBody}>
            {" "}
            - Feeling Anxious. Click here to get step-by-step instructions on
            how to deal with symptoms.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> Connecteen </p>
          <p className={classes.infoBody}>
            {" "}
            - Do you want to talk to someone? Connect with a peer on this
            website.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> Kids Help Phone </p>
          <p className={classes.infoBody}>
            {" "}
            - Need help now? You can reach a professional counsellor at Kids
            Help Phone in English or French.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}>
            {" "}
            Canada Suicide Prevention Service{" "}
          </p>
          <p className={classes.infoBody}>
            {" "}
            - If you’re thinking about suicide, are worried about a friend or
            loved one, the Canada Suicide Prevention Service is available 24/7
            for voice and 4pm to 12am ET for text.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> Crisis Text Line Canada </p>
          <p className={classes.infoBody}>
            {" "}
            - Want to connect to a crisis counselor?.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> LGBT Youthline </p>
          <p className={classes.infoBody}>
            {" "}
            - Find confidential and non-judgmental peer support.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> Bullying Helpline </p>
          <p className={classes.infoBody}>
            {" "}
            - Connect with helplines if you or someone you know is experiencing
            bullying or abuse.{" "}
          </p>
        </div>{" "}
        <div className={classes.child}>
          <p className={classes.headText}> Hope for Wellness Helpline </p>
          <p className={classes.infoBody}>
            {" "}
            - Try on-line chat counseling service.{" "}
          </p>
        </div>{" "}

        <div className={classes.child}>
          <p className={classes.headText}> Wellness Together Canada </p>
          <p className={classes.infoBody}>
            {" "}
            - Find resources for all age groups.{" "}
          </p>
        </div>{" "}


      </div>
    </Fragment>
  );
};

export default Resources;
