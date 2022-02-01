import { Link, Typography, useTheme } from "@material-ui/core"
import styled from "styled-components"

export default function SmallFooter() {

    const theme = useTheme()

    return (
        <FooterContainer style={{ background: theme.palette.primary.main }}>
            <FooterText>&copy; Copyright Timeline 2021</FooterText>
            <FooterRightContainer>
                <Link href={"/terms"}>
                    <FooterText>
                        Terms of services
                    </FooterText>
                </Link>
                <Link href={"/policy"}>
                    <FooterText>
                        Privacy Policy
                    </FooterText>
                </Link>
            </FooterRightContainer>
        </FooterContainer>
    )
}


const FooterText = styled(Typography)`
  color: white;
  line-height: 3em !important;
  padding: 0 2em;
`

const FooterContainer = styled.div`
    width: 100%;
    margin-top: 6em;
    color: white;
    overflow: hidden;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    ${props => props.theme.breakpoints.down("xs")}{
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

const FooterRightContainer = styled.div`
  display: flex;
  flex-direction: row;
`

