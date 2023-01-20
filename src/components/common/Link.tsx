import React from "react"
import {PropsWithChildren} from "react";

interface LinkProps extends PropsWithChildren {
    href: string
}

export function Link(props: LinkProps) {
    return <a href={props.href}>{props.children}</a>
}