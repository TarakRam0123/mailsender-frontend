import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useSendMailMutation } from "../redux/apiSlice";
type MailcontentProps = {
  files: File[];
};
const SendOptions: React.FC<MailcontentProps> = ({ files }) => {
  const [email, setEmail] = useState<string>("");
  const [sendMail, { isLoading }] = useSendMailMutation();

  const handleSend = async () => {
    try {
      if (!email.trim()) return;

      const recipients = email
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

      for (const to of recipients) {
        const formData = new FormData();
        formData.append("to", to);

        files.forEach((file) => {
          formData.append("files", file); // KEY MUST MATCH
        });

        await sendMail(formData).unwrap();
      }
      setEmail("");
      console.log("All mails sent");
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        width: "100%",
        marginTop: 2.5,
      }}
    >
      <TextField
        label="Enter message"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: "90%", backgroundColor: "background.paper" }}
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
        disabled={isLoading}
      >
        Send
      </Button>
    </Box>
  );
};

export default SendOptions;
