import React from "react";
import { MainContainer } from "./MainContainer";
import { Typography } from "@mui/material";
import { Form } from "./Form";
import { FileInput } from "./FileInput";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";

export const Step3 = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/result");
  };

  return (
    <MainContainer>
      <Typography>Step 3</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
