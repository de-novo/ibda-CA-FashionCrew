import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndexValues.nav};
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 3.2rem;
    align-items: center;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.font.size.xL};
`;

export const Box = styled.ul`
    font-weight: 100;
    ${({ theme }) => theme.common.flexCenter};
    width: 50%;
    max-width: 50rem;
    padding: 0;
    @media only screen and (max-width: 780px) {
        display: none;
    }
`;
export const LogoBox = styled(Box)`
    width: 15rem;

    justify-content: ${({ location }) => (location ? location : null)};
    @media only screen and (max-width: 780px) {
        display: inherit;
    }
`;
export const SideBox = styled(Box)`
    width: 15rem;

    justify-content: ${({ location }) => (location ? location : null)};
`;
export const ItemBox = styled.li`
    list-style: none;
    margin: 0 1.5rem;
`;
