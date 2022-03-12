import React from "react";
import logo from "../../Images/myPic.jpg";
import { Fragment } from "react";
import classes from "./AboutInfo.module.css";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const AboutInfoMaterial = () => {
  return (
    <Box m={2} p={2}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            Hey! Welcome to Children and Youth Mental Health.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            Children and Youth Mental Health (CYMH) is the University research
            project lead by Dr. Dora Tam, who is associated with Faculty of
            Social Work [FSW] at University of Calgary. This project is being
            done in partnership with Big Brothers and Big Sisters of Lethbridge
            and the Centre for Young Parents to understand and promote wellbeing
            of children and youth in Lethbridge and Grande Prairie.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            Our goal of the project is to engage children, youth, parents, and
            community partners in development of service user-focused
            initiatives for the promotion and early intervention of mental
            wellness among children and youth aged 12-17 in Canada and China.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            We will be using web-based applications designed to facilitate
            mental health and wellbeing with children and youth. We are seeking
            youth feedback through focus groups to enhance mental health
            education, prevention, and intervention in a digital format.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="left">
            Our website includes many features to promote mental wellness which
            includes a mood tracker, journal, and resources.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutInfoMaterial;
