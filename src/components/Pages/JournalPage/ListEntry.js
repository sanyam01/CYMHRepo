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
    color: "white",
  },
}));

const ListEntry = (props) => {
  const classes = useStyles();
  return (
    <Box
      width={"auto"}
      height={200}
      color="black"
      borderColor="black"
      border={1}
      borderRadius={0}
      bgcolor="grey"
    >
      <Typography variant="h5">{props.content}</Typography>
    </Box>
  );
};

export default ListEntry;
