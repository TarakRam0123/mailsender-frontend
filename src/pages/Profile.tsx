import React, { useState } from "react";
import {
  Box,
  Avatar,
  IconButton,
  TextField,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { useTheme } from "@mui/material/styles";
import { useGetUserQuery, useUpdateUserMutation } from "../redux/apiSlice";

const Profile: React.FC = () => {
  const theme = useTheme();
  const { data, refetch } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [profileDetails, setprofileDetails] = useState({
    name: data?.userDetails.name,
    email: data?.userDetails.email,
    avatar: data?.userDetails.avatar,
    mobile: data?.userDetails.mobile,
    bio: data?.userDetails.bio,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setprofileDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    try {
      if (!isEditing) {
        setIsEditing(true);

        return;
      }
      const res = await updateUser(profileDetails).unwrap();

      if (res?.status) {
        setIsEditing(false);
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarEdit = () => {
    console.log("Avatar edit clicked");
    // 🔹 Open file picker or modal here
  };

  return (
    <Box
      minHeight="84vh"
      bgcolor="background.default"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 1000,
          p: 3,
          bgcolor: "background.paper",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Profile</Typography>

          {!isEditing ? (
            <Button variant="outlined" onClick={handleEdit}>
              <EditIcon />
            </Button>
          ) : (
            <Box display="flex" gap={1}>
              <Button variant="contained" onClick={handleEdit}>
                <SaveIcon />
              </Button>
            </Box>
          )}
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box display="flex" gap={4}>
          {/* LEFT SIDE – AVATAR */}
          <Box
            width={250}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box position="relative">
              <Avatar
                sx={{
                  width: 160,
                  height: 160,
                  bgcolor: theme.palette.primary.main,
                  fontSize: 48,
                }}
              >
                {profileDetails.avatar}
              </Avatar>

              {isEditing && (
                <IconButton
                  onClick={handleAvatarEdit}
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    bgcolor: "background.paper",
                    boxShadow: 1,
                  }}
                >
                  <EditIcon color="primary" />
                </IconButton>
              )}
            </Box>

            <Typography mt={2} fontWeight={600}>
              {profileDetails.name}
            </Typography>
            <Typography fontSize={13} color="text.secondary">
              {profileDetails.email}
            </Typography>
          </Box>

          {/* RIGHT SIDE – DETAILS */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              name="name"
              value={profileDetails.name}
              fullWidth
              disabled={!isEditing}
              onChange={handleChange}
            />

            <TextField
              label="Phone Number"
              name="mobile"
              value={profileDetails?.mobile}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Bio"
              name="bio"
              value={profileDetails.bio}
              onChange={handleChange}
              multiline
              rows={3}
              disabled={!isEditing}
              fullWidth
            />

            <Divider sx={{ my: 2 }} />

            <Box display="flex" justifyContent={"space-between"}>
              <Button variant="outlined" color="error">
                Close Account
              </Button>
              <Button variant="outlined" color="error">
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
