import * as React from "react"
import Providers from "../components/Providers";
import WebFonts from "../components/common/WebFonts";
import styled from "styled-components";
import {GlobalStyles} from "../components/common/GlobalStyles";
import {Typography, useTheme} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";
import {DemoContainer, DemoImage, DemoText} from "../components/main/DemoSection";
import {FeatureBox, FeatureText} from "../components/main/FeatureBox";
import LightDarkIcon from "../icons/LightDarkIcon";
import CloudSyncIcon from "../icons/CloudSyncIcon";
import SyncCircle from "../icons/SyncCircle";
import {CustomMainButton} from "../components/common/CustomMainButton";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import WebIcon from "../icons/WebIcon";
import CustomHelmet from "../components/common/CustomHelmet";

export default function Home() {
    return (
        <Providers>
            <WebFonts/>
            <GlobalStyles/>
            <MainPage/>
        </Providers>
    )
}

const MainPage = () => {
    const theme = useTheme()

    return (
        <div>
            <CustomHelmet />
            <MainContainer style={{background: theme.palette.primary.main}}>
                <MainSlide>
                    <SecondaryHeading variant={"h2"} style={{color: theme.palette.text.primary}} align={"center"}>
                        Meet &nbsp; <span style={{background: theme.palette.secondary.main}}>T</span>imeline
                    </SecondaryHeading>
                    <MainHeading variant={"h1"} style={{color: theme.palette.text.primary}} align={"center"}>
                        A Note Taking Tool
                    </MainHeading>
                    <MainDemoContainer>
                        <StaticImage
                            src={"../images/demo-1.png"}
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
                <Footer/>
            </ContentContainer>
        </div>
    )
}

const SecondaryHeading = styled(Typography)`
  ${props => props.theme.breakpoints.down("md")} {
    font-size: 2rem !important;
  }
`

const MainHeading = styled(Typography)`
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
  padding-top: 5em;

  ${props => props.theme.breakpoints.up("md")} {
    padding-top: 18em;
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
  margin: 10em 0;

  ${props => props.theme.breakpoints.up("md")} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const AvailableSection = () => {

    const theme = useTheme()

    return (
        <CenteredColumn>
            <Typography style={{color: theme.palette.primary.main}}>
                Available Now
            </Typography>
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
            <a href={"https://timeline-notes.github.io/web"} style={{textDecoration: "none"}}>
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
            </a>
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
                    src={"../images/demo-2.png"}
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
                    src={"../images/demo-3.png"}
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

const Footer = () => {

    const theme = useTheme()

    return (
        <FooterContainer style={{background: theme.palette.primary.main}}>
            <FooterText>&copy; Copyright Timeline 2021</FooterText>
            <FooterRightContainer>
                <ALink href={"/terms"}>
                    <FooterText>
                        Terms of services
                    </FooterText>
                </ALink>
                <ALink href={"/policy"}>
                    <FooterText>
                        Privacy Policy
                    </FooterText>
                </ALink>
            </FooterRightContainer>
        </FooterContainer>
    )
}

const ALink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FooterText = styled(Typography)`
  color: white;
  line-height: 3em !important;
  padding: 0 2em;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 3em;
  margin-top: 6em;
  color: white;
  position: relative;
  overflow: hidden;
`

const FooterRightContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
`

