import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#45818e",
    },
    secondary: {
      main: "#76a5af",
    },
    background: {
      default: "#d0e0e3",
      paper: "#f3f6f4",
    },
    text: {
      primary: "#000000",
      secondary: "#45818e",
    },
  },
  typography: {},
});

export default theme;
