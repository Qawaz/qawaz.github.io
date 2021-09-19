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
            <SlideContent>
                <SecondaryHeading>
                    <Row>
                        Meet &nbsp; <TRect style={{ background: theme.palette.secondary.main }}>T</TRect>imeline
                    </Row>
                </SecondaryHeading>
                <PrimaryHeading>
                    A Note Taking Tool
                </PrimaryHeading>
                <FirstDemoContainer>
                <gatsby_plugin_image_1.StaticImage src={"../images/demo-1.png"} alt={"Demo First"} width={1000}/>
                </FirstDemoContainer>
            </SlideContent>
        </MainContainer>);
};
var SecondaryHeading = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  font-family: 'Raleway', 'sans-serif';\n  margin-top: 16rem;\n  font-size: 3em;\n  margin-bottom: 0.2em;\n"], ["\n  color: #fff;\n  font-family: 'Raleway', 'sans-serif';\n  margin-top: 16rem;\n  font-size: 3em;\n  margin-bottom: 0.2em;\n"])));
var PrimaryHeading = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Raleway', 'sans-serif';\n  font-size: 4em;\n  margin-top: 0.2em;\n  color: #fff;\n"], ["\n  font-family: 'Raleway', 'sans-serif';\n  font-size: 4em;\n  margin-top: 0.2em;\n  color: #fff;\n"])));
var FirstDemoContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var TRect = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var Row = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var SlideContent = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var MainContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 880px;\n"], ["\n  width: 100%;\n  height: 880px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
