import { Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";

const ProfileSummary = () => {
  return (
    <Stack direction="column" spacing={2} alignItems="flex-start">
      <Typography align="justify">You are logged in successfully.</Typography>
      <Typography align="justify">
        You are logged in successfully. If you are not feeling good, try using
        the ‘Not Feeling Good’ feature. You can also access various resources
        using the link provided above. Next step is to fill in your journal
        about how you have been feeling and the things that you are grateful for
        today.
      </Typography>

      <Typography align="justify">
        {" "}
        Want to connect with your friends and share your mood. Provide us with
        the details of your closest support.
      </Typography>

      <Typography align="justify">
        Let us help you connect. Click below to submit the information.
      </Typography>
    </Stack>
  );
};

export default ProfileSummary;
