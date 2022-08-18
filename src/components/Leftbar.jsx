import { Box } from "@mui/material";

export function Leftbar() {
  return (
    <Box
      bgcolor="lightgreen"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Leftbar
    </Box>
  );
}
