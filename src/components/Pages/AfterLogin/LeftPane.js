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
import { NavLink } from "react-router-dom";
import { useState } from "react";

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
  const [afterClick, setAfterClick] = useState(true);
  const [journalClick, setJournalClick] = useState(false);
  const [trackerClick, setTrackerClick] = useState(false);
  const [feelingClick, setFeelingClick] = useState(false);

  const afterClickHandler = () => {
    setAfterClick((prevState) => {
      return prevState ? false : true;
    });
  };

  const journalClickHandler = () => {
    setJournalClick((prevState) => {
      return prevState ? false : true;
    });
  };

  const trackerClickHandler = () => {
    setTrackerClick((prevState) => {
      return prevState ? false : true;
    });
  };

  const feelingClickHandler = () => {
    setFeelingClick((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12}>
        {" "}
        <NavLink to="/AfterLogin">
          <Avatar className={classes.avatar} onClick={afterClickHandler}>
            <AccountCircleSharpIcon  />
          </Avatar>
        </NavLink>
      </Grid>{" "}
      <Grid item xs={12}>
        {" "}
        <NavLink to="/Journal">
          <Avatar className={classes.avatar} onClick={journalClickHandler} >
            <HistoryEduSharpIcon />
          </Avatar>
        </NavLink>
      </Grid>{" "}
      <Grid item xs={12}>
        {" "}
        <NavLink to="/Tracker">
          <Avatar className={classes.avatar} onClick={trackerClickHandler} >
            <InsertEmoticonSharpIcon />
          </Avatar>
        </NavLink>
      </Grid>{" "}
      <Grid item xs={12} to="Feeling">
        {" "}
        <NavLink to="/Feeling">
          <Avatar className={classes.avatar} onClick={feelingClickHandler}>
            <PanToolIcon />
          </Avatar>
        </NavLink>
      </Grid>{" "}
    </Grid>
  );
};

export default LeftPane;
