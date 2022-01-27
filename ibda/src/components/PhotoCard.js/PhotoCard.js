import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Container = styled.div`
    background-color: ${({ theme }) => theme?.colors.backgroundTransparent};
    width: ${({ width }) => (width ? width : "20.8rem")};
    margin: auto;
    margin-bottom: 0.8rem;
    height: auto;
    font-size: ${({ theme }) => theme?.font.size.L};
    display: inline-block;
`;
const Box = styled.div`
    width: 100%;
    height: ${({ width }) => (width ? "auto" : "40rem")};
    position: relative;
`;
const ImgBox = styled.div`
    width: 100%;
    height: ${({ width }) => (width ? "auto" : "32rem")};

    background-color: ${({ theme }) => theme?.colors.backgroundTransparent};
`;

const InfoBox = styled.div`
    // position: relative;
`;

const Img = styled.img`
    margin: 0;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    width: 100%;
    border-radius: 5px;
`;

function PhotoCard({ width, item, info }) {
    const theme = useContext(ThemeContext);
    return (
        <Container theme={theme} width={width}>
            <Box width={width}>
                <ImgBox theme={theme} width={width}>
                    <Img src={`http://localhost:4000/${item?.imgUrl}`}></Img>
                </ImgBox>
                {info===true ? <InfoBox>{item?._id}</InfoBox> : null}
            </Box>
        </Container>
    );
}

export default PhotoCard;
