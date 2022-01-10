import { Container } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FeelingToday from "./FeelingToday";
import SummaryBox from "./SummaryBox";
import Box from "@material-ui/core/Box";
import LeftPane from "../AfterLogin/LeftPane";

const MoodTracker = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Grid item container xs={2}>
          <LeftPane />
        </Grid>
        <Grid item container xs={10} justifyContent="center">
          <Grid item xs={4}>
            <Typography variant="h3" color="primary">
              {" "}
              Mood Tracker{" "}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {" "}
          </Grid>
          <Grid item xs={4} container alignItems="stretch">
            {" "}
            <SummaryBox />
          </Grid>
          <Grid item xs={12}>
            {" "}
          </Grid>
          <Grid
            item
            xs={12}
            container
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            <FeelingToday />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MoodTracker;
