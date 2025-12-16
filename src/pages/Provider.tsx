import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const API = import.meta.env.VITE_API_URL;

const Provider = () => {
  const [googleConnected, setGoogleConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/me/google`, { withCredentials: true })
      .then((res) => setGoogleConnected(res.data.googleConnected))
      .catch(() => {});
  }, []);
  useEffect(() => {
    if (googleConnected) {
      navigate("/mail/sendmail");
    }
  }, [googleConnected, navigate]);

  const connectGoogle = () => {
    window.location.href = `${API}/auth/google`;
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        px: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 420,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent sx={{ textAlign: "center", py: 4 }}>
          <GoogleIcon
            sx={{
              fontSize: 48,
              color: "primary.main",
              mb: 1.5,
            }}
          />

          <Typography variant="h5" fontWeight={700} gutterBottom>
            Gmail Integration
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Connect your Gmail account to send and manage emails directly from
            MailSender.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<GoogleIcon />}
            onClick={connectGoogle}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              py: 1.2,
            }}
          >
            Connect Gmail
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Provider;
