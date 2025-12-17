import React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MessagesIcon from "@mui/icons-material/Message";
import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { useLogoutMutation } from "../redux/apiSlice";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const isLoggedIn = Boolean(sessionStorage.getItem("token"));

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      sessionStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main",
        height: "64px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ minHeight: "64px !important" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <MailIcon sx={{ mr: 1, fontSize: "1.8rem" }} />
          <Button
            color="inherit"
            sx={{
              fontWeight: 700,
              fontSize: "1.8rem",
              letterSpacing: "-1px",
              cursor: "pointer",
            }}
            onClick={isLoggedIn ? () => navigate("/home") : () => navigate("/")}
          >
            MailSender
          </Button>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          {isLoggedIn ? (
            // Logged In Menu
            <>
              <Tooltip title="Messages">
                <IconButton
                  color="inherit"
                  onClick={() => navigate("/home")}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    mx: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <MessagesIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Mail">
                <IconButton
                  color="inherit"
                  onClick={() => navigate("/mail/provider")}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    mx: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <MailIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Profile">
                <IconButton
                  color="inherit"
                  onClick={() => navigate("/profile")}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    mx: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton
                  color="inherit"
                  onClick={handleLogout}
                  sx={{
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    mx: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            // Logged Out Menu
            <>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<LoginIcon />}
                onClick={() => navigate("/login")}
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<HowToRegIcon />}
                onClick={() => navigate("/register")}
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                  },
                }}
              >
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
