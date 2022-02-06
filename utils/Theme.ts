import { createTheme } from "@mui/material/styles";
import { teal, indigo, pink, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: indigo[500],
    },
    error: {
      main: pink["A400"],
    },
    success: {
      main: teal["A400"],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 666,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
