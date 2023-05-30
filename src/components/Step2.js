import React from "react";
import { MainContainer } from "./MainContainer";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Form } from "./Form";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const hasPhone = watch("hasPhone");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/step3");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          id="email"
          type="text"
          label="Email"
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={<Checkbox {...register("hasPhone")} color="primary" />}
          label="Do you have a phone number?"
        />
        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
