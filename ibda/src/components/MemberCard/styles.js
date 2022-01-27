import styled from "styled-components";
export const Container = styled.div`
    width: ${(props) => props.ratio || "100%"};
    width: 600%;
    // background-color: green;
    overflow: hidden;
    position: relative;
    transition: all 1s;
    padding: auto;
    transform-origin: 50% 50%;
    top: -50%;
    left: 100%;
    ${(props) => props.CSS};
`;


// 뒤집기효과 
export const Box = styled.div`
    // border: 1px solid #cccccc;
    width: 40%;
    border-radius: 5px;
    // background-color: black;
    margin: auto;
    overflow: hidden;
    height: auto;
    position: relative;
    transition: all 1s;

    
    &:hover {
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    }
    & > div {
        backface-visibility: hidden;

        transition: all 1s;
    }
    &:hover > div:nth-child(1) {
        transform: rotateY(180deg);

        transition: all 1s;
    }
    &:hover > div:nth-child(2) {
        transform: rotateY(0);
    }
    @media only screen and (max-width: 1300px) {
        width: 50%;
    }
`;
export const Info = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    
    transform: rotateY(-180deg);
    background-color: white;
`;
export const Profile = styled.div`
    position: absolute;

    
    padding: 4.8% 5.6%;
    bottom: 0;
    left: 0;
`;


export const Name = styled.div`
    font-size: 3rem;
    width: fit-content;
    position: relative;
    left: 0;
    word-break: keep-all;
    text-align: left;
    @media only screen and (max-width: 1300px) {
        font-size: 2.6rem;
    }
    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.6rem;
    }
`;

export const Role = styled.div`
    width: fit-content;
    position: relative;
    left: 0;
    font-size: 2rem;
    @media only screen and (max-width: 1300px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 1000px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`;

export const Insta = styled.div`
    width: fit-content;
    position: relative;
    left: 0;

    font-size: 2rem;
    @media only screen and (max-width: 1300px) {
        font-size: 1.6rem;
    }
    @media only screen and (max-width: 1000px) {
        font-size: 1.4rem;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`;

export const LogoBox = styled.div`
    width: 60%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
