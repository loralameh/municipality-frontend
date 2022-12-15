import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[200],
    },
  },

  typography: {
    allVariants: {
      color: green[900],
    },
  },
});

export default theme;
