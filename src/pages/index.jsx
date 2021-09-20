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
    return (<div>
            <MainContainer style={{ background: theme.palette.primary.main }}>
                <MainSlide>
                    <SecondaryHeading variant={"h2"} style={{ color: theme.palette.text.primary }} align={"center"}>
                        Meet &nbsp; <span style={{ background: theme.palette.secondary.main }}>T</span>imeline
                    </SecondaryHeading>
                    <MainHeading variant={"h1"} style={{ color: theme.palette.text.primary }} align={"center"}>
                        A Note Taking Tool
                    </MainHeading>
                    <MainDemoContainer>
                        <gatsby_plugin_image_1.StaticImage src={"../images/demo-1.png"} alt={"Demo First"} width={1000}/>
                    </MainDemoContainer>
                </MainSlide>
            </MainContainer>
            <ContentContainer>
                <DemoSectionOne />
                <DemoSectionTwo />
                <AllFeatures />
                <AvailableSection />
                <Footer />
            </ContentContainer>
        </div>);
};
var SecondaryHeading = styled_components_1.default(core_1.Typography)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    font-size: 2rem !important;\n  }\n"], ["\n  ", " {\n    font-size: 2rem !important;\n  }\n"])), function (props) { return props.theme.breakpoints.down("md"); });
var MainHeading = styled_components_1.default(core_1.Typography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " {\n    font-size: 4rem !important;\n  }\n"], ["\n  ", " {\n    font-size: 4rem !important;\n  }\n"])), function (props) { return props.theme.breakpoints.down("md"); });
var CenteredColumn = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var MainSlide = styled_components_1.default(CenteredColumn)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-top: 5em;\n\n  ", " {\n    padding-top: 18em;\n  }\n"], ["\n  padding-top: 5em;\n\n  ", " {\n    padding-top: 18em;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var MainDemoContainer = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 30em;\n  transform: translateY(-50%);\n\n  ", " {\n    top: 40em;\n  }\n\n  ", " {\n    top: 60em;\n  }\n"], ["\n  position: absolute;\n  top: 30em;\n  transform: translateY(-50%);\n\n  ", " {\n    top: 40em;\n  }\n\n  ", " {\n    top: 60em;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); }, function (props) { return props.theme.breakpoints.up("md"); });
var MainContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 30em;\n  position: relative;\n\n  ", " {\n    height: 40em;\n  }\n\n  ", " {\n    height: 60em;\n  }\n"], ["\n  width: 100%;\n  height: 30em;\n  position: relative;\n\n  ", " {\n    height: 40em;\n  }\n\n  ", " {\n    height: 60em;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); }, function (props) { return props.theme.breakpoints.up("md"); });
var ContentContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 30em;\n"], ["\n  margin-top: 30em;\n"])));
var AllFeatures = styled_components_1.default(function (props) {
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
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 60%;\n  margin: 10em 0;\n\n  ", " {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 60%;\n  margin: 10em 0;\n\n  ", " {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])), function (props) { return props.theme.breakpoints.up("md"); });
var AvailableSection = function () {
    var theme = core_1.useTheme();
    return (<CenteredColumn>
            <core_1.Typography style={{ color: theme.palette.primary.main }}>
                Available Now
            </core_1.Typography>
            <CustomMainButton_1.CustomMainButton style={{ width: "270px" }}>
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
                <CustomMainButton_1.CustomMainButton style={{ width: "270px" }}>
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
                <core_1.Typography align={"center"} variant={"h3"}>
                    Sketch Out <br />
                    Your Thoughts
                </core_1.Typography>
                <br />
                <core_1.Typography align={"center"}>
                    Timeline provides most features required to draw out multiple
                    images into one note , that can be shared & exported. <br />
                    Features like undo , redo , background color change , pointer color ,
                    zoom & pan and the ability to toggle between them easily. <br />
                    But most prominent feature of sketch is that it exports to SVG.
                </core_1.Typography>
            </DemoSection_1.DemoText>
            <DemoSection_1.DemoImage>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-2.png"} alt={"Demo Second"} width={1000}/>
            </DemoSection_1.DemoImage>
        </DemoSection_1.DemoContainer>);
};
var DemoSectionTwo = styled_components_1.default(function (props) {
    return (<DemoSection_1.DemoContainer {...props}>
            <DemoSection_1.DemoImage>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-3.png"} alt={"Demo Third"} width={1000}/>
            </DemoSection_1.DemoImage>
            <DemoSection_1.DemoText>
                <core_1.Typography align={"center"} variant={"h3"}>
                    Intuitive <br />
                    Easy To Understand
                </core_1.Typography>
                <br />
                <core_1.Typography align={"center"}>
                    Timeline makes it easy to access the items you need.
                    Everything will feel under your control.<br />
                    It will save you a low of time to do everything else and
                    help you to be more productive , The app will suit to your needs.
                </core_1.Typography>
            </DemoSection_1.DemoText>
        </DemoSection_1.DemoContainer>);
})(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex-direction: column-reverse;\n\n  ", " {\n    flex-direction: row;\n  }\n"], ["\n  flex-direction: column-reverse;\n\n  ", " {\n    flex-direction: row;\n  }\n"])), function (props) { return props.theme.breakpoints.up("sm"); });
var Footer = function () {
    var theme = core_1.useTheme();
    return (<FooterContainer style={{ background: theme.palette.primary.main }}>
            <FooterText>&copy; Copyright Timeline 2021</FooterText>
            <FooterRightContainer>
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
            </FooterRightContainer>
        </FooterContainer>);
};
var ALink = styled_components_1.default.a(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var FooterText = styled_components_1.default(core_1.Typography)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  color: white;\n  line-height: 3em !important;\n  padding: 0 2em;\n"], ["\n  color: white;\n  line-height: 3em !important;\n  padding: 0 2em;\n"])));
var FooterContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 100%;\n  height: 3em;\n  margin-top: 6em;\n  color: white;\n  position: relative;\n  overflow: hidden;\n"], ["\n  width: 100%;\n  height: 3em;\n  margin-top: 6em;\n  color: white;\n  position: relative;\n  overflow: hidden;\n"])));
var FooterRightContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n"], ["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
