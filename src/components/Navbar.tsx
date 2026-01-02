import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MessagesIcon from "@mui/icons-material/Message";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, useLogoutMutation } from "../redux/apiSlice";
import UserSubNavbar from "./UserSubNavbar";
import { apiSlice } from "../redux/apiSlice";
import { useDispatch } from "react-redux";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetUserQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const isLoggedIn = data?.status === true && !error;

  const handleLogout = async () => {
    await logout().unwrap();
    dispatch(apiSlice.util.resetApiState());
    navigate("/");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* Left */}
          <Box display="flex" alignItems="center" flexGrow={1}>
            <MailIcon sx={{ mr: 1 }} />
            <Button
              color="inherit"
              onClick={() => navigate(isLoggedIn ? "/home" : "/")}
              sx={{ fontSize: "1.4rem", fontWeight: 700 }}
            >
              MailSender
            </Button>
          </Box>

          {/* Right */}
          <Box display="flex" alignItems="center" gap={2}>
            {!isFetching && isLoggedIn ? (
              <>
                <Tooltip title="Messages">
                  <IconButton onClick={() => navigate("/home")} color="inherit">
                    <MessagesIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Mail">
                  <IconButton
                    onClick={() => navigate("/mail/provider")}
                    color="inherit"
                  >
                    <MailIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
                  <IconButton
                    onClick={() => navigate("/profile")}
                    color="inherit"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Logout">
                  <IconButton onClick={handleLogout} color="inherit">
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <>
                <Button
                  startIcon={<LoginIcon />}
                  onClick={() => navigate("/login")}
                  color="inherit"
                >
                  Login
                </Button>

                <Button
                  startIcon={<HowToRegIcon />}
                  onClick={() => navigate("/register")}
                  variant="contained"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Secondary navbar */}
      {!isFetching && isLoggedIn && (
        <UserSubNavbar username={data?.userDetails?.name} />
      )}
    </>
  );
};

export default Navbar;
