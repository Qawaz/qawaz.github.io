import {IconButton, IconButtonProps, Link, Typography} from "@material-ui/core";
import React, {useState} from "react";
import styled from "styled-components";
import CodeckleLogoLight from "../../icons/CodeckleLogo";
import CodeckleLogoDark from "../../icons/CodeckleLogoDark";
import {MenuRounded} from "@material-ui/icons";

interface HeaderProps {
    useLightLogo?: boolean;
    current?: string;
}

export default function Header(props: React.PropsWithChildren<HeaderProps>) {

    let [menuOpen,setMenuOpen] = useState(false)

    return (
        <React.Fragment>
            <HeaderContainer>
                {
                    props.useLightLogo == null || props.useLightLogo ? (
                        <CodeckleLogoLight style={{width: "120", height: "60", marginLeft: "24px"}}/>
                    ) : (
                        <CodeckleLogoDark style={{width: "120", height: "60", marginLeft: "24px"}}/>
                    )
                }
                <NavContainer>
                    <MobileMenuButton onClick={()=> { setMenuOpen(!menuOpen) }}/>
                        <NavMenuContainer>
                            <NavMenu selected={props.current}/>
                        </NavMenuContainer>
                </NavContainer>
            </HeaderContainer>
            <MobileMenuContainer style={{ maxHeight : menuOpen ? "80em" : 0}}>
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
                    <Typography variant="subtitle1">Home</Typography>
                </NavItemComponent>
            </Link>
            <Link href="/timeline">
                <NavItemComponent item="timeline">
                    <Typography variant="subtitle1">Timeline</Typography>
                </NavItemComponent>
            </Link>
            <Link href="/about">
                <NavItemComponent item="about">
                    <Typography variant="subtitle1">About</Typography>
                </NavItemComponent>
            </Link>
            <Link href="/contact">
                <NavItemComponent item="contact">
                    <Typography variant="subtitle1">Contact</Typography>
                </NavItemComponent>
            </Link>
        </React.Fragment>
    )
}

const MobileMenuIconButton = styled(IconButton)`

  display: block;

  ${props => props.theme.breakpoints.up("sm")} {
    display: none !important;
  }
`

const MobileMenuButton = (props : IconButtonProps) => {
    return (
        <MobileMenuIconButton {...props}>
            <MenuRounded/>
        </MobileMenuIconButton>
    )
}

const MobileMenuContainer = styled.ul`
  background: ${props=> props.theme.palette.primary.main};
  padding:0;
  margin:0;
  max-height : 0;
  overflow : hidden;
  transition : max-height 0.25s ease-in;
  z-index:88;
  
  ${props=> props.theme.breakpoints.up("sm")}{
    max-height:0 !important;
  }
`

const NavMenuContainer = styled.ul`
  display: none;
  padding:0;
  
  & li{
    display:inline-block;
    border-radius:6px;
  }
  
  ${props => props.theme.breakpoints.up("sm")}{
    display:inline;
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