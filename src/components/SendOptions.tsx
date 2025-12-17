import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const SendOptions = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const mails = message.split(",").map((mail) => mail.trim());
    console.log("Sending message to:", mails);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        label="Enter message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ width: "90%" }}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSend}
        sx={{
          height: 56,
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default SendOptions;
