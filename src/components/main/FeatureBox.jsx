"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureText = exports.FeatureBox = void 0;
var styled_components_1 = require("styled-components");
var core_1 = require("@material-ui/core");
var React = require("react");
exports.FeatureBox = styled_components_1.default(function (props) {
    var theme = core_1.useTheme();
    return (<div style={{ border: "2px solid " + theme.palette.primary.main }} {...props}/>);
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 12em;\n  height: 2em;\n  border-radius: 1.5em;\n  padding : 1em;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n"], ["\n  width: 12em;\n  height: 2em;\n  border-radius: 1.5em;\n  padding : 1em;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n"])));
exports.FeatureText = styled_components_1.default(function (props) {
    var theme = core_1.useTheme();
    return (<span style={{
            color: theme.palette.primary.main
        }} {...props}/>);
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Roboto', 'sans-serif';\n  padding-left : 1em;\n"], ["\n  font-family: 'Roboto', 'sans-serif';\n  padding-left : 1em;\n"])));
var templateObject_1, templateObject_2;
