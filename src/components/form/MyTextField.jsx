import { TextField } from "@mui/material";
import React, { memo } from "react";

const MyTextField = props => {
  const { errors, ...rest } = props;
  console.log(props);
  return <TextField variant="standard" {...rest} error={Object.keys(errors).includes(props.label)} helperText={errors.Title} />;
};

export default memo(MyTextField);
