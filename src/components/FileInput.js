import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";
import { CloudUpload, InsertDriveFile } from "@mui/icons-material";

export const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => {
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper variant="outlined" {...getRootProps}>
                <CloudUpload />
                <input {...getInputProps} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f, index) => {
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>;
            })}
          </List>
        </>;
      }}
    />
  );
};
