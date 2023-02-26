import React from "react"

import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";
import {DemoContainer, DemoImage, DemoText} from "../../components/main/DemoSection";
import {FeatureBox, FeatureText} from "../../components/main/FeatureBox";
import LightDarkIcon from "../../icons/LightDarkIcon";
import CloudSyncIcon from "../../icons/CloudSyncIcon";
import SyncCircle from "../../icons/SyncCircle";
import {CustomMainButton} from "../../components/common/CustomMainButton";
import GooglePlayIcon from "../../icons/GooglePlayIcon";
import WebIcon from "../../icons/WebIcon";
import {Providers} from "../../components/common/PageWrapper";
import {Link} from "gatsby";
import WindowsIcon from "../../icons/WindowsIcon";
import {Typography} from "../../components/common/Typography";
import {useAppTheme} from "../../theme/themes";
// @ts-ignore
import Sticky from 'react-stickynode';
// @ts-ignore
import {theme} from '../../common/theme/agencyModern';
// @ts-ignore
import ResetCSS from '../../common/assets/css/style';
// @ts-ignore
import {DrawerProvider} from '../../common/contexts/DrawerContext';
// @ts-ignore
import Navbar from '../../containers/AgencyModern/Navbar';
// @ts-ignore
import Banner from '../../containers/AgencyModern/Banner';
// @ts-ignore
import Services from '../../containers/AgencyModern/Services';
// @ts-ignore
import Features from '../../containers/AgencyModern/Features';
// @ts-ignore
import WorkHard from '../../containers/AgencyModern/WorkHard';
// @ts-ignore
import UltimateFeature from '../../containers/AgencyModern/UltimateFeature';
// @ts-ignore
import Customer from '../../containers/AgencyModern/Customer';
// @ts-ignore
import News from '../../containers/AgencyModern/News';
// @ts-ignore
import Subscribe from '../../containers/AgencyModern/Subscribe';
// @ts-ignore
import Footer from '../../containers/AgencyModern/Footer';
import ContentPage from "../../components/page/ContentPage";

export default function NewPage() {
    return (
        <ContentPage>
            <Providers>
                <TimelinePage/>
            </Providers>
        </ContentPage>
    );
};

function TimelinePage() {

    const theme = useAppTheme()

    return (
        <div>
            <MainContainer>
                <MainSlide>
                    <SecondaryHeading variant={"h2"} style={{color: theme.palette.text.primary}} align={"center"}>
                        Meet &nbsp; <span style={{background: theme.palette.secondary.main}}>T</span>imeline
                    </SecondaryHeading>
                    <MainHeading variant={"h1"} style={{color: theme.palette.text.primary}} align={"center"}>
                        A Note Taking Tool
                    </MainHeading>
                    <MainDemoContainer>
                        <StaticImage
                            src={"../../images/demo-1.png"}
                            alt={"Demo First"}
                            width={1000}
                        />
                    </MainDemoContainer>
                </MainSlide>
            </MainContainer>
            <ContentContainer>
                <DemoSectionOne/>
                <DemoSectionTwo/>
                <AllFeatures/>
                <AvailableSection/>
                <div style={{height: "2em"}}/>
            </ContentContainer>
        </div>
    )
}

const SecondaryHeading = styled(Typography)`
  color: ${props => props.theme.palette.text.primary} !important;

  ${props => props.theme.breakpoints.down("md")} {
    font-size: 2rem !important;
  }
`

const MainHeading = styled(Typography)`
  color: ${props => props.theme.palette.text.primary} !important;

  ${props => props.theme.breakpoints.down("md")} {
    font-size: 4rem !important;
  }
`

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainSlide = styled(CenteredColumn)`
  padding-top: 2em;
  margin-bottom: 1em;

  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 6em;
  }

  ${props => props.theme.breakpoints.up("md")} {
    padding-top: 14em;
  }
`

const MainDemoContainer = styled.div`
  position: absolute;
  top: 30em;
  transform: translateY(-50%);

  ${props => props.theme.breakpoints.up("sm")} {
    top: 40em;
  }

  ${props => props.theme.breakpoints.up("md")} {
    top: 60em;
  }
`

const MainContainer = styled.div`
  width: 100%;
  height: 30em;
  position: relative;
  background: ${props => props.theme.palette.primary.dark};

  ${props => props.theme.breakpoints.up("sm")} {
    height: 40em;
  }

  ${props => props.theme.breakpoints.up("md")} {
    height: 60em;
  }
`

const ContentContainer = styled.div`
  margin-top: 30em;
`

const AllFeatures = styled((props) => {
    return (
        <div {...props}>
            <FeatureBox>
                <LightDarkIcon/>
                <FeatureText>
                    Light / Dark Theme
                </FeatureText>
            </FeatureBox>
            <FeatureBox>
                <CloudSyncIcon/>
                <FeatureText>
                    Cloud Auto Sync
                </FeatureText>
            </FeatureBox>
            <FeatureBox>
                <SyncCircle/>
                <FeatureText>
                    Local Backup
                </FeatureText>
            </FeatureBox>
        </div>
    )
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 60%;
  max-width: 80%;
  margin: 2em auto;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const AvailableSection = () => {

    const theme = useAppTheme()

    return (
        <CenteredColumn>
            <Typography style={{color: theme.palette.primary.main}}>
                Available Now
            </Typography>
            <Link to="https://Timeline.github.io/web" style={{textDecoration: "none"}} target={"_blank"}>
                <CustomMainButton style={{width: "270px"}}>
                    <WebIcon/>
                    <span style={{
                        width: "100%",
                        color: "white",
                        marginLeft: "1em",
                    }}>
                        Try on Web
                    </span>
                </CustomMainButton>
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.wakaztahir.timeline"
                  style={{textDecoration: "none"}} target={"_blank"}>
                <CustomMainButton style={{width: "270px"}}>
                    <GooglePlayIcon/>
                    <span style={{
                        width: "100%",
                        color: "white",
                        marginLeft: "1em"
                    }}>
                    Download on Play Store
                </span>
                </CustomMainButton>
            </Link>
            <Link to="https://github.com/codeckle/timeline-kmp/releases/download/1.0.19/Timeline-1.0.19.msi"
                  style={{textDecoration: "none"}} target={"_blank"}>
                <CustomMainButton style={{width: "270px"}}>
                    <WindowsIcon/>
                    <span style={{
                        width: "100%",
                        color: "white",
                        marginLeft: "1em"
                    }}>
                    Download for Windows
                </span>
                </CustomMainButton>
            </Link>
        </CenteredColumn>
    )
}

const DemoSectionOne = () => {
    return (
        <DemoContainer>
            <DemoText>
                <Typography align={"center"} variant={"h3"}>
                    Sketch Out <br/>
                    Your Thoughts
                </Typography>
                <br/>
                <Typography align={"center"}>
                    Timeline provides most features required to draw out multiple
                    images into one note , that can be shared & exported. <br/>
                    Features like undo , redo , background color change , pointer color ,
                    zoom & pan and the ability to toggle between them easily. <br/>
                    But most prominent feature of sketch is that it exports to SVG.
                </Typography>
            </DemoText>
            <DemoImage>
                <StaticImage
                    src={"../../images/demo-2.png"}
                    alt={"Demo Second"}
                    width={1000}
                />
            </DemoImage>
        </DemoContainer>
    )
}

const DemoSectionTwo = styled((props) => {
    return (
        <DemoContainer {...props}>
            <DemoImage>
                <StaticImage
                    src={"../../images/demo-3.png"}
                    alt={"Demo Third"}
                    width={1000}
                />
            </DemoImage>
            <DemoText>
                <Typography align={"center"} variant={"h3"}>
                    Intuitive <br/>
                    Easy To Understand
                </Typography>
                <br/>
                <Typography align={"center"}>
                    Timeline makes it easy to access the items you need.
                    Everything will feel under your control.<br/>
                    It will save you a low of time to do everything else and
                    help you to be more productive , The app will suit to your needs.
                </Typography>
            </DemoText>
        </DemoContainer>
    )
})`
  flex-direction: column-reverse;

  ${props => props.theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`