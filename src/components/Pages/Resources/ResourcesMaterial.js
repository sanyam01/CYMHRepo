import React, { Fragment } from "react";
import classes from "./Resources.module.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

const ResourcesMaterial = () => {
  return (
    <Fragment>
      <div className={classes.header}> Useful Resources for Mental Health </div>

      <Box m={1} p={1}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Anxiety Canada
                </Box>
                - Feeling Anxious. Click here to get step-by-step instructions
                on how to deal with symptoms.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Connecteen
                </Box>
                - Do you want to talk to someone? Connect with a peer on this
                website.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Kids Help Phone
                </Box>
                - Need help now? You can reach a professional counsellor at Kids
                Help Phone in English or French.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Canada Suicide Prevention Service
                </Box>
                - If you’re thinking about suicide, are worried about a friend
                or loved one, the Canada Suicide Prevention Service is available
                24/7 for voice and 4pm to 12am ET for text.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Crisis Text Line Canada
                </Box>
                - Want to connect to a crisis counselor?
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  LGBT Youthline
                </Box>
                - Find confidential and non-judgmental peer support.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Bullying Helpline
                </Box>
                - Connect with helplines if you or someone you know is
                experiencing bullying or abuse.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Hope for Wellness Helpline
                </Box>
                - Try on-line chat counseling service.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <Box fontWeight="bold" display="inline">
                  Wellness Together Canada
                </Box>
                - Find resources for all age groups.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ResourcesMaterial;
