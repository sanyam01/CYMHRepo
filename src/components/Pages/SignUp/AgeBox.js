import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, StylesProvider } from "@material-ui/core";
import { borders } from '@mui/system';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette, border } from '@material-ui/system';

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
     border : 1,
     borderColor: 'primary.main',

  }
}));

const Box = styled('div')(compose(spacing, palette, borders));

const AgeBox = () => {
  const classes = useStyles();

  return (
    <Fragment>
        
      <Box  color="white" bgcolor="palevioletred" p={1} border = {1} borderColor="primary.main" borderRadius={5} >
        <Typography component="h1" variant="h5">
          {" "}
          Are you 13 years old?
        </Typography>
      </Box >
    </Fragment>
  );
};

export default AgeBox;
