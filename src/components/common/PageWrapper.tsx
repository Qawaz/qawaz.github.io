import CustomHelmet from "./CustomHelmet";
import { GlobalStyles } from "./GlobalStyles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { dark } from "../../theme/themes";
import { ThemeProvider } from "styled-components";

interface PageProps { title?: string }

export default function PageWrapper(props: React.PropsWithChildren<PageProps>) {
    return (
        <Providers>
            <CustomHelmet title={"Codeckle - " + (props.title || "Software Solutions")} />
            <GlobalStyles />
            {props.children}
        </Providers>
    )
}

export function Providers(props) {
    const theme = createMuiTheme(dark)
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </MuiThemeProvider>
    )
}