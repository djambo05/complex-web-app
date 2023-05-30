import React from "react";
import { MainContainer } from "./MainContainer";
import { Typography } from "@mui/material";
import { Form } from "./Form";
import { FileInput } from "./FileInput";
import { useForm } from "react-hook-form";

export const Step3 = () => {
  const { control, handleSubmit } = useForm();

  return (
    <MainContainer>
      <Typography>Step 3</Typography>
      <Form>
        <FileInput name="files" control={control} />
      </Form>
    </MainContainer>
  );
};
