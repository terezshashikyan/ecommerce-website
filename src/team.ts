import { Theme, createTheme } from "@mui/material";

export let MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#0D0A25",
      light: "white",
      contrastText: "#fff",
    },

    secondary: {
      main: '#fff',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },

    
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 375,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
});

const typography = (theme: Theme) => {
  return {
    h1: {
      marginTop: 16,
      fontSize: 48,


      [theme.breakpoints.down("md")]: {
        fontSize: 36,
        fontWeight: 400,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 800,

      [theme.breakpoints.down("md")]: {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  };
};

MuiTheme = createTheme(MuiTheme, {
  typography: {
    fontFamily: "Poppins Bold, 'Roboto', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
    ...typography(MuiTheme),
  },
});

  