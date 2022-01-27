import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Nav(props) {
    // ᶜᵣᵉᵂ
    const { windowSize } = props;
    const [active, setActive] = useState(false);
    
    const on_menuHandler = () => {
        setActive(!active);
    };
    useEffect(() => {
        
         setActive(false);
    }, [windowSize.width]);
    return (
        <>
            <nav className={!active ? null : "active"}>
                <div className="logo" onClick={()=>setActive(false)}>
                    <Link to="/">I B D A</Link>
                </div>
                {windowSize.width > 768 ? (
                    <>
                        {" "}
                        <div className="menu">
                            <ul>
                                <li className="menu-list" >
                                    <NavLink to="/project" activeStyle={{ fontWeight: "900" }}>
                                        Project
                                    </NavLink>
                                </li>
                                <li className="menu-list" >
                                    <NavLink to="/member" activeStyle={{ fontWeight: "900" }} >
                                        Member
                                    </NavLink>
                                </li>
                                <li className="menu-list" >
                                    <NavLink to="/content" activeStyle={{ fontWeight: "900" }} >
                                        Content
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="side menu">
                            <Link to="/info">Information</Link>
                        </div>
                    </>
                ) : (
                    <div className={!active ? "toggle" : "toggle active"} onClick={on_menuHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </nav>

            <div className={!active ? "menu-box" : "menu-box active"}>
                <div className="menu" >
                    <ul>
                        <li className="menu-list" onClick={on_menuHandler}>
                            <NavLink to="/project" activeStyle={{ fontWeight: "900" }}>
                                Project
                            </NavLink>
                        </li>
                        <li className="menu-list" onClick={on_menuHandler}>
                            <NavLink to="/member" activeStyle={{ fontWeight: "900" }}>
                                Member
                            </NavLink>
                        </li>
                        <li className="menu-list" onClick={on_menuHandler}>
                            <NavLink to="/content" activeStyle={{ fontWeight: "900" }}>
                                Content
                            </NavLink>
                        </li>
                        <li className="menu-list" onClick={on_menuHandler}>
                            <NavLink to="/info" activeStyle={{ fontWeight: "900" }}>
                                Information
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Nav;
