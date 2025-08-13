import React, {useState} from "react";
import { Box, TextField } from "@mui/material";

function Search({ onSearch }) {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(search);
    }
  };

  return (
    <Box sx={{ pt: 5, px: 5 }}>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        fullWidth
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
}

export default Search;
