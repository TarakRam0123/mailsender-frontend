import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    console.log("Logged Out");
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          RMS
        </Typography>

        {/* Desktop View */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              color="inherit"
              startIcon={<MailIcon />}
              onClick={() => navigate("/messages")}
            >
              Messages
            </Button>

            <Button
              color="inherit"
              startIcon={<AccountCircleIcon />}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>

            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        )}

        {/* Mobile View */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  navigate("/messages");
                  handleMenuClose();
                }}
              >
                <MailIcon /> &nbsp; Messages
              </MenuItem>

              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleMenuClose();
                }}
              >
                <AccountCircleIcon /> &nbsp; Profile
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleMenuClose();
                }}
              >
                <LogoutIcon /> &nbsp; Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
