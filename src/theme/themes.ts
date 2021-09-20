import {ThemeOptions} from "@material-ui/core";

export enum ThemeType {
    Light = "light",
    Dark = "dark"
}

export const light: ThemeOptions = {
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
    typography :{
        h1 : {
            fontFamily:"Raleway"
        },
        h2 : {
            fontFamily : "Raleway"
        },
        h3 : {
            fontFamily: "Raleway"
        }
    }
};

export const dark: ThemeOptions = {
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
    typography :{
        h1 : {
            fontFamily:"Raleway"
        },
        h2 : {
            fontFamily : "Raleway"
        },
        h3 : {
            fontFamily : "Raleway"
        }
    }
};
