import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import WelcomeBox from './WelcomeBox';
import ProfileSummary from './ProfileSummary';


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
      <Container component="main" maxWidth="xs">
        
        <Grid container spacing={2} direction = "column">
          <Grid item xs={12} justifyContent = "right">
            
            <WelcomeBox/>
        
          </Grid>
          <Grid item xs={12} justifyContent = "left">
            
            <ProfileSummary/>
        
          </Grid>



        </Grid>
  
        <CssBaseline />
      </Container>
    );



};

export default Summary;