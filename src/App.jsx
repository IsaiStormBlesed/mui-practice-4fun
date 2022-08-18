import { Box, Stack } from "@mui/material";
import { Leftbar } from "./components/Leftbar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
