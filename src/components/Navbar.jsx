import { LogoDev, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  gap: "20px",
}));

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            OnlyDev
          </Typography>
          <LogoDev
            sx={{ display: { xs: "block", sm: "none" } }}
            fontSize="large"
          />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={10} color="error">
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 30, height: 30 }}>OG</Avatar>
          </Icons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
