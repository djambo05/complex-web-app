import React from "react";
import { Button } from "@mui/material";

export const CheckButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{ margin: "15px 0px 10px" }}
      type="submit"
      fullWidth
      variant="contained"
      color="warning"
      {...props}
    >
      {children}
    </Button>
  );
};
