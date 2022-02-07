import styled from "styled-components"
import CodeckleLogoDark from "../../icons/CodeckleLogoDark"
import CodeckleLogoLight from "../../icons/CodeckleLogo"
import PageWrapper from "../common/PageWrapper"
import HeaderNav from "./HeaderNav"
import SmallFooter from "./SmallFooter"

interface PageProps {
    current?: string
    useLightLogo: boolean
    background?: string
}

export default function PageContainer(props: React.PropsWithChildren<PageProps>) {
    return (
        <ContentWrapper>
            <HeaderContainer>
                {
                    props.useLightLogo ? (
                        <CodeckleLogoLight style={{ width: "120", height: "60", marginLeft: "24px" }} />
                    ) : (
                        <CodeckleLogoDark style={{ width: "120", height: "60", marginLeft: "24px" }} />
                    )
                }

                <NavContainer>
                    <HeaderNav current={props.current} />
                </NavContainer>
            </HeaderContainer>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            <FooterContainer>
                <SmallFooter />
            </FooterContainer>
        </ContentWrapper>
    )
}

const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background: ${props => props.theme.palette.primary.main};
`

const NavContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:end;
    padding : 0px 2em;
`

const ContentWrapper = styled.div`
    min-height:100vh;
    position:relative;
    display:flex;
    flex-direction:column;
`
const CenteredContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const ContentContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-bottom:3rem;
`

const FooterContainer = styled.div`
    width:100%;
    position:absolute;
    bottom:0;
    height:3rem;
`