import React from "react";
import styled from "styled-components";

import { useParams, useMatch, useLocation, useNavigate } from "react-router-dom";
const Button = styled.button`
    background: none;
    border-radius: 5px 5px 0 0;

    outline: none;
    width: 15rem;
    height: 5rem;
    border: ${({ tab }) => (tab ? "1px solid #cccccc" : "none")};
    // border: none;
    // background-color: ${({ tab }) => (tab ? "#cccccc" : "none")};
    border-bottom: none;
    
`;


function TabButton({ children, tabHandler }) {
    const match = useMatch(tabHandler?.match(children));
    // console.log(tabHandler.tab(children) || match)

    return (
        <Button onClick={() => tabHandler?.onClick(children)} tab={tabHandler?.tab(children) || match}>
            {children}
        </Button>
    );
}

export default TabButton;
