import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4caf50",
        },
        secondary: {
            main: "#03a9f4",
        },
        background: {
            default: "#df8a8a",
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
    },
});

export default theme;
