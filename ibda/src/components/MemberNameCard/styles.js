import styled, { css } from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: ${(props) => props.width || "100%"};
    border-right: 1px solid #cccccc;
    ${(props) => props.border || "border:none"};
    ${(props) => props.hover};
`;
export const Name = styled.p`
    font-size: 2rem;
    font-weight: 900;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #cccccc;
    word-break: keep-all;
    @media only screen and (max-width: 1600px) {
        font-size: 1.6rem;
    }
`;