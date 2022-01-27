import styled from "styled-components";

export const Container = styled.div`
    font-size: ${({ theme }) => theme.font.size?.xL};

    z-index: 9999;
    transition: 0.5s;
    width: 100%;
    background: rgb(255, 255, 255);
    height: 100vh;
    position: fixed;
    right: -100%;
    color: black;
    ${({ trigger }) =>
        trigger &&
        `
    right: 0;
    `}
`;
export const Box = styled.ul`
    font-weight: 100;
    display: flex;
    max-height: 50rem;
    height: 100%;
    flex-flow: column;
    min-width: 15rem;
    padding: 0;
    justify-content: center;
`;
export const ItemBox = styled.li`
    list-style: none;
    margin: 2% 1.5rem;
`;
