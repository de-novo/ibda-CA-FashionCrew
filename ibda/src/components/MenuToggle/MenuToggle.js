import React, { useCallback, useContext } from "react";
import { ThemeContext } from "styled-components";
import MenuItem from "./Menuitem/MenuItem";
import { Container, Box, ItemBox } from "./styles";

function MenuToggle({ trigger, setTrigger }) {
    const theme = useContext(ThemeContext);
    return (
        <Container trigger={trigger} theme={theme}>
            <Box>
                <ItemBox onClick={() => setTrigger(false)}>
                    <MenuItem to="/project" title="project" activeStyle={{ fontWeight: "900" }} />
                </ItemBox>
                <ItemBox onClick={() => setTrigger(false)}>
                    <MenuItem to="/member" title="member" activeStyle={{ fontWeight: "900" }} />
                </ItemBox>
                <ItemBox onClick={() => setTrigger(false)}>
                    <MenuItem to="/content" title="content" activeStyle={{ fontWeight: "900" }} />
                </ItemBox>
                <ItemBox onClick={() => setTrigger(false)}>
                    <MenuItem to="/info" title="information" activeStyle={{ fontWeight: "900" }} />
                </ItemBox>
            </Box>
        </Container>
    );
}

export default MenuToggle;
