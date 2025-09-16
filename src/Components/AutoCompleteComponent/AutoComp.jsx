import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Players from "../../Data/Players.json";
import Teams from "../../Data/Teams.json";

export default function AutoComp({ categ,setchoix }) {

  const options = useMemo(() => {
    if (categ === "team") {
      return Array.from(new Set(Teams.map(t => t.title)));
    }
    return Array.from(new Set(Players.map(p => p.title)));
  }, [categ]);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        disablePortal
        id="auto-complete"
        options={options}
        renderInput={(params) => (
          <TextField {...params} label="Votre Reponse"
          />
        )}
        sx={{ width: 300 }}
        className="mx-3"
        onInputChange={(event, value)=>{
          setchoix(value)
        }}
       
      />
    </Stack>
  );
}
