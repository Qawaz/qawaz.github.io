import CustomHelmet from "./CustomHelmet";
import { GlobalStyles } from "./GlobalStyles";
import {createMuiTheme, createTheme, MuiThemeProvider} from "@material-ui/core";
import { dark } from "../../theme/themes";
import { ThemeProvider } from "styled-components";
import React from "react";

interface PageProps { title?: string }

export default function PageWrapper(props: React.PropsWithChildren<PageProps>) {
    return (
        <Providers>
            <CustomHelmet title={"Qawaz - " + (props.title || "Software Solutions")} />
            <GlobalStyles />
            {props.children}
        </Providers>
    )
}

export function Providers(props : React.PropsWithChildren<any>) {
    const theme = createTheme(dark)
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </MuiThemeProvider>
    )
}