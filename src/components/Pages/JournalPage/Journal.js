import { Container } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue, purple } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import LeftPane from "../AfterLogin/LeftPane";
import BoxTemplate from "./BoxTemplate";
import Entries from "./Entries";

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

  entriesContent: {
    fontWeight: 600,
    color: purple,
    textDecorationLine: "underline",
    color: "black",
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

const Journal = () => {
  const classes = useStyles();

  return (
    <Box m={2} p={2}>
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        <Grid item container xs={2}>
          <LeftPane />
        </Grid>
        <Grid item container xs={10} justifyContent="center">
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
              <Typography variant="h3" color="primary">
                {" "}
                My Journal{" "}
              </Typography>
            </Grid>

            <Grid item container alignItems="center" justifyContent="center">
              <Grid item xs={6}>
                <Box xs={6}>
                  {" "}
                  <BoxTemplate content="Today I am feeling..." />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box xs={6}>
                  {" "}
                  <BoxTemplate content="Today I am grateful for..." />{" "}
                </Box>
              </Grid>
            </Grid>

            <Grid item container xs={12} />
            <Grid item container xs={12} />
            <Grid item container xs={12} />

            <Grid item container xs={12}>
              <Typography className = {classes.entriesContent} variant="h5"> My Past Entries</Typography>
            </Grid>

            <Grid item container xs = {12}>
              <Entries/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Journal;
