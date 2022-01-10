import React from "react";
//import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import WelcomeBox from "./WelcomeBox";
import ProfileSummary from "./ProfileSummary";
import SubmitNames from "./SubmitNames";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Summary = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={11} container justifyContent="right" alignItems="flex-end">
        <WelcomeBox />
      </Grid>
      <Grid item xs={1}>
        {" "}
      </Grid>

      <Grid item xs={12} justifyContent="left">
        <ProfileSummary />
      </Grid>

      <Grid item container xs={12} justifyContent="left" alignItems="flex-start">
        <SubmitNames />
      </Grid>
    </Grid>
  );
};

export default Summary;
