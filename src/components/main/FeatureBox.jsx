"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureText = exports.FeatureBox = void 0;
var styled_components_1 = require("styled-components");
exports.FeatureBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 12em;\n  height: 2em;\n  border-radius: 1.5em;\n  padding : 1em;\n  margin : 1em;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n  border : 2px solid ", "; \n"], ["\n  width: 12em;\n  height: 2em;\n  border-radius: 1.5em;\n  padding : 1em;\n  margin : 1em;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  justify-content:center;\n  border : 2px solid ", "; \n"])), function (props) { return props.theme.palette.primary.main; });
exports.FeatureText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: 'Roboto', 'sans-serif';\n  padding-left : 1em;\n  color : ", ";\n"], ["\n  font-family: 'Roboto', 'sans-serif';\n  padding-left : 1em;\n  color : ", ";\n"])), function (props) { return props.theme.palette.primary.main; });
var templateObject_1, templateObject_2;
