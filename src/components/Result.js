import React, { useState } from "react";
import { MainContainer } from "./MainContainer";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useData } from "../DataContext";
import { Link } from "react-router-dom";
import { InsertDriveFile } from "@mui/icons-material";
import { PrimaryButton } from "./PrimaryButton";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import env from "../env";

export const Result = () => {
  const [success, setSuccess] = useState(false);
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  console.log(entries);
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();
    console.log(data);

    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch(env.url, {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      Swal.fire("Great job", "You've passed the challegne", "success");
      setSuccess(true);
    }
  };
  if (success) {
    return <Confetti />;
  }
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Form Values
      </Typography>
      <TableContainer sx={{ marginBottom: "30px" }} component={Paper}>
        <Table sx={{ marginBottom: "30px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h5">
            Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <PrimaryButton onClick={() => onSubmit()}>Submit</PrimaryButton>
      <Link to="/">Start Over</Link>
    </MainContainer>
  );
};
