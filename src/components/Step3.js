import React from "react";
import { MainContainer } from "./MainContainer";
import { Typography } from "@mui/material";
import { Form } from "./Form";
import { FileInput } from "./FileInput";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";

export const Step3 = () => {
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: { files: data.files },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/result");
    setValues(data);
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
