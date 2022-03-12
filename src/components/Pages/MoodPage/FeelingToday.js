import { Container } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Picker, { SKIN_TONE_MEDIUM_LIGHT } from "emoji-picker-react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Happy from "../../Images/Happy.jpg";
import Worried from "../../Images/Worried.jpg";
import Surprised from "../../Images/Surprised.jpg";
import Embarrased from "../../Images/Embarrased.jpg";
import Sad from "../../Images/Sad.jpg";
import Angry from "../../Images/Angry.jpg";
import Stressed from "../../Images/Stressed.jpg";
import NumberBox from "./NumberBox";
import { lightBlue, purple } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import Button1 from "../../UI/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  photo: {
    height: 70,
    width: 70,
  },

  typographicContent: {
    fontWeight: 600,
  },

  resourceContent: {
    fontWeight: 600,
    color: purple,
    textDecorationLine: "underline",
    color: "violet",
  },

  buttonColor: {
    color: "blue",
    backgroundColor: "lightBlue",
    borderColor: "blue",
  },
}));

const clickedHappyFace = () => {
  console.log("Happy face is clicked");
};

const FeelingToday = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        item="true"
      >
        <Grid
          item
          xs={12}
          container
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography noWrap="false" variant="h5" justifyContent="left">
            {" "}
            Hi! How are you feeling today?
          </Typography>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          <Grid item>
            {" "}
            <img
              className={classes.photo}
              src={Happy}
              alt="Logo"
              onClick={clickedHappyFace}
            />
          </Grid>

          <Grid item>
            {" "}
            <img className={classes.photo} src={Worried} alt="Logo" />{" "}
          </Grid>
          <Grid item>
            {" "}
            <img className={classes.photo} src={Surprised} alt="Logo" />{" "}
          </Grid>
          <Grid item>
            {" "}
            <img className={classes.photo} src={Embarrased} alt="Logo" />
          </Grid>
          <Grid item>
            {" "}
            <img className={classes.photo} src={Sad} alt="Logo" />{" "}
          </Grid>
          <Grid item>
            {" "}
            <img className={classes.photo} src={Angry} alt="Logo" />{" "}
          </Grid>
          <Grid item>
            {" "}
            <img className={classes.photo} src={Stressed} alt="Logo" />{" "}
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Typography noWrap="false" variant="h5" justifyContent="left">
            {" "}
            On a scale from 1 (lowest) to 5 (highest), how would you say the
            intensity of such feeling?
          </Typography>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          <Grid item>
            {" "}
            <NumberBox number={1} />{" "}
          </Grid>
          <Grid item>
            {" "}
            <NumberBox number={2} />{" "}
          </Grid>
          <Grid item>
            {" "}
            <NumberBox number={3} />{" "}
          </Grid>
          <Grid item>
            {" "}
            <NumberBox number={4} />{" "}
          </Grid>
          <Grid item>
            {" "}
            <NumberBox number={5} />{" "}
          </Grid>
        </Grid>

        <Grid item xs={12} container>
          <Typography noWrap="false" variant="h5" justifyContent="left">
            {" "}
            Let your friends know how you are feeling
          </Typography>
        </Grid>

        <Grid item xs={12} container>
          <Button
            className={classes.buttonColor}
            variant="outlined"
            color="blue"
            size="large"
          >
            {" "}
            Share{" "}
          </Button>
        </Grid>

        <Grid item xs={12}>
          {" "}
        </Grid>
        <Grid item xs={12}>
          {" "}
        </Grid>

        <Grid item xs={12} container>
          <Typography
            noWrap="false"
            variant="h5"
            justifyContent="left"
            className={classes.typographicContent}
          >
            {" "}
            Not Feeling good? Click below to see the list of resources that may
            be useful.
          </Typography>
        </Grid>

        {/* <Grid item xs={12} container>
          <Typography className = {classes.buttonColor} noWrap="false" variant="h5" justifyContent="left" className = {classes.resourceContent}>
            {" "}
            Resources
          </Typography>
        </Grid> */}

        <Grid item xs={12} container>
          <NavLink to="/resources">
            <Button
              name="resources"
              fullWidth
              variant="contained"
              color="primary"
            >
              Resources
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeelingToday;
