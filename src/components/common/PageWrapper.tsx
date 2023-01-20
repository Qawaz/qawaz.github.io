import {GlobalStyles} from "./GlobalStyles";
import {dark} from "../../theme/themes";
import {ThemeProvider} from "styled-components";
import React from "react";
import Helmet from "react-helmet"

interface PageProps {
    title?: string
}

export default function PageWrapper(props: React.PropsWithChildren<PageProps>) {
    return (
        <Providers>
            <Helmet>
                <link rel="icon" href="/favicon.png"/>
                <title>{props.title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            <GlobalStyles/>
            {props.children}
        </Providers>
    )
}

export function Providers(props: React.PropsWithChildren<any>) {
    const theme = dark
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}