"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Providers_1 = require("../components/Providers");
var WebFonts_1 = require("../components/common/WebFonts");
var styled_components_1 = require("styled-components");
var GlobalStyles_1 = require("../components/common/GlobalStyles");
var core_1 = require("@material-ui/core");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var DemoSection_1 = require("../components/main/DemoSection");
var FeatureBox_1 = require("../components/main/FeatureBox");
var LightDarkIcon_1 = require("../icons/LightDarkIcon");
var CloudSyncIcon_1 = require("../icons/CloudSyncIcon");
var SyncCircle_1 = require("../icons/SyncCircle");
var CustomMainButton_1 = require("../components/common/CustomMainButton");
var GooglePlayIcon_1 = require("../icons/GooglePlayIcon");
var WebIcon_1 = require("../icons/WebIcon");
function Home() {
    return (<Providers_1.default>
            <WebFonts_1.default />
            <GlobalStyles_1.GlobalStyles />
            <MainPage />
        </Providers_1.default>);
}
exports.default = Home;
var MainPage = function () {
    var theme = core_1.useTheme();
    return (<MainContainer style={{ background: theme.palette.primary.main }}>
            <CenteredColumn>
                <SecondaryHeading>
                    <Row>
                        Meet &nbsp; <span style={{ background: theme.palette.secondary.main }}>T</span>imeline
                    </Row>
                </SecondaryHeading>
                <PrimaryHeading>
                    A Note Taking Tool
                </PrimaryHeading>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-1.png"} alt={"Demo First"} width={1000}/>
                <DemoSectionOne />
                <DemoSectionTwo />
                <FeatureRow />
                <AvailableSection />
                <Footer />
            </CenteredColumn>
        </MainContainer>);
};
var SecondaryHeading = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  font-family: 'Raleway', 'sans-serif';\n  margin-top: 16rem;\n  font-size: 3em;\n  margin-bottom: 0.2em;\n"], ["\n  color: #fff;\n  font-family: 'Raleway', 'sans-serif';\n  margin-top: 16rem;\n  font-size: 3em;\n  margin-bottom: 0.2em;\n"])));
var PrimaryHeading = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Raleway', 'sans-serif';\n  font-size: 4em;\n  margin-top: 0.2em;\n  color: #fff;\n"], ["\n  font-family: 'Raleway', 'sans-serif';\n  font-size: 4em;\n  margin-top: 0.2em;\n  color: #fff;\n"])));
var Row = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var CenteredColumn = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var MainContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 880px;\n"], ["\n  width: 100%;\n  height: 880px;\n"])));
var FeatureRow = styled_components_1.default(function (props) {
    return (<div {...props}>
            <FeatureBox_1.FeatureBox>
                <LightDarkIcon_1.default />
                <FeatureBox_1.FeatureText>
                    Light / Dark Theme
                </FeatureBox_1.FeatureText>
            </FeatureBox_1.FeatureBox>
            <FeatureBox_1.FeatureBox>
                <CloudSyncIcon_1.default />
                <FeatureBox_1.FeatureText>
                    Cloud Auto Sync
                </FeatureBox_1.FeatureText>
            </FeatureBox_1.FeatureBox>
            <FeatureBox_1.FeatureBox>
                <SyncCircle_1.default />
                <FeatureBox_1.FeatureText>
                    Local Backup
                </FeatureBox_1.FeatureText>
            </FeatureBox_1.FeatureBox>
        </div>);
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-width: 60%;\n  margin: 6em 0;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-width: 60%;\n  margin: 6em 0;\n"])));
var AvailableSection = function () {
    var theme = core_1.useTheme();
    return (<CenteredColumn>
            <DemoSection_1.DemoHeading style={{
            color: theme.palette.primary.main
        }}>
                Available Now
            </DemoSection_1.DemoHeading>
            <CustomMainButton_1.CustomMainButton style={{ background: theme.palette.primary.main, width: "270px" }}>
                <GooglePlayIcon_1.default />
                <span style={{
            width: "100%",
            color: "white",
            marginLeft: "1em"
        }}>
                    Download on Play Store
                </span>
            </CustomMainButton_1.CustomMainButton>
            <a href={"https://timeline-notes.github.io/web"} style={{ textDecoration: "none" }}>
                <CustomMainButton_1.CustomMainButton style={{ background: theme.palette.primary.main, width: "270px" }}>
                    <WebIcon_1.default />
                    <span style={{
            width: "100%",
            color: "white",
            marginLeft: "1em",
        }}>
                    Try on Web
                </span>
                </CustomMainButton_1.CustomMainButton>
            </a>
        </CenteredColumn>);
};
var DemoSectionOne = function () {
    return (<DemoSection_1.DemoContainer>
            <DemoSection_1.DemoText>
                <DemoSection_1.DemoHeading>
                    Sketch Out <br />
                    Your Thoughts
                </DemoSection_1.DemoHeading>
                <DemoSection_1.DemoParagraph>
                    Timeline provides most features required to draw out multiple
                    images into one note , that can be shared & exported. <br />
                    Features like undo , redo , background color change , pointer color ,
                    zoom & pan and the ability to toggle between them easily. <br />
                    But most prominent feature of sketch is that it exports to SVG.
                </DemoSection_1.DemoParagraph>
            </DemoSection_1.DemoText>
            <DemoSection_1.DemoImage>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-2.png"} alt={"Demo Second"} width={1000}/>
            </DemoSection_1.DemoImage>
        </DemoSection_1.DemoContainer>);
};
var DemoSectionTwo = function () {
    return (<DemoSection_1.DemoContainer>
            <DemoSection_1.DemoImage>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-3.png"} alt={"Demo Third"} width={1000}/>
            </DemoSection_1.DemoImage>
            <DemoSection_1.DemoText>
                <DemoSection_1.DemoHeading>
                    Intuitive <br />
                    Easy To Understand
                </DemoSection_1.DemoHeading>
                <DemoSection_1.DemoParagraph>
                    Timeline makes it easy to access the items you need.
                    Everything will feel under your control.<br />
                    It will save you a low of time to do everything else and
                    help you to be more productive , The app will suit to your needs.
                </DemoSection_1.DemoParagraph>
            </DemoSection_1.DemoText>
        </DemoSection_1.DemoContainer>);
};
var Footer = function () {
    var theme = core_1.useTheme();
    return (<FooterContainer style={{ background: theme.palette.primary.main }}>
            <FooterText>&copy; Copyright Timeline 2021</FooterText>
            <div style={{ float: "right" }}>
                <ALink href={"/terms"}>
                    <FooterText>
                        Terms of services
                    </FooterText>
                </ALink>
                <ALink href={"/policy"}>
                    <FooterText>
                        Privacy Policy
                    </FooterText>
                </ALink>
            </div>
        </FooterContainer>);
};
var ALink = styled_components_1.default.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var FooterText = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: white;\n  vertical-align: middle;\n  font-family: 'Roboto', 'sans-serif';\n  line-height: 3em;\n  height: 3em;\n  padding: 0 2em;\n"], ["\n  color: white;\n  vertical-align: middle;\n  font-family: 'Roboto', 'sans-serif';\n  line-height: 3em;\n  height: 3em;\n  padding: 0 2em;\n"])));
var FooterContainer = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  height: 3em;\n  margin-top: 6em;\n  color: white;\n"], ["\n  width: 100%;\n  height: 3em;\n  margin-top: 6em;\n  color: white;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
