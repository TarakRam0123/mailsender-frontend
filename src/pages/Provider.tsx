import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useCheckGoogleQuery } from "../redux/apiSlice";

const API = "http://localhost:5500";

const Provider = () => {
  const navigate = useNavigate();

  // 🔥 RTK Query call (cookie auto-sent)
  const { data, isLoading, isError } = useCheckGoogleQuery();

  useEffect(() => {
    if (data?.googleConnected) {
      navigate("/mail/sendmail");
    }
  }, [data, navigate]);

  const connectGoogle = () => {
    // 🔥 Cookies are automatically sent in redirect
    window.location.href = `${API}/auth/google`;
  };

  if (isLoading) {
    return <Typography align="center">Checking Gmail connection...</Typography>;
  }

  if (isError) {
    return (
      <Typography align="center">Session expired. Please login.</Typography>
    );
  }

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
            Connect your Gmail account to send emails directly from MailSender.
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
