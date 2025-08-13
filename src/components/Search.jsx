import React from "react";
import { Box, TextField } from "@mui/material";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.search);
    }
  };

  render() {
    return (
      <Box sx={{ pt: 5, px: 5 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          fullWidth
          value={this.state.search}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </Box>
    );
  }
}

export default Search;
