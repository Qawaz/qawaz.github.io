import { Link, Typography } from "@material-ui/core";
import styled from "styled-components";

export default function HeaderNav() {
    return (
        <NavContainer>
            <Link href="/">
                <NavItem>
                    <Typography variant="subtitle1">Home</Typography>
                </NavItem>
            </Link>
            <Link href="/about">
                <NavItem>
                    <Typography variant="subtitle1">About</Typography>
                </NavItem>
            </Link>
            <Link href="/contact">
                <NavItem>
                    <Typography variant="subtitle1">Contact</Typography>
                </NavItem>
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
 

    : hover {
        background-color:rgba(0,0,0,0.2);
        border-radius:4px;
    }

    & * {
        color : ${props => props.theme.palette.text.primary};
    }
`