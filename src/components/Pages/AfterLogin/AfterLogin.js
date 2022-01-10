import React, { Fragment } from "react";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Summary from "../SummaryPage/Summary";
import LeftPane from "./LeftPane";
import Box from "@material-ui/core/Box";

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
    width: 30,
    height: 30,
    color: "white",
    backgroundColor: "purple",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AfterLogin = () => {
  const classes = useStyles();

  return (
    <Box m={2} p={2}>
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        <Grid item container xs={2}>
          <LeftPane />
        </Grid>
        <Grid item container xs={10} justifyContent="center">
          <Summary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AfterLogin;
