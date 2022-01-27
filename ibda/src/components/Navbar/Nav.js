import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { zIndexValues, colors, sizes, font } from "../../utils/styles";
import MenuItem from "../MenuToggle/Menuitem/MenuItem";
import MenuIcon from "../MenuIcon/MenuIcon";
import MenuToggle from "../MenuToggle/MenuToggle";
import { useScroll } from "../../hook/useScroll";
import { Container, Box, LogoBox, SideBox, ItemBox } from "./styles";

function Nav(props) {
    // ᶜᵣᵉᵂ
    const { WindowSize,photos } = props;
    const [trigger, setTrigger] = useState(false);
    const theme = useContext(ThemeContext);
    const SCROLL = useScroll();
    useEffect(() => {
        setTrigger(false);
    }, [WindowSize.width]);
    return (
        <>
            <Container theme={theme}>
                <LogoBox className="logo" onClick={() => setTrigger(false)} location="left">
                    <Link to="/">I B D A</Link>
                </LogoBox>
                <Box className="menu" theme={theme}>
                    <ItemBox className="menu-list">
                        <MenuItem to="/project" title="project" />
                    </ItemBox>
                    <ItemBox className="menu-list">
                        <MenuItem to="/member" title="member" />
                    </ItemBox>
                    <ItemBox className="menu-list">
                        <MenuItem to="/content" title="content" />
                    </ItemBox>
                </Box>
                <SideBox className="side menu" location="right">
                    <Link to="/info">Information</Link>
                </SideBox>
                {/* <SideBox> */}
                <MenuIcon trigger={trigger} setTrigger={setTrigger}></MenuIcon>
                {/* </SideBox> */}
            </Container>
            <MenuToggle className="toggle" trigger={trigger} setTrigger={setTrigger} />
        </>
    );
}

export default Nav;
