import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  buttonClass: {
    margin: theme.spacing(1),
    backgroundColor: "blue",
    width: 100,
    height: 40,
    backgroundColor: "darkblue",
    color : "white",
  },
}));

const BoxTemplate = (props) => {

    const classes = useStyles();
  return (
    <Box
      width={400}
      height={200}
      color="black"
      borderColor="black"
      border={1}
      borderRadius={40}
      bgcolor="white"
    >
      <Typography variant="h5">{props.content}</Typography>
      <Box m = {3} p={4}>
        <Button className = {classes.buttonClass} color = "primary" variant="contained" size = "large" disableElevation > Upload</Button>
      </Box>
    </Box>
  );
};

export default BoxTemplate;
