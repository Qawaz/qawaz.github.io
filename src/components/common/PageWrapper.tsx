import {dark} from "../../theme/themes";
import {ThemeProvider} from "styled-components";
import React from "react";

export function Providers(props: React.PropsWithChildren<any>) {
    const theme = dark
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}