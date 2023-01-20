import React, {Fragment, PropsWithChildren} from "react";
import styled, {ThemeProvider} from "styled-components";
import Head from "react-helmet";
// @ts-ignore
import { theme } from '../../common/theme/agencyModern';
// @ts-ignore
import ResetCSS from '../../common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
// @ts-ignore
} from '../../containers/AgencyModern/agencyModern.style';
// @ts-ignore
import Sticky from 'react-stickynode';
// @ts-ignore
import Navbar from '../../containers/AgencyModern/Navbar';
// @ts-ignore
import { DrawerProvider } from '../../common/contexts/DrawerContext';
// @ts-ignore
import Footer from '../../containers/AgencyModern/Footer';

// @ts-ignore
import data from "../../common/data/AgencyModern"

const PadBox = styled.div`
  padding: 8em 3rem;
  max-width: 80%;
  align-self: center;

  & > * {
    padding-left: 24px;
  }
`

const contentPageLinks = {
    leftMenuItems: data.leftMenuItems.map((e : any) => ({...e, staticLink: true, path: "/"})),
    rightMenuItems: data.rightMenuItems.map((e : any) => ({...e, staticLink: true, path: "/"})),
    mobileMenuItems: data.mobileMenuItems.map((e : any) => ({...e, staticLink: true, path: "/"})),
}

export default function ContentPage(props: PropsWithChildren<{ title ?: string }>) {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Head>
                    <title>{props.title || "Qawaz - App Development Company"}</title>
                    <meta name="theme-color" content="#FF825C"/>
                    <meta name="Description" content="App Development Company"/>

                    {/* Load google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=B612:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <ResetCSS/>
                <GlobalStyle/>
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar {...contentPageLinks}/>
                        </DrawerProvider>
                    </Sticky>
                    <PadBox>
                        {props.children}
                        <Footer />
                    </PadBox>
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    )
}