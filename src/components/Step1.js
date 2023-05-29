import React from "react";
import { MainContainer } from "./MainContainer";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Form } from "./Form";
import { PrimaryButton } from "./PrimaryButton";

export const Step1 = () => {
  const { register } = useForm({ mode: "onBlur" });
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step1
      </Typography>
      <Form>
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="First Name"
        />
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Last Name"
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
