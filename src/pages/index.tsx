import * as React from "react"
import Providers from "../components/Providers";
import WebFonts from "../components/common/WebFonts";
import styled from "styled-components";
import {GlobalStyles} from "../components/common/GlobalStyles";
import {useTheme} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";

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
            <SlideContent>
                <SecondaryHeading>
                    <Row>
                        Meet &nbsp; <TRect style={{background: theme.palette.secondary.main}}>T</TRect>imeline
                    </Row>
                </SecondaryHeading>
                <PrimaryHeading>
                    A Note Taking Tool
                </PrimaryHeading>
                <FirstDemoContainer>
                <StaticImage
                    src={"../images/demo-1.png"}
                    alt={"Demo First"}
                    width={1000}
                />
                </FirstDemoContainer>
            </SlideContent>
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

const FirstDemoContainer = styled.div`

`

const TRect = styled.span`

`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  width: 100%;
  height: 880px;
`
