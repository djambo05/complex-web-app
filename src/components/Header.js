import React from "react";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <Typography
      sx={{
        fontFamily: "Permanent Marker",
        margin: "15px 0px 10px",
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta",
      }}
      component="h1"
      variant="h5"
    >
      The Ultimate From Challenge
    </Typography>
  );
};
