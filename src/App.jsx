import GlobalStyles from "@mui/material/GlobalStyles";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Box } from "@mui/material";
import Main from "./layout/Main";

function App() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <GlobalStyles
          styles={{
            html: { margin: 0, padding: 0, height: "100%" },
            body: { margin: 0, padding: 0, height: "100%" },
            "#root": { height: "100%" },
          }}
        />
        <Header />
        <Main/>
        <Footer />
      </Box>
    );
}

export default App;
