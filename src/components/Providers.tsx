
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {dark} from "../theme/themes";
import {ThemeProvider} from "styled-components";

export default function Providers(props) {
    const theme = createMuiTheme(dark)
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </MuiThemeProvider>
    )
}
