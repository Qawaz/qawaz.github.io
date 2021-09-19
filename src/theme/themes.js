"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dark = exports.light = exports.ThemeType = void 0;
var ThemeType;
(function (ThemeType) {
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType = exports.ThemeType || (exports.ThemeType = {}));
exports.light = {
    palette: {
        type: "light",
        primary: {
            light: "#003147",
            main: "#003147",
            dark: "#00293b",
        },
        secondary: {
            light: "rgba(224, 130, 96, 1)",
            main: "#F68054",
            dark: "rgba(148, 89, 69, 1)",
        },
    },
};
exports.dark = {
    palette: {
        type: "dark",
        primary: {
            light: "#005980",
            main: "#003147",
            dark: "#00293b",
        },
        secondary: {
            light: "rgba(224, 130, 96, 1)",
            main: "#F68054",
            dark: "rgba(148, 89, 69, 1)",
        },
    },
};
