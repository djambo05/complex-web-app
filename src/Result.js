import React, { useState } from "react";
import { MainContainer } from "./components/MainContainer";
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
import { useData } from "./DataContext";
import { Link } from "react-router-dom";
import { InsertDriveFile } from "@mui/icons-material";
import { PrimaryButton } from "./components/PrimaryButton";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import env from "./env";
import { CheckButton } from "./components/CheckButton";

const Result = () => {
  const { data } = useData();
  const { files } = data;
  const [success, setSuccess] = useState(false);
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");

  const onSubmit = async () => {
    const formData = new FormData();
    const res = await fetch(env.url, {
      method: "POST",
      body: formData,
    });

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }

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
      <Typography component="h2" variant="h5" sx={{ marginBottom: "30px" }}>
        Form Values
      </Typography>
      <TableContainer sx={{ marginBottom: "30px" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Field</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1] ? entry[1] : "-"}</TableCell>
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
      <CheckButton>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Check Form
        </Link>
      </CheckButton>
    </MainContainer>
  );
};

export default Result;
