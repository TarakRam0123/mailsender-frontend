import { Container, Box, TextField } from "@mui/material";
import { useState } from "react";
import MultiFileAttachment from "./MultiFileAttachment";
import Navbar from "./Navbar";

const Mailcontent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [subject, setsubject] = useState("");
  const [body, setbody] = useState("");

  return (
    <>
      <Container maxWidth="lg">
        {/* <Navbar /> */}
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Message"
            placeholder="Type your message here..."
            multiline
            fullWidth
            minRows={20} // makes it big like an email body
            maxRows={30}
            // value={value}
            // onChange={onChange}
            sx={{
              "& .MuiInputBase-root": {
                alignItems: "flex-start", // top-align text
                // paddingTop: "12px",
              },
            }}
          />
          <MultiFileAttachment
            onChange={(selected) => setFiles(selected)}
            maxFileSizeInBytes={5 * 1024 * 1024} // 5MB per file
            maxFiles={6}
          />
        </Box>
        {/* <button onClick={handleSubmit}>Send</button> */}
      </Container>
    </>
  );
};

export default Mailcontent;
