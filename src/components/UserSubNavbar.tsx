import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { theme } from "../hooks/theme";

interface Props {
  username: string;
}

const UserSubNavbar: React.FC<Props> = ({ username }) => {
  return (
    <Box
      sx={{
        height: "45px",
        // backgroundColor: "#f5f5f5",
        // borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        px: 3,
        gap: 2,
        borderRadius: "30px",
      }}
    >
      <Avatar>{username.charAt(0).toUpperCase()}</Avatar>

      <Typography fontWeight={600} color={theme.palette.primary.main}>
        {username}
      </Typography>
    </Box>
  );
};

export default UserSubNavbar;
