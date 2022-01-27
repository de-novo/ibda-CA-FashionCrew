import React, { useEffect, useRef,useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// 나와유 소속

// 충남 천안아산지역의 패션,예술 동아리 IBDA

// 옷과 예술을 좋아하는 청년동아리
// 아산시 청년센터 나와유의 지원하에 아산을 기점으로 다양한 네트워크 활동과 콘텐츠를 제작하고 있습니다.

const Container = styled.div`
    width: 100%;

    height: calc(100vh - 6rem);
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;
const Item = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;
const Left = styled.div`
    top: 50%;
    width: ${({ width }) => (width ? width : "60%")};
    font-size: 2rem;

    background-color: #cccccc;
`;
const Right = styled.div`
    width: ${({ width }) => (width ? width : "40%")};
`;
const Span = styled.span`
    display: block;
    position: relative;
    margin: auto;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    word-break: keep-all;
`;
const Img = styled.img`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;
function Info() {
    const containerRef = useRef();
    const [pageNum,setPageNum]= useState(0)
    useEffect(()=>{
        console.log(pageNum)
    },[pageNum])
    useEffect(() => {
        console.log('useEffect')
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = containerRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                console.log("down");
                if(pageNum<5){
                    setPageNum((pageNum)=>pageNum+1)
                    
                }
            } else {

                console.log("up");
                if(pageNum>5){
                    setPageNum((pageNum)=>pageNum-1)
                    
                }
            }
        };

        const containerRefCurrunt = containerRef.current;
        containerRefCurrunt.addEventListener("wheel", wheelHandler);
        return () => {
            containerRefCurrunt.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <Container ref={containerRef}>
            <Item>
                <Left>
                    <Span>아산시 청년센터 나와유의 지원하에 아산을 기점으로 다양한 네트워크 활동과 콘텐츠를 제작하고 있습니다.</Span>
                </Left>
                <Right>
                    <a href="http://www.asan.go.kr/naeil/">
                        <Img src="http://localhost:4000/uploads/242738272_227693989388568_6239216232614514867_n.jpg"></Img>
                    </a>
                </Right>
            </Item>
            <Item>
                <Left width="40%">
                    <Span>아산시 청년센터 나와유의 지원하에 아산을 기점으로 다양한 네트워크 활동과 콘텐츠를 제작하고 있습니다.</Span>
                </Left>
                <Right width="60%">
                    <a href="http://www.asan.go.kr/naeil/">
                        <Img src="http://localhost:4000/uploads/242738272_227693989388568_6239216232614514867_n.jpg"></Img>
                    </a>
                </Right>
            </Item>
        </Container>
    );
}

export default Info;
