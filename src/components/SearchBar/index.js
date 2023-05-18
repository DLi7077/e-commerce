import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function SearchBar(props) {
  return (
    <Autocomplete
      freeSolo
      options={props.options}
      disableClearable
      style={{
        width: "100%",
        marginBottom: "1rem",
        marginLeft: "auto",
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for an item"
          InputProps={{
            ...params.InputProps,
            type: "search",
            color: "primary",
          }}
        />
      )}
    />
  );
}
