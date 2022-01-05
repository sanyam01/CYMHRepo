import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, StylesProvider } from "@material-ui/core";
import { borders, flexbox } from "@mui/system";
import { styled } from "@material-ui/core/styles";
import { compose, spacing, palette, border, sizing } from "@material-ui/system";
import {Cross} from "../../Images/Cross.jpg";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Avatar } from "@material-ui/core";


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

  boxAge: {
    border: 1,
    borderColor: "primary.main",
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    alignItems: "center",
  },
}));

const Box = styled("div")(compose(spacing, palette, borders, sizing, flexbox));

const AgeBox = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
      <Box className= {classes.paper}
        color="black"
        bgcolor="lightgrey"
        p={5}
        border={1}
        borderColor="darkgrey"
        borderRadius={5}
        height={200}
        width={400}
        b = {5}
        

      >
        <Typography component="h1" variant="h5" >
          {" "}
          Are you 13 years old?
        </Typography>

       

        <Grid container spacing={4} alignItems="center" justifyContent= "center" >
            <Grid item >
            <Avatar className={classes.large} > YES </Avatar>


            </Grid>
            <Grid item  >
            <Avatar className={classes.large} > NO </Avatar>
            </Grid>
            </Grid>

       
        
      </Box>
      </Container>
    </Fragment>
  );
};

export default AgeBox;



