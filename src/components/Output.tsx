import { Typography, Box } from "@mui/material";

type OutputProps = {
  data?: string;
};

const Output = ({ data }: OutputProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        p: 2,
        overflowY: "scroll",
        border: 1,
        borderColor: "grey.400",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" gutterBottom color="primary.main">
        Sent Mails
      </Typography>

      <Typography variant="body2" color="primary.main">
        {data || "No sent mails available"}
      </Typography>
    </Box>
  );
};

export default Output;
