import React, { Fragment } from "react";
import classes from "./Resources.module.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const ResourcesMaterial = () => {
  return (
    <Fragment>
      <div className={classes.header}> Useful Resources for Mental Health </div>

      <Box m={1} p={1}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.anxietycanada.com/">
                  <Box fontWeight="bold" display="inline">
                    Anxiety Canada
                  </Box>
                </a>
                - Feeling Anxious. Click here to get step-by-step instructions
                on how to deal with symptoms.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://calgaryconnecteen.com/2015/02/need-help/">
                  <Box fontWeight="bold" display="inline">
                    Connecteen
                  </Box>
                </a>
                - Do you want to talk to someone? Connect with a peer on this
                website.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://kidshelpphone.ca/call/">
                  <Box fontWeight="bold" display="inline">
                    Kids Help Phone
                  </Box>
                </a>
                - Need help now? You can reach a professional counsellor at Kids
                Help Phone in English or French.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.crisisservicescanada.ca/en/">
                  <Box fontWeight="bold" display="inline">
                    Canada Suicide Prevention Service
                  </Box>
                </a>
                - If you’re thinking about suicide, are worried about a friend
                or loved one, the Canada Suicide Prevention Service is available
                24/7 for voice and 4pm to 12am ET for text.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.crisistextline.org/">
                  <Box fontWeight="bold" display="inline">
                    Crisis Text Line Canada
                  </Box>
                </a>
                - Want to connect to a crisis counselor?
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.youthline.ca/">
                  <Box fontWeight="bold" display="inline">
                    LGBT Youthline
                  </Box>
                </a>
                - Find confidential and non-judgmental peer support.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.alberta.ca/bullying-find-supports.aspx">
                  <Box fontWeight="bold" display="inline">
                    Bullying Helpline
                  </Box>
                </a>
                - Connect with helplines if you or someone you know is
                experiencing bullying or abuse.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://www.hopeforwellness.ca/">
                  <Box fontWeight="bold" display="inline">
                    Hope for Wellness Helpline
                  </Box>
                </a>
                - Try on-line chat counseling service.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography component="div">
                <a href="https://ca.portal.gs/">
                  <Box fontWeight="bold" display="inline">
                    Wellness Together Canada
                  </Box>
                </a>
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
