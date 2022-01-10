import { Container } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue, purple } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";

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

const Journal = () => {
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
          <Typography variant="h3" color="primary">
            {" "}
            My Journal{" "}
          </Typography>
        </Grid>

        <Grid item container alignItems="center" justifyContent="center">
          <Grid item xs={6}>
            <Box xs={6}> Feeling box</Box>
          </Grid>

          <Grid item xs={6}>
            <Box xs={6}> Grateful for</Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Journal;
