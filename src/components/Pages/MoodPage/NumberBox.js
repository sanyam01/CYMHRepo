import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

const NumberBox = (props) => {
  return (
    <Box
      width={50}
      height={50}
      color="black"
      borderColor="purple"
      border={1}
      borderRadius={5}
      bgcolor="grey"
    >
      <Typography variant="h5">{props.number}</Typography>
    </Box>
  );
};

export default NumberBox;
