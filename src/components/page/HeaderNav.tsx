import { Link, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface HeaderNavProps {
    current?: string;
}

export default function HeaderNav(props: React.PropsWithChildren<HeaderNavProps>) {

    let current = props.current

    const SingleNavItem = (props: React.PropsWithChildren<{ item: string }>) => {
        if (props.item == current) {
            return <SelectedNavItem>{props.children}</SelectedNavItem>
        } else {
            return <NavItem>{props.children}</NavItem>
        }
    }

    return (
        <NavContainer>
            <Link href="/">
                <SingleNavItem item="home">
                    <Typography variant="subtitle1">Home</Typography>
                </SingleNavItem>
            </Link>
            <Link href="/timeline">
                <SingleNavItem item="timeline">
                    <Typography variant="subtitle1">Timeline</Typography>
                </SingleNavItem>
            </Link>
            <Link href="/about">
                <SingleNavItem item="about">
                    <Typography variant="subtitle1">About</Typography>
                </SingleNavItem>
            </Link>
            <Link href="/contact">
                <SingleNavItem item="contact">
                    <Typography variant="subtitle1">Contact</Typography>
                </SingleNavItem>
            </Link>
        </NavContainer>
    )
}

const NavContainer = styled.ul`
    display: inline;
`

const NavItem = styled.li`
    display: inline-block;
    padding: 0.5em 1em;
    border-radius:4px;

    : hover {
        background-color:rgba(0,0,0,0.3);
    }

    & * {
        color : ${props => props.theme.palette.text.primary};
    }
`

const SelectedNavItem = styled(NavItem)`
    background-color : rgba(0,0,0,0.2);
`