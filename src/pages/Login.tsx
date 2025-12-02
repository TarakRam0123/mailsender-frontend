import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
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
        sx={{
          padding: 3,
          width: 350,
          backgroundColor: "background.paper",
        }}
        elevation={3}
      >
        <Typography
          variant="h5"
          textAlign="center"
          marginBottom={3}
          color="primary.main"
          fontWeight={600}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            fullWidth
            type="password"
            sx={{ mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
            sx={{ cursor: "pointer", color: "primary.main" }}
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
