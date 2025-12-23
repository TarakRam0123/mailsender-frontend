import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useGetDraftQuery } from "../redux/apiSlice";
type MailcontentProps = {
  files: File[];
};
const SendOptions: React.FC<MailcontentProps> = ({ files }) => {
  const [email, setEmail] = useState<string>("");
  const { data, isLoading } = useGetDraftQuery();

  if (!isLoading) {
    console.log(data?.draft?.subject, "send options");
  }

  const handleSend = () => {
    if (!email.trim()) return;
    const mails = email.split(",").map((mail) => mail.trim());
    console.log("Sending message to:", mails);
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
      >
        Send
      </Button>
    </Box>
  );
};

export default SendOptions;
