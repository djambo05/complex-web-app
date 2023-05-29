import { Container } from "@mui/material";
import React from "react";

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      container="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};
