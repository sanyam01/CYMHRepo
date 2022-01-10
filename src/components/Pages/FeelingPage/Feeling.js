import React from "react";
import { Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import LeftPane from "../AfterLogin/LeftPane";
import Grid from "@material-ui/core/Grid";
import FeelingImage from "../../Images/FeelingImage.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: 100,
    height: 100,
    color: "white",
    backgroundColor: "purple",
  },
  photo: {
    height: 300,
    width: 450,
  },
}));

const Feeling = () => {
  const classes = useStyles();

  return (
    <Box m={2} p={2}>
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        <Grid item container xs={2}>
          <LeftPane />
        </Grid>
        <Grid item container xs={10} justifyContent="center">
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography variant="h4" align="justify">
              Not Feeling Well?
            </Typography>

            <Typography align="justify">
              {" "}
              Are you feeling sadness, lonely, or stressed? You are not alone.
              <br />
              Click below and a message will be sent to the closest friends or
              support persons you have identified.
              <br />
            </Typography>

            <Typography variant="h5">
              {" "}
              Let your supports know: <br />{" "}
            </Typography>

            <Grid item>
            {" "}
            <img className={classes.photo} src={FeelingImage} alt="Logo" />{" "}
          </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feeling;
