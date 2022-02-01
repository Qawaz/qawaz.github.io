import { useTheme } from "@material-ui/core"
import styled from "styled-components"
import PageContainer from "../components/common/PageContainer"
import HeaderNav from "../components/page/HeaderNav"
import SmallFooter from "../components/page/SmallFooter"
import CodeckleLogo from "../icons/CodeckleLogo"

export default function Home() {
    return (
        <PageContainer>
            <PageBackground>
                <HeaderContainer>
                    <CodeckleLogo style={{width:"120",height:"60",marginLeft:"24px"}} />
                    <NavContainer>
                        <HeaderNav current="home"/>
                    </NavContainer>
                </HeaderContainer>
                <SmallFooter />
            </PageBackground>
        </PageContainer>
    )
}

const PageBackground = styled.div`
    background: ${props => props.theme.palette.primary.dark};
`

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const NavContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:end;
    padding : 0px 2em;
`