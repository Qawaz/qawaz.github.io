"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var themes_1 = require("../theme/themes");
var styled_components_1 = require("styled-components");
function Providers(props) {
    var theme = core_1.createMuiTheme(themes_1.dark);
    return (<core_1.MuiThemeProvider theme={theme}>
            <styled_components_1.ThemeProvider theme={theme}>
                {props.children}
            </styled_components_1.ThemeProvider>
        </core_1.MuiThemeProvider>);
}
exports.default = Providers;
