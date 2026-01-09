import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useChangePasswordMutation } from "../redux/apiSlice";
import { errorToast, successToast } from "../utils/toast";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

const ChangePasswordModal: React.FC<Props> = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [changePassword] = useChangePasswordMutation();
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };
  const resetState = () => {
    setPassword({
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({
      newPassword: "",
      confirmPassword: "",
    });
    setShowPassword(false);
  };
  const handleModalClose = () => {
    resetState();
    handleClose();
  };

  /* 🔥 Validation Logic */
  const validate = () => {
    let tempErrors = { newPassword: "", confirmPassword: "" };

    // if (!passwordRegex.test(password.newPassword)) {
    //   tempErrors.newPassword =
    //     "Min 8 chars, uppercase, lowercase, number & special char required";
    // }

    if (password.confirmPassword !== password.newPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return !tempErrors.newPassword && !tempErrors.confirmPassword;
  };

  const handleSubmit = async () => {
    try {
      if (!validate()) return;

      // 👉 Call API here
      const res = await changePassword({
        newPassword: password.newPassword,
      }).unwrap();
      if (res?.status) {
        successToast(res?.message);
        handleModalClose();
      }
    } catch (error: any) {
      errorToast(error?.data?.message || "Password change failed");
      console.log(error);
    }
  };

  return (
    <Modal open={open}>
      <Box sx={style}>
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleModalClose}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" mb={2}>
          Change Password
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {/* New Password */}
          <FormControl error={!!errors.newPassword}>
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              name="newPassword"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
            <FormHelperText>{errors.newPassword}</FormHelperText>
          </FormControl>

          {/* Confirm Password */}
          <FormControl error={!!errors.confirmPassword}>
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
            <FormHelperText>{errors.confirmPassword}</FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!password.newPassword || !password.confirmPassword}
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChangePasswordModal;
