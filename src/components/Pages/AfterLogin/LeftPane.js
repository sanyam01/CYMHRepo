import React, { Fragment } from "react";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import HelpCenterSharpIcon from "@mui/icons-material/HelpCenterSharp";
import HistoryEduSharpIcon from "@mui/icons-material/HistoryEduSharp";
import PanToolIcon from "@mui/icons-material/PanTool";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: 100,
    height: 100,
    color: "white",
    backgroundColor: "purple",
  },
}));

const LeftPane = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12}>
        {" "}
        <Avatar className={classes.avatar}>
          <AccountCircleSharpIcon />
        </Avatar>
      </Grid>{" "}
      <Grid item xs={12}>
        {" "}
        <Avatar className={classes.avatar}>
          <HistoryEduSharpIcon />
        </Avatar>
      </Grid>{" "}
      <Grid item xs={12}>
        {" "}
        <Avatar className={classes.avatar}>
          <InsertEmoticonSharpIcon />
        </Avatar>
      </Grid>{" "}
      <Grid item xs={12}>
        {" "}
        <Avatar className={classes.avatar}>
          <PanToolIcon />
        </Avatar>
      </Grid>{" "}
    </Grid>
  );
};

export default LeftPane;
