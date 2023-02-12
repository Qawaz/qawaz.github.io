import React, { Fragment } from 'react';
import Head from 'react-helmet';
// @ts-ignore
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
// @ts-ignore
import { theme } from '../common/theme/agencyModern';
// @ts-ignore
import ResetCSS from '../common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
// @ts-ignore
} from '../containers/AgencyModern/agencyModern.style';
// @ts-ignore
import { DrawerProvider } from '../common/contexts/DrawerContext';
// @ts-ignore
import Navbar from '../containers/AgencyModern/Navbar';
// @ts-ignore
import Banner from '../containers/AgencyModern/Banner';
// @ts-ignore
import Services from '../containers/AgencyModern/Services';
// @ts-ignore
import Features from '../containers/AgencyModern/Features';
// @ts-ignore
import WorkHard from '../containers/AgencyModern/WorkHard';
// @ts-ignore
import UltimateFeature from '../containers/AgencyModern/UltimateFeature';
// @ts-ignore
import Customer from '../containers/AgencyModern/Customer';
// @ts-ignore
import News from '../containers/AgencyModern/News';
// @ts-ignore
import Subscribe from '../containers/AgencyModern/Subscribe';
// @ts-ignore
import Footer from '../containers/AgencyModern/Footer';

const AgencyModern = () => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Head>
                    <title>Qawaz - App Development Company</title>
                    <meta name="theme-color" content="#FF825C" />
                    <meta name="Description" content="App Development Company" />

                    {/* Load google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=B612:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <ResetCSS />
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner />
                    <Services />
                    <Features />
                    <WorkHard />
                    <UltimateFeature />
                    <Customer />
                    {/*<News />*/}
                    <Subscribe />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default AgencyModern;