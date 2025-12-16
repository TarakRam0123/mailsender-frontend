import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/apiSlice";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      console.log("register success", res);
      if (res.status) {
        navigate("/login");
      }
    } catch (error) {
      console.log("register failed ", error);
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
          Register
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            fullWidth
            sx={{ mb: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Register
          </Button>
        </form>

        <Typography textAlign="center">
          Already have an account?{" "}
          <Link
            sx={{ cursor: "pointer", color: "primary.main" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
