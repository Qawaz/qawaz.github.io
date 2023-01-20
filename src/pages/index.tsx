import React from "react"

import styled from "styled-components"
import PageWrapper from "../components/common/PageWrapper"
import PageContainer from "../components/page/PageContainer"
import {useAppTheme} from "../theme/themes";
import {Typography} from "../components/common/Typography";
import {Link} from "../components/common/Link";
import WebIcon from "../icons/WebIcon";


export default function Page(props: React.PropsWithChildren<{}>) {
    return (
        <PageWrapper title="Qawaz - Innovative Apps">
            <PageBackground>
                <PageContainer current="home" useLightLogo={true}>
                    <Home/>
                </PageContainer>
            </PageBackground>
        </PageWrapper>
    )
}

function Home() {

    const theme = useAppTheme()

    return (
        <CenteredContent>
            <Typography variant="h1" align="center">
                Creative Solutions
            </Typography>
            <Typography variant="h2" align="center">
                Best Note Taking App
            </Typography>
            <Link href="./agency">
                <CenteredButton color="secondary" style={{marginTop: "2em"}}>
                    <WebIcon />
                    &nbsp;
                    &nbsp;
                    <Typography>
                        Explore Products
                    </Typography>
                </CenteredButton>
            </Link>
        </CenteredContent>
    )
}

const PageBackground = styled.div`
  background: ${props => props.theme.palette.primary.dark};
`

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CenteredButton = styled.button`
  min-height: 3rem;
`