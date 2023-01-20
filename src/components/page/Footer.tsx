import React from "react"
import styled from "styled-components"
import {useAppTheme} from "../../theme/themes";
import {Link} from "../common/Link";
import {Typography} from "../common/Typography";

export default function Footer() {

    const theme = useAppTheme()

    return (
        <FooterContainer style={{background: theme.palette.primary.main}}>
            <FooterText>&copy; Copyright Qawaz 2022</FooterText>
            <FooterRightContainer>
                <Link href={"/terms"}>
                    <FooterText>
                        Terms of services
                    </FooterText>
                </Link>
                <Link href={"/privacy"}>
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
  line-height: 4em !important;
  padding: 0 2em;
`

const FooterContainer = styled.div`
  width: 100%;
  color: white;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${props => props.theme.breakpoints.up("sm")} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterRightContainer = styled.div`
  display: flex;
  flex-direction: row;
`

