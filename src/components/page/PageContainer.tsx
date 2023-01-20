import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

interface PageProps {
    current?: string
    useLightLogo?: boolean
    background?: string
}

export default function PageContainer(props: React.PropsWithChildren<PageProps>) {
    return (
        <ContentWrapper>
            <Header current={props.current}/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </ContentWrapper>
    )
}



const ContentWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`
const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
`

const FooterContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 4rem;
`