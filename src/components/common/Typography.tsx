import React, {CSSProperties, PropsWithChildren} from "react";
import {useAppTheme} from "../../theme/themes";

interface TypographyProps extends PropsWithChildren {
    className?: string,
    id?: string,
    align?: "center" | "left" | "right",
    style?: CSSProperties,
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "body1" | "body2"
}

export function Typography(props: TypographyProps) {
    const realVariant = props.variant == "body1" || props.variant == "body2" ? "p" : (props.variant || "span")
    const theme = useAppTheme()

    // @ts-ignore
    const family = theme.typography[realVariant]

    return React.createElement(realVariant, {
        className: props.className,
        id: props.id,
        style: {
            textAlign: props.align || "left",
            fontFamily : family == null ? "Roboto" : family.fontFamily,
            fontSize : family == null ? "1rem" : family.fontSize,
            ...props.style
        },
        children: props.children
    });
}