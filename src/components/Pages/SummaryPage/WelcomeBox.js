import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

const WelcomeBox = (props) => {
  return (
    <Box
      
        width = {250}
        height =  {50}
        color ="orange"
        borderColor  =  "black"
        border = {1}
        borderRadius={5}
        bgcolor="primary.main"
      
    >
      <Typography variant = "h5">Welcome Sanyam</Typography> 
    </Box>
  );
};

export default WelcomeBox;
