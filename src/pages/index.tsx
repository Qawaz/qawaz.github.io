import * as React from "react"
import Providers from "../components/Providers";
import WebFonts from "../components/common/WebFonts";
import styled from "styled-components";
import {GlobalStyles} from "../components/common/GlobalStyles";
import {useTheme} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";
import {DemoContainer, DemoHeading, DemoImage, DemoParagraph, DemoText} from "../components/main/DemoSection";
import {FeatureBox, FeatureText} from "../components/main/FeatureBox";
import LightDarkIcon from "../icons/LightDarkIcon";
import CloudSyncIcon from "../icons/CloudSyncIcon";
import SyncCircle from "../icons/SyncCircle";
import {CustomMainButton} from "../components/common/CustomMainButton";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import WebIcon from "../icons/WebIcon";

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
        <MainContainer style={{background: theme.palette.primary.main}}>
            <CenteredColumn>
                <SecondaryHeading>
                    <Row>
                        Meet &nbsp; <span style={{background: theme.palette.secondary.main}}>T</span>imeline
                    </Row>
                </SecondaryHeading>
                <PrimaryHeading>
                    A Note Taking Tool
                </PrimaryHeading>
                <StaticImage
                    src={"../images/demo-1.png"}
                    alt={"Demo First"}
                    width={1000}
                />
                <DemoSectionOne/>
                <DemoSectionTwo/>
                <FeatureRow/>
                <AvailableSection/>
                <Footer/>
            </CenteredColumn>
        </MainContainer>
    )
}

const SecondaryHeading = styled.h1`
  color: #fff;
  font-family: 'Raleway', 'sans-serif';
  margin-top: 16rem;
  font-size: 3em;
  margin-bottom: 0.2em;
`

const PrimaryHeading = styled.h1`
  font-family: 'Raleway', 'sans-serif';
  font-size: 4em;
  margin-top: 0.2em;
  color: #fff;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  width: 100%;
  height: 880px;
`

const FeatureRow = styled((props) => {
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
  flex-direction: row;
  justify-content: space-between;
  min-width: 60%;
  margin: 6em 0;
`

const AvailableSection = () => {

    const theme = useTheme()

    return (
        <CenteredColumn>
            <DemoHeading style={{
                color: theme.palette.primary.main
            }}>
                Available Now
            </DemoHeading>
            <CustomMainButton style={{background: theme.palette.primary.main, width: "270px"}}>
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
                <CustomMainButton style={{background: theme.palette.primary.main, width: "270px"}}>
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
                <DemoHeading>
                    Sketch Out <br/>
                    Your Thoughts
                </DemoHeading>
                <DemoParagraph>
                    Timeline provides most features required to draw out multiple
                    images into one note , that can be shared & exported. <br/>
                    Features like undo , redo , background color change , pointer color ,
                    zoom & pan and the ability to toggle between them easily. <br/>
                    But most prominent feature of sketch is that it exports to SVG.
                </DemoParagraph>
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

const DemoSectionTwo = () => {
    return (
        <DemoContainer>
            <DemoImage>
                <StaticImage
                    src={"../images/demo-3.png"}
                    alt={"Demo Third"}
                    width={1000}
                />
            </DemoImage>
            <DemoText>
                <DemoHeading>
                    Intuitive <br/>
                    Easy To Understand
                </DemoHeading>
                <DemoParagraph>
                    Timeline makes it easy to access the items you need.
                    Everything will feel under your control.<br/>
                    It will save you a low of time to do everything else and
                    help you to be more productive , The app will suit to your needs.
                </DemoParagraph>
            </DemoText>
        </DemoContainer>
    )
}

const Footer = () => {

    const theme = useTheme()

    return (
        <FooterContainer style={{background: theme.palette.primary.main}}>
            <FooterText>&copy; Copyright Timeline 2021</FooterText>
            <div style={{float: "right"}}>
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
            </div>
        </FooterContainer>
    )
}

const ALink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FooterText = styled.span`
  color: white;
  vertical-align: middle;
  font-family: 'Roboto', 'sans-serif';
  line-height: 3em;
  height: 3em;
  padding: 0 2em;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 3em;
  margin-top: 6em;
  color: white;
`

