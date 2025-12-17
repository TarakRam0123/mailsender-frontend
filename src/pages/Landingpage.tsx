import { Box, Divider } from "@mui/material";
import Mailcontent from "../components/Mailcontent";
import SendOptions from "../components/SendOptions";
import Output from "../components/Output";

const Landingpage = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        bgcolor: "#fafafa",
      }}
    >
      {/* LEFT : MAIL CONTENT */}
      <Box
        sx={{
          flex: 3,
          borderRight: "1px solid #e0e0e0",
          overflow: "hidden",
        }}
      >
        <Mailcontent />
      </Box>

      {/* RIGHT : ACTION + OUTPUT */}
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 2,
        }}
      >
        {/* SEND OPTIONS */}

        <SendOptions />

        <Divider />

        {/* OUTPUT */}
        <Output />
      </Box>
    </Box>
  );
};

export default Landingpage;
