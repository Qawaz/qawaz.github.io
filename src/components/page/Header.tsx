import React, {useState} from "react";
import styled from "styled-components";
import QawazLogoLight from "../../icons/QawazLogoLight";
import QawazLogoDark from "../../icons/QawazLogoDark";
import {Link} from "../common/Link";
import {Typography} from "../common/Typography";
import MenuIcon from "../../icons/MenuIcon";

interface HeaderProps {
    useLightLogo?: boolean;
    current?: string;
}

export default function Header(props: React.PropsWithChildren<HeaderProps>) {

    let [menuOpen, setMenuOpen] = useState(false)

    return (
        <React.Fragment>
            <HeaderContainer>
                {
                    props.useLightLogo == null || props.useLightLogo ? (
                        <QawazLogoLight style={{width: "120", height: "60", marginLeft: "24px"}}/>
                    ) : (
                        <QawazLogoDark style={{width: "120", height: "60", marginLeft: "24px"}}/>
                    )
                }
                <NavContainer>
                    <MobileMenuButton onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}/>
                    <NavMenuContainer>
                        <NavMenu selected={props.current}/>
                    </NavMenuContainer>
                </NavContainer>
            </HeaderContainer>
            <MobileMenuContainer style={{maxHeight: menuOpen ? "80em" : 0}}>
                <NavMenu selected={props.current}/>
            </MobileMenuContainer>
        </React.Fragment>
    )
}

interface NavMenuProps {
    selected?: string
}

function NavMenu(props: NavMenuProps) {

    let parentProps = props

    const NavItemComponent = (props: React.PropsWithChildren<{ item: string }>) => {
        if (props.item == parentProps.selected) {
            return <SelectedNavItem>{props.children}</SelectedNavItem>
        } else {
            return <NavItem>{props.children}</NavItem>
        }
    }

    return (
        <React.Fragment>
            <Link href="/">
                <NavItemComponent item="home">
                    <Typography variant="h6">Home</Typography>
                </NavItemComponent>
            </Link>
            {/* todo make About & Contact section */}
            {/*<Link href="/about">*/}
            {/*    <NavItemComponent item="about">*/}
            {/*        <Typography variant="subtitle1">About</Typography>*/}
            {/*    </NavItemComponent>*/}
            {/*</Link>*/}
            {/*<Link href="/contact">*/}
            {/*    <NavItemComponent item="contact">*/}
            {/*        <Typography variant="subtitle1">Contact</Typography>*/}
            {/*    </NavItemComponent>*/}
            {/*</Link>*/}
        </React.Fragment>
    )
}

const MobileMenuIconButton = styled.div`

  display: block;

  ${props => props.theme.breakpoints.up("sm")} {
    display: none !important;
  }
`

const MobileMenuButton = (props: any) => {
    return (
        <MobileMenuIconButton {...props}>
            <MenuIcon/>
        </MobileMenuIconButton>
    )
}

const MobileMenuContainer = styled.ul`
  background: ${props => props.theme.palette.primary.main};
  padding: 0;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease-in;
  z-index: 88;

  ${props => props.theme.breakpoints.up("sm")} {
    max-height: 0 !important;
  }
`

const NavMenuContainer = styled.ul`
  display: none;
  padding: 0;

  & li {
    display: inline-block;
    border-radius: 6px;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    display: inline;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${props => props.theme.palette.primary.main};
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0px 2em;
`

const NavItem = styled.li`
  padding: 0.5em 1em;
  list-style: none;

  & : hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  & * {
    color: ${props => props.theme.palette.text.primary};
  }
`

const SelectedNavItem = styled(NavItem)`
  background-color: rgba(0, 0, 0, 0.2);
`