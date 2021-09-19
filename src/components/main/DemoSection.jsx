"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoImage = exports.DemoParagraph = exports.DemoHeading = exports.DemoText = exports.DemoContainer = void 0;
var styled_components_1 = require("styled-components");
exports.DemoContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  padding:1em 4em;\n  justify-content:center;\n  align-items:center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  padding:1em 4em;\n  justify-content:center;\n  align-items:center;\n"])));
exports.DemoText = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
exports.DemoHeading = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: 'Raleway', 'sans-serif';\n  text-align:center;\n"], ["\n  font-family: 'Raleway', 'sans-serif';\n  text-align:center;\n"])));
exports.DemoParagraph = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: 'Roboto', 'sans-serif';\n  text-align:center;\n  width:30em;\n"], ["\n  font-family: 'Roboto', 'sans-serif';\n  text-align:center;\n  width:30em;\n"])));
exports.DemoImage = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
