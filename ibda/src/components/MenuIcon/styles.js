import styled from "styled-components";
export const IconBox = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    overflow: hidden;

    > span {
        position: absolute;
        width: 100%;
        height: 0.25rem;
        background-color: black;
        border-radius: 10px;
        /* border: 1px solid black; */
        transition: 0.5s;
        /* border: 1px solid black; */
    }
    span:nth-child(1) {
        transform: translateY(-0.8rem);
    }
    span:nth-child(3) {
        transform: translateY(0.8rem);
    }

    ${({ trigger }) => {
        // if (trigger) {
        //     return `span:nth-child(1) {
        //         width: 2rem;
        //         transform: translateY(0rem) rotate(45deg);
        //     }
        //    span:nth-child(2) {
        //         transform: translateX(8rem);
        //     }
        //    span:nth-child(3) {
        //         width: 2rem;
        //         transform: translateY(0rem) rotate(-45deg);
        //     }`;
        // }
        return (
            trigger &&
            ` 
        span:nth-child(1) {
        width: 2rem;
        transform: translateY(0rem) rotate(45deg);
        }
         span:nth-child(2) {
        transform: translateX(8rem);
        }
          span:nth-child(3) {
        width: 2rem;
        transform: translateY(0rem) rotate(-45deg);
         }`
        );
    }}

    @media only screen and (max-width: 780px) {
        display: flex;
    }
`;
