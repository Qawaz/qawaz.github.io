import React from "react"
import styled from "styled-components"
import ContentPage, {ContentPadding} from "../../components/page/ContentPage";

const StyledList = styled.ul`
  & li {
    list-style-type: disc;
  }
`

export default function Privacy() {
    return (
        <ContentPage title={"ShareAnything - Privacy Policy"}>
            <ContentPadding>
                <h2>Privacy Privacy for ShareAnything</h2>

                <Paragraph>
                    At ShareAnything, one of our main priorities is the privacy of our
                    visitors. This Privacy Privacy document contains types of information
                    that is collected and recorded by ShareAnything and how we use it.
                </Paragraph>

                <Heading>Qawaz's Privacy Policy</Heading>
                <Paragraph>
                    We have a common privacy policy for all our apps , available at
                    <a href={"https://qawaz.github.io/privacy"} target={"_blank"}> https://qawaz.github.io/privacy</a>.
                    The policies
                    defined here only apply to ShareAnything app / website and extend the Qawaz's privacy policy.
                </Paragraph>

                <Heading>About Data Collection / Sharing</Heading>
                <Paragraph>
                    Since ShareAnything is a file sharing app , it needs extra policies , ShareAnything uploads your
                    data
                    to a server only when you choose to do it. This can happen in these ways
                </Paragraph>

                <h5>We send this information to another device which acts like a server</h5>

                <Heading>Information About Installed Apps</Heading>
                <Paragraph>
                    If you are sharing apks / installed application , We may upload this information to the other device
                    / web interface
                    / our server which helps in establishing connection. We don't store your information.
                </Paragraph>

                <Heading>Information About Web Share</Heading>
                <Paragraph>
                    We make your (chosen) files available to download / take uploads from other devices when making a
                    web share. This can
                    include information about your device id , nickname , user photo and the files being shared.
                </Paragraph>

                <Heading>Sharing between devices on the same network</Heading>
                <Paragraph>
                    Since the other device is on the same network , We just help by establishing connection between
                    your device and the other device , so files can be shared. In this way some information is shared
                    so that a proper connection can be established for file sharing , which can also depend on the files
                    you selected to share.<br/><br/>

                    <StyledList>
                        <li>Information About <b>Device / User</b> (device Id , nickname , user photo)</li>
                        <li>Information About Files you are going to share (number of files , size of each file ,
                            names)
                        </li>
                        <li>Connection / Sharing State</li>
                    </StyledList>

                </Paragraph>

                <Heading>Sharing between devices NOT on the same network</Heading>
                <Paragraph>
                    We may help you by establishing connection , We share the same information
                    as we shared when the devices were on the same network but we may change this behavior anytime
                    in the future , In that case this (page / privacy policy) will be updated as well.
                </Paragraph>
            </ContentPadding>
        </ContentPage>
    )
}

const Heading = styled.h3`

`

const Paragraph = styled.p`
  margin: 0.5em;
`