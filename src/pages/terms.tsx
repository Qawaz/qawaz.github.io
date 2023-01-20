import PageWrapper from "../components/common/PageWrapper"
import styled from "styled-components"
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
import React from "react";
import {Typography} from "../components/common/Typography";
import {Link} from "../components/common/Link";

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > {
    align-self: start;
  }
`

const PadBox = styled.div`
  padding: 12px 0px;
  max-width: 80%;
  align-self: center;

  & > * {
    padding-left: 24px;
  }

  & > h1, h2, h3, h4, h5, h6 {
    margin-top: 12px;
    margin-bottom: 12px;
    padding-left: 0px;
  }
`

export default function Terms() {
    return (
        <PageWrapper title="Terms of Services">
            <Header/>
            <CenteredColumn>
                <PadBox>
                    <Typography variant="h2">Qawaz's Terms of Services</Typography>
                    <Typography variant="h3">1. Terms</Typography>
                    <Typography variant="body1">
                        By accessing this Website / Using the app , you are agreeing to be
                        bound by these Website Terms and Conditions of Use and agree that
                        you are responsible for the agreement with any applicable local
                        laws. If you disagree with any of these terms, you are prohibited
                        from accessing this site. The materials contained in this Website
                        are protected by copyright and trade mark law.
                    </Typography>
                    <Typography variant="h3">2. Use License</Typography>
                    <Typography variant="body1">
                        Permission is granted to temporarily download one copy of the
                        materials on Qawaz's Website for personal, non-commercial
                        transitory viewing only. This is the grant of a license, not a
                        transfer of title, and under this license you may not:
                    </Typography>
                    <Typography variant="body2">
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>
                                use the materials for any commercial purpose or for any public
                                display;
                            </li>
                            <li>
                                attempt to reverse engineer any software contained on Qawaz's
                                Website;
                            </li>
                            <li>
                                remove any copyright or other proprietary notations from the
                                materials; or
                            </li>
                            <li>
                                transferring the materials to another person or "mirror" the
                                materials on any other server.
                            </li>
                        </ul>
                    </Typography>
                    <Typography variant="body1">
                        This will let Qawaz to terminate upon violations of any of these
                        restrictions. Upon termination, your viewing right will also be
                        terminated and you should destroy any downloaded materials in your
                        possession whether it is printed or electronic format.
                    </Typography>
                    <Typography variant="h3">3. Disclaimer</Typography>
                    <Typography variant="body1">
                        All the materials on Qawaz’s Website are provided "as is".
                        Qawaz makes no warranties, may it be expressed or implied,
                        therefore negates all other warranties. Furthermore, Qawaz does
                        not make any representations concerning the accuracy or reliability
                        of the use of the materials on its Website or otherwise relating to
                        such materials or any sites linked to this Website.
                    </Typography>

                    <Typography variant="h3">4. Limitations</Typography>


                    <Typography variant="body1">
                        Qawaz or its suppliers will not be hold accountable for any
                        damages that will arise with the use or inability to use the
                        materials on Qawaz’s Website, even if Qawaz or an authorize
                        representative of this Website has been notified, orally or written,
                        of the possibility of such damage. Some jurisdiction does not allow
                        limitations on implied warranties or limitations of liability for
                        incidental damages, these limitations may not apply to you.
                    </Typography>

                    <Typography variant="h3">5. Revisions and Errata</Typography>

                    <Typography variant="body1">
                        The materials appearing on Qawaz’s Website may include technical,
                        typographical, or photographic errors. Qawaz will not promise
                        that any of the materials in this Website are accurate, complete, or
                        current. Qawaz may change the materials contained on its Website
                        at any time without notice. Qawaz does not make any commitment to
                        update the materials.
                    </Typography>

                    <Typography variant="h3">6. Links</Typography>


                    <Typography variant="body1">
                        Qawaz has not reviewed all of the sites linked to its Website and
                        is not responsible for the contents of any such linked site. The
                        presence of any link does not imply endorsement by Qawaz of the
                        site. The use of any linked website is at the user’s own risk.
                    </Typography>

                    <Typography variant="h3">7. Site Terms of Use Modifications</Typography>

                    <Typography variant="body1">
                        Qawaz may revise these Terms of Use for its Website at any time
                        without prior notice. By using this Website, you are agreeing to be
                        bound by the current version of these Terms and Conditions of Use.
                    </Typography>

                    <Typography variant="h3">8. Your Privacy</Typography>

                    <Typography variant="body1">Please read our <Link href="/privacy">Privacy Policy.</Link></Typography>

                    <Typography variant="h3">9. Governing Law</Typography>

                    <Typography variant="body1">
                        Any claim related to Qawaz's Website shall be governed by the
                        laws of UK without regards to its conflict of law provisions.
                    </Typography>
                </PadBox>
            </CenteredColumn>
            <div style={{height: "2em"}}/>
            <Footer/>
        </PageWrapper>
    )
}
