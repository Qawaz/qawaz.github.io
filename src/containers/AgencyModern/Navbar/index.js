import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from '../../../common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../../../common/components/Button';
import Container from '../../../common/components/UI/ContainerTwo';
import NavbarWrapper, {MenuArea, MobileMenu} from './navbar.style';
import data from '../../../common/data/AgencyModern';
import {CloseIcon} from "../../../common/components/Accordion";
import MenuIcon from "../../../icons/MenuIcon";
import QawazLogoDark from "../../../icons/QawazLogoDark";

const Navbar = (props) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const scrollItems = [];

    const leftMenuItems = props.leftMenuItems || data.leftMenuItems
    const rightMenuItems = props.rightMenuItems || data.rightMenuItems
    const mobileMenuItems = props.mobileMenuItems || data.mobileMenuItems

    leftMenuItems.forEach((item) => {
        scrollItems.push(item.path.slice(1));
    });

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleHandleMenuClose = () => {
        setMobileMenu(false);
    };

    return (
        <NavbarWrapper className="agencyModern-navbar navbar">
            <Container>
                <QawazLogoDark/>
                <div style={{width: "2em"}}/>
                {/*<Logo*/}
                {/*  href="/agencymodern"*/}
                {/*  logoSrc={LogoImage}*/}
                {/*  title="Crypto Modern"*/}
                {/*  className="main-logo"*/}
                {/*/>*/}
                {/* end of logo */}

                <MenuArea>
                    <ScrollSpyMenu
                        className="menu-items menu-left"
                        menuItems={leftMenuItems}
                        offset={-84}
                    />
                    <ScrollSpyMenu
                        className="menu-items menu-right"
                        menuItems={rightMenuItems}
                        offset={-84}
                    />
                    {/* end of main menu */}

                    <Button
                        className="menubar"
                        icon={
                            mobileMenu ? (
                                <CloseIcon
                                    style={{color: '#02073E'}}
                                    className="bar"
                                    size={32}
                                />
                            ) : (
                                <Fade>
                                    <MenuIcon
                                        style={{color: '#02073E'}}
                                        className="close"
                                        size={32}
                                    />
                                </Fade>
                            )
                        }
                        color="#0F2137"
                        variant="textButton"
                        onClick={handleMobileMenu}
                    />
                </MenuArea>
            </Container>

            {/* start mobile menu */}
            <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
                <Container>
                    <Scrollspy
                        className="menu"
                        items={scrollItems}
                        offset={-84}
                        currentClassName="active"
                    >
                        {mobileMenuItems.map((menu, index) => (
                            <li key={`menu_key${index}`}>
                                <AnchorLink
                                    href={menu.path}
                                    offset={menu.offset}
                                    onClick={handleHandleMenuClose}
                                >
                                    {menu.label}
                                </AnchorLink>
                            </li>
                        ))}
                    </Scrollspy>
                </Container>
            </MobileMenu>
            {/* end of mobile menu */}
        </NavbarWrapper>
    );
};

export default Navbar;
