import React from "react";

export const Form = ({ children, ...props }) => {
  return (
    <form style={{ width: "100%", marginTop: "5px" }} noValidate {...props}>
      {children}
    </form>
  );
};
