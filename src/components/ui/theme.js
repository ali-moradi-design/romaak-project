import { createTheme } from "@mui/material/styles";

const purple = "#644B91";
const dark = "#212121";

const darkPink = "#8C7CE0";
const pink = "#D34D91";
const darkBlue = "#818AB3";
const grey = "#BBBCBC";
const lightBlue = "#ACB0CE";
const navyBlue = "#2B324A";
const white = "#fff";
const black = "#000";
const yellow = "#FFDD00";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1812
    }
  },
  palette: {
    common: {
      navyBlue: navyBlue,
      pink: pink,
      darkPink: darkPink,
      gray: grey,
      purple: purple,
      white: white,
      black: black,
      lightBlue: lightBlue,
      yellow: yellow
    },
    primary: {
      main: "#556f23"
    },
    secondary: {
      main: dark
    }
  },
  // direction: "rtl",
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      "Urbanist",
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: dark,
      lineHeight: 1.5
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: dark,
      lineHeight: 1.5
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.8rem",
      color: dark
    },
    h4: {
      fontSize: "1.6rem",
      color: dark,
      fontWeight: "normal"
    },
    h5: {
      fontWeight: "normal",
      fontSize: "1.4rem",
      color: dark,
      lineHeight: 1
    },
    h6: {
      fontWeight: "normal",
      fontSize: "1.2rem",
      color: dark,
      lineHeight: 1
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: dark
    },
    subtitle2: {
      color: dark,
      fontWeight: 300,
      fontSize: "0.9rem",
      lineHeight: 1
    },
    body1: {
      fontSize: "1rem",
      color: dark,
      fontWeight: "normal"
      // lineHeight: 1.5,
    },
    body2: {
      fontSize: "1.6rem",
      color: white,
      fontWeight: "normal"
      // lineHeight: 1.5,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: dark
    },
    boxNavyBlue: {
      background: "linear-gradient(to bottom right, #424768 , #3A3F5D,#2B324A)",
      borderRadius: "3rem",
      boxShadow: "0 2px 21px 0"
    },
    navyBlueGradient: {
      background: "linear-gradient(to bottom right, #424768 , #3A3F5D,#2B324A)"
    },
    blackShadow: {
      boxShadow: "0 2px 21px 0"
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          font-size: 62.5%;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #000;
        }
        body {
          background-color: #fff;
          box-sizing: border-box;
          font-size: 62.5%;
          overflow: scroll;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Baloo Tammudu 2", "Yekan Bakh", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        `
    }
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%"
        }
      }
    }
  }
});

export default theme;
