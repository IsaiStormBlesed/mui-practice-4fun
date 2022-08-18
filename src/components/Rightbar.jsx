import { Box } from "@mui/material";

export function Rightbar() {
  return (
    <Box
      bgcolor="lightgoldenrodyellow"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}
