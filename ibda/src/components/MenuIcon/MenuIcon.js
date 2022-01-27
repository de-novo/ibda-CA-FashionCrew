import React from "react";

import {IconBox} from './styles'


function MenuIcon({ trigger, setTrigger }) {
    return (
        <IconBox onClick={() => setTrigger(!trigger)} trigger={trigger}>
            <span></span>
            <span></span>
            <span></span>
        </IconBox>
    );
}

export default MenuIcon;
