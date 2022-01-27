import styled, { css } from "styled-components";
export const Container = styled.div`
    border-right: 1px solid #cccccc;
    width: 10%;
    position: relative;
    vertical-align: top;
    left: 0;
    height: 6.4rem;
    @media only screen and (max-width: 1300px) {
        width: 20%;
    }
    ${(props) => props.hover};
`;
export const Arrow = styled.div`
    position: absolute;
    display: none;
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #cccccc;
    border-left: 10px solid none;
    top: 50%;
    left: 100%;
    transform: translate(-100%, -50%);
`;

export const Containerhover = css`
    &:hover {
        .MemberCard {
            // min-height: 100vh;
            min-height: 90vh;
            height: auto;
            top: ${({ index }) => index * -100 || -100}%;
            width: 800%;
            padding: auto;
            > div {
                padding: 0 0;
                display: block;
            }
        }
        .name > p {
            color: black;
        }
        .arrow {
            display: block;
        }
    }
    @media only screen and (max-width: 1300px) {
        &:hover {
            .MemberCard {
                min-height: 100vh;

                width: 400%;
            }
        }
    }
`;

export const CSS = {
    MemberNameCard: css``,
    MemberCard: css`
        display: absolute;

        top: -50%;

        height: 0;
        width: 0;
    `,
};
