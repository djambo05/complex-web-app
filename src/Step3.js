import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { FileInput } from "./components/FileInput";
import { PrimaryButton } from "./components/PrimaryButton";

const Step3 = () => {
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

export default Step3;
