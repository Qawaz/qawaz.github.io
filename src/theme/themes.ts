import {useTheme} from "styled-components";

export enum ThemeType {
    Light = "light",
    Dark = "dark"
}

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

class ThemeBreakpoints {
    unit: string = "px"
    step: number = 5
    values: Record<Breakpoint, number> = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
    }

    up = (key: Breakpoint | number) => {
        const value = (key as any) instanceof Number ? key as number : this.values[key as Breakpoint];
        return `@media (min-width:${value}${this.unit})`;
    }
    down = (key: Breakpoint | number) => {
        const value = (key as any) instanceof Number ? key as number : this.values[key as Breakpoint];
        return `@media (max-width:${value - this.step / 100}${this.unit})`;
    }
    between = (start: Breakpoint | number, end: Breakpoint | number) => {
        const startValue = (start as any) instanceof Number ? start as number : this.values[start as Breakpoint];
        const endValue = (end as any) instanceof Number ? end as number : this.values[end as Breakpoint];
        return `@media (min-width:${startValue}${this.unit}) and (max-width:${endValue}${this.unit})`;
    }
}

const typography = {
    h1 : {
        fontFamily:"Raleway",
        fontSize : "6rem"
    },
    h2 : {
        fontFamily : "Raleway",
        fontSize : "5rem"
    },
    h3 : {
        fontFamily : "Raleway",
        fontSize : "4rem"
    },
    h4 : {
        fontFamily : "Roboto",
        fontSize : "3rem"
    },
    h5 : {
        fontFamily : "Roboto",
        fontSize : "2rem",
    },
    h6 : {
        fontFamily : "Roboto",
        fontSize : "1rem",
    },
    body1 : {
        fontFamily : "Roboto",
        fontSize : "1.5rem",
    },
    body2 : {
        fontFamily : "Roboto",
        fontSize : "1rem"
    }
}

export const light = {
    palette: {
        type: "light",
        primary: {
            light: "#003147",
            main: "#003147",
            dark: "#00293b",
        },
        secondary: {
            light: "#4DB156",
            main: "#3b8241",
            dark: "#2f6934",
        },
        text : {
            primary : "#000"
        }
    },
    breakpoints : new ThemeBreakpoints(),
    typography : typography
};

export const dark = {
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
        text : {
            primary : "#fff"
        }
    },
    breakpoints : new ThemeBreakpoints(),
    typography : typography
};

export function useAppTheme(){
    return useTheme() as typeof dark
}