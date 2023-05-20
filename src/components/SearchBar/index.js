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
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: "hsl(170, 10%, 10%)",
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
