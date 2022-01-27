import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { useImage } from "../../hook/useImage";
import { useWindowSize } from "../../hook/useWindowSize";
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,];

const Container = styled.div`
    max-width: 96rem;
    width: 80%;
    margin: auto;
    position:relative;
`;
const Box = styled.div`
    width: ${({ WindowSize }) => (WindowSize.width > 960 ? "30%" : WindowSize.width > 768 ? "48%" : "98%")};
    display: inline-block;

    position:relative;
    vertical-align:top;
    margin: ${({ WindowSize }) => (WindowSize.width > 960 ? "1%" : WindowSize.width > 768 ? "1%" : "0%")};
 

`;
function PhotoContainer({ photos }) {
  
    const WindowSize = useWindowSize();
    
    const imageList = useImage({ WindowSize, images: photos });
    
    return (
        <Container>
            {imageList?.map((item, index) => {
                return (
                    <Box className="boxxxxx" WindowSize={WindowSize} key={index}>

                        {item?item.map((item, index) => {
                            return <PhotoCard width='100%' item={item} key={index} info={true}/>;
                        }):null}
                    </Box>
                );
            })}
        </Container>
    );
}

export default PhotoContainer;
