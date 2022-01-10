import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

const SummaryBox = (props) => {
  return (
    <Box
      width={250}
      height={50}
      color="lightblue"
      borderColor="blue"
      border={1}
      borderRadius={5}
      bgcolor="primary.main"
    >
      <Typography variant="h5">SUMMARY</Typography>
    </Box>
  );
};

export default SummaryBox;
