import { Typography, Box } from "@mui/material";
import { useGetPreviousMailsQuery } from "../redux/apiSlice";

// type OutputProps = {
//   data?: string;
// };

const Output = () => {
  const { data, isLoading } = useGetPreviousMailsQuery();
  console.log(data?.previousTo);
  return (
    <Box
      sx={{
        height: "80%",
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
      {data ? (
        data?.previousTo.map((item: any) => (
          <Typography variant="body2" color="primary.main">
            {item.email}
          </Typography>
        ))
      ) : (
        <Typography variant="body2" color="primary.main">
          {"No sent mails available"}
        </Typography>
      )}
    </Box>
  );
};

export default Output;
