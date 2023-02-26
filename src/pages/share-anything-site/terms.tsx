import React, {CSSProperties, PropsWithChildren} from "react"
import styled from "styled-components"
import ContentPage, {ContentPadding} from "../../components/page/ContentPage";

const ListContainer = styled.ul`
  & li {
    list-style-type: disc;
  }
`

export default function Terms() {
    return (
        <ContentPage title={"ShareAnything - Terms Of Services"}>
            <ContentPadding>
                <Typography variant="h2">ShareAnything's Terms of Services</Typography>
                <Typography variant="h3">1. Qawaz's Terms</Typography>
                <Typography variant="body1">
                    These terms extend Qawaz's terms of services.
                </Typography>
            </ContentPadding>
        </ContentPage>
    )
}


interface TypographyProps extends PropsWithChildren {
    className?: string,
    id?: string,
    align?: "center" | "left" | "right",
    style?: CSSProperties,
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "body1" | "body2"
}

function Typography(props: TypographyProps) {
    const realVariant = props.variant == "body1" || props.variant == "body2" ? "p" : (props.variant || "span")
    return React.createElement(realVariant, {
        className: props.className,
        id: props.id,
        style: {
            textAlign: props.align || "left",
            ...props.style
        },
        children: props.children
    });
}