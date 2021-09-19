import * as React from "react"
import Providers from "../components/Providers";
import WebFonts from "../components/common/WebFonts";
import styled from "styled-components";
import {GlobalStyles} from "../components/common/GlobalStyles";
import {useTheme} from "@material-ui/core";

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

            </SlideContent>
        </MainContainer>
    )
}

const SecondaryHeading = styled.h1`
  color : #fff;
  font-family:'Raleway','sans-serif';
  margin-top:300px;
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
