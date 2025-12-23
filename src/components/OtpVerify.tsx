import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const OTP_LENGTH = 6;

const OtpVerify: React.FC = () => {
  const navigate = useNavigate();

  const [email] = useState("panugantilokeshwar@gmail.com");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    console.log("Verify OTP:", enteredOtp);
    // API call here
  };

  return (
    <Box
      minHeight="91.5vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
      p={2}
    >
      <Paper sx={{ width: 420, p: 4 }}>
        <Typography variant="h6" mb={2}>
          Verify Email
        </Typography>

        {/* Email Row */}
        <Box display="flex" alignItems="center" mb={3}>
          <Typography color="text.secondary" flex={1}>
            {email}
          </Typography>
          <IconButton
            size="small"
            onClick={() => {
              navigate("/register");
            }}
          >
            <EditIcon color="primary" />
          </IconButton>
        </Box>

        {/* OTP Inputs */}
        <Box display="flex" gap={1.5} justifyContent="center" mb={4}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputsRef.current[index] = el)}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 600,
                },
              }}
              sx={{ width: 50 }}
            />
          ))}
        </Box>

        {/* Actions */}
        <Box display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/register");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleVerify}
            disabled={otp.some((d) => d === "")}
          >
            Verify
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default OtpVerify;
