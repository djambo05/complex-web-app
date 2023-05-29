import React from "react";
import { Button } from "@mui/material";

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{ margin: "15px 0px 10px" }}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};
