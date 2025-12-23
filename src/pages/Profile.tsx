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
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const Profile: React.FC = () => {
  const theme = useTheme();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Lokeshwar Panuganti",
    email: "panugantilokeshwar@gmail.com",
    phone: "",
    bio: "",
  });

  // Backup for cancel
  const [draftProfile, setDraftProfile] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setDraftProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(draftProfile);
    setIsEditing(false);
  };

  const handleSave = () => {
    // 🔹 API CALL GOES HERE
    console.log("Saved Profile:", profile);

    setIsEditing(false);
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
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEdit}
            >
              Edit
            </Button>
          ) : (
            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                startIcon={<CloseIcon />}
                onClick={handleCancel}
              >
                Cancel
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
                {profile.name[0]}
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
              {profile.name}
            </Typography>
            <Typography fontSize={13} color="text.secondary">
              {profile.email}
            </Typography>
          </Box>

          {/* RIGHT SIDE – DETAILS */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              value={profile.name}
              InputProps={{ readOnly: true }}
              fullWidth
            />

            <TextField
              label="Email"
              value={profile.email}
              InputProps={{ readOnly: true }}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
              fullWidth
            />

            <TextField
              label="Bio"
              name="bio"
              value={profile.bio}
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
