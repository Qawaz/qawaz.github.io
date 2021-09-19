"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
function WebFonts() {
    return (<react_helmet_1.Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}/>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@300&family=Roboto&display=swap" rel="stylesheet"/>
        </react_helmet_1.Helmet>);
}
exports.default = WebFonts;
