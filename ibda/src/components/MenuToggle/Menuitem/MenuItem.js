import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ to, title }) {

    return (
        <div>
            <NavLink to={to} style={({ isActive }) => ({ fontWeight: isActive ?  "600" : '400' }) }>
                {title}
            </NavLink>
        </div>
    );
}

export default MenuItem;
