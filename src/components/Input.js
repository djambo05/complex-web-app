import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    ></TextField>
  );
});
