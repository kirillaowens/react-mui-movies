import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';

class Filters extends React.Component {
  render() {
    return (
      <Box sx={{ pt: 5, px: 5 }}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Filters</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={this.props.filter} 
            onChange={(e) => this.props.onFilterChange(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="movie" control={<Radio />} label="Movie" />
            <FormControlLabel value="series" control={<Radio />} label="Series" />
          </RadioGroup>
        </FormControl>
      </Box>
    );
  }
}

export default Filters;
