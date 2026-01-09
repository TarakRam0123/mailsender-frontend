import React, { useEffect, useState } from "react";
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
import ChangePasswordModal from "./ChangePasswordModal";
import { successToast } from "../utils/toast";

const Profile: React.FC = () => {
  const theme = useTheme();
  const { data, refetch } = useGetUserQuery();
  const [updateUser] = useUpdateUserMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    email: "",
    avatar: "",
    mobile: "",
    bio: "",
  });

  /* 🔥 Sync API data to state */
  useEffect(() => {
    if (data?.userDetails) {
      setProfileDetails({
        name: data.userDetails.name ?? "",
        email: data.userDetails.email ?? "",
        avatar: data.userDetails.avatar ?? "",
        mobile: data.userDetails.mobile ?? "",
        bio: data.userDetails.bio ?? "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await updateUser(profileDetails).unwrap();
      if (res?.status) {
        successToast(res?.message);
        setIsEditing(false);
        refetch();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      minHeight="84vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Paper sx={{ width: "100%", maxWidth: 1000, p: 3 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Profile</Typography>

          {!isEditing ? (
            <Button variant="outlined" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSave}>
              <SaveIcon />
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box display="flex" gap={4}>
          {/* Avatar */}
          <Box
            width={250}
            alignItems="center"
            display="flex"
            flexDirection="column"
          >
            <Box position="relative">
              <Avatar
                src={profileDetails.avatar}
                sx={{
                  width: 160,
                  height: 160,
                  bgcolor: theme.palette.primary.main,
                  fontSize: 48,
                }}
              >
                {!profileDetails.avatar && profileDetails.name?.[0]}
              </Avatar>

              {isEditing && (
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    bgcolor: "background.paper",
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

          {/* Details */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              name="name"
              value={profileDetails.name}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="mobile"
              value={profileDetails.mobile}
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

            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" color="error">
                Close Account
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(true)}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      <ChangePasswordModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default Profile;
