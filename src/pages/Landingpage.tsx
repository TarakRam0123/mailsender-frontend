import { Box } from "@mui/material";
import Mailcontent from "../components/Mailcontent";
import SendOptions from "../components/SendOptions";
import Output from "../components/Output";
import { useState } from "react";

const Landingpage = () => {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <Box
      sx={{
        height: "84vh",
        display: "flex",
      }}
    >
      {/* LEFT : MAIL CONTENT */}
      <Box
        sx={{
          flex: 3,

          overflow: "hidden",
        }}
      >
        <Mailcontent files={files} setFiles={setFiles} />
      </Box>

      {/* RIGHT : ACTION + OUTPUT */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
          height: "580px",
        }}
      >
        {/* SEND OPTIONS */}

        <SendOptions files={files} />

        {/* OUTPUT */}
        <Output />
      </Box>
    </Box>
  );
};

export default Landingpage;
