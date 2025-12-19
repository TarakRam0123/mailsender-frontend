import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

interface Props {
  username: string;
}

const UserSubNavbar: React.FC<Props> = ({ username }) => {
  return (
    <Box
      sx={{
        height: "48px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        px: 3,
        gap: 2,
      }}
    >
      <Avatar>{username.charAt(0).toUpperCase()}</Avatar>

      <Typography fontWeight={600}>{username}</Typography>
    </Box>
  );
};

export default UserSubNavbar;
