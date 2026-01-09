import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/apiSlice";
import { errorToast, successToast } from "../utils/toast";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [login] = useLoginMutation();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      if (res.status) {
        navigate("/home");
        successToast(res.message);
      }
    } catch (error: any) {
      errorToast(error?.data?.message);
      console.error("Login failed", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: 350,
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          mb={3}
          color="primary.main"
          fontWeight={600}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <TextField
            label="Email"
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password (OutlinedInput version) */}
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              required
            />
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              mb: 2,
              backgroundColor: "primary.main",
              ":hover": { backgroundColor: "secondary.main" },
            }}
          >
            Login
          </Button>
        </form>

        <Typography textAlign="center">
          Don’t have an account?{" "}
          <Link
            component="button"
            sx={{ color: "primary.main" }}
            onClick={() => navigate("/register")}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
