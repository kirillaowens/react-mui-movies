import { Box, CircularProgress } from "@mui/material";

function Preloader() {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flex: 1}}>
      <CircularProgress/>
    </Box>
  )
}

export default Preloader