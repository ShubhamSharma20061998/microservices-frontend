import { Button } from "@mui/material";
import React, { memo } from "react";
import { IoMdSend } from "react-icons/io";

const SubmitButton = props => {
  return (
    <Button variant="contained" endIcon={<IoMdSend />} {...props} type="submit">
      submit
    </Button>
  );
};

export default memo(SubmitButton);
