import { Button, Icon, Link, Typography, useTheme } from "@material-ui/core"
import { Web } from "@material-ui/icons"
import styled from "styled-components"
import PageWrapper from "../components/common/PageWrapper"
import HeaderNav from "../components/page/HeaderNav"
import PageContainer from "../components/page/PageContainer"
import SmallFooter from "../components/page/SmallFooter"
import CodeckleLogoLight from "../icons/CodeckleLogo"


export default function Page(props: React.PropsWithChildren<{}>) {
    return (
        <PageWrapper title="Home">
            <PageBackground>
                <PageContainer current="home" useLightLogo={true}>
                    <Home></Home>
                </PageContainer>
            </PageBackground>
        </PageWrapper>
    )
}

function Home(props) {

    const theme = useTheme()

    return (
        <CenteredContent>
            <Typography variant="h1" align="center" color="textPrimary">
                Creative Solutions
            </Typography>
            <Typography variant="h2" align="center" color="textPrimary">
                Best Note Taking App
            </Typography>
            <Link href="./timeline" style={{ textDecoration:"none" }}>
                <CenteredButton variant="contained" color="secondary" style={{ marginTop: "2em" }}>
                    <Web style={{ color: theme.palette.text.primary }} />
                    &nbsp;
                    &nbsp;
                    <Typography color="textPrimary">
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const CenteredButton = styled(Button)`
    min-height:3rem;
`