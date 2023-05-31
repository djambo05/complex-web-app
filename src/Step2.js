import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import * as yup from "yup";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { useData } from "./DataContext";
import { PATH } from "./App";

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

const Step2 = () => {
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      email: data.email,
      phoneNumber: data.phoneNumber,
      hasPhone: data.hasPhone,
    },
  });
  const hasPhone = watch("hasPhone");
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate(`${PATH}/step3`);
    setValues(data);
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
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              {...register("hasPhone")}
              color="primary"
            />
          }
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

export default Step2;
