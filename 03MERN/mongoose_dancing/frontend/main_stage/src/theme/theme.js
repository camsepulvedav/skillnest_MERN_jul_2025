import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9333ea",
      light: "#c084fc",
      dark: "#8019e6",
      contrastText: "#f5f5f5",
    },
    secondary: {
      main: "#3f2951",
      light: "#5f3e7a",
      dark: "#1a1122",
      contrastText: "#f5f5f5",
    },
    background: {
      default: "#342244",
      paper: "#f5ebe0",
    },
    text: {
      primary: "#aa90c4",
      secondary: "#aa90c4",
    },
    divider: "#7016ca",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#f5ebe0",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#342244",
    },
    body1: {
      fontSize: "1rem",
      color: "#342244",
    },
    body2: {
      fontSize: "1rem",
      color: "#2d1b4e",
    },
    body3: {
      fontSize: "1rem",
      color: "#424242",
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "10px 10px 12px 0 rgba(0, 0, 0, 0.75)",
            "&:hover": {
              boxShadow: "15px 15px 20px 0 rgba(0, 0, 0, 0.85)",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "10px 10px 12px 0 rgba(0, 0, 0, 0.75)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            fontWeight: 500,
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#8019e6",
            textDecoration: "none",
            fontWeight: 500,
            "&:hover": {
              color: "#c084fc",
              textDecoration: "underline",
            },
            "&:visited": {
              color: "#9333ea",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#23182e",
              "& fieldset": {
                borderColor: "#aa90c4",
              },
              "&:hover fieldset": {
                borderColor: "#c084fc",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#9333ea",
              },
            },
            "& .MuiInputBase-input": {
              color: "#f5f5f5",
            },
            "& .MuiInputLabel-root": {
              color: "#aa90c4",
            },
          },
          "& .MuiInputLabel-input::placerholder": {
            color: "#aa90c4",
            opacity: 0.6,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(170, 144, 196, 0.2)",
        },
        head: {
          backgroundColor: "#9333ea",
          color: "#f5f5f5",
          fontWeight: 600,
        },
        body: {
          color: "#342244",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#aa90c4 ",
          "&.Mui-checked": {
            color: "#9333ea",
          },
          "&:hover": {
            backgroundColor: "rgba(147, 51, 234, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
