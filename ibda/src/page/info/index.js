import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logo from "../../components/Logo/Logo";
// 나와유 소속

// 충남 천안아산지역의 패션,예술 동아리 IBDA

// 옷과 예술을 좋아하는 청년동아리
// 아산시 청년센터 나와유의 지원하에 아산을 기점으로 다양한 네트워크 활동과 콘텐츠를 제작하고 있습니다.

const Container = styled.div`
    z-index: -20;
    width: 100%;
    height: calc(100vh - 6rem);
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
    overflow-y: hidden;
`;

const Box = styled.div`
    height: calc(100vh - 6rem);
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all 1s;
`;
const fadein = keyframes`
0% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeout = keyframes`
0% {
    opacity:1;
  }
  100% {
    opacity: 0;
  }
`;
const Left = styled.div`
    transition: all 0.5s;
    width: ${({ width }) => (width ? width : "60%")};
    font-size: 2rem;
    height: 100%;
    background-color: #cccccc;
    > * {
        display: none;
        opacity: 0;
    }
    > :nth-child(${({ pageNum }) => (pageNum === 0 || pageNum ? pageNum + 1 : "n")}) {
        display: block;

        animation: ${fadein} 0.5s 0.5s linear normal;
        animation-fill-mode: forwards;
    }
`;
const Right = styled.div`
    font-size: 2rem;
    transition: all 0.5s;
    height: 100%;
    width: ${({ width }) => (width ? width : "40%")};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    > * {
        display: none;
        opacity: 0;
    }
    > :nth-child(${({ pageNum }) => (pageNum === 0 || pageNum ? pageNum + 1 : "n")}) {
        display: block;

        animation: ${fadein} 0.5s 0.5s linear normal;
        animation-fill-mode: forwards;
    }
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
    transform: translateY(-50%);
`;
const Svg = styled.svg`
    transform: translateY(-50%);
`;
const LeftItem = styled.div`
    transition: opacity 0.5s;
    transition-delay: 0.5s;

    width: 100%;
    height: 100%;

    & > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;
const RightItem = styled.div`
    transition: opacity 0.5s;

    // animation: ${({ animation }) => (animation ? fadein : fadeout)} 0.5s 0.5s linear normal;
    // animation-fill-mode: forwards;

    width: 100%;
    height: 100%;
    & > * {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

function Info() {
    const [pageNum, setPageNum] = useState(0);
    useEffect(() => {
        console.log(pageNum);
    }, [pageNum]);
    const contents = [
        {
            Left: (key) => (
                <RightItem key={key}>
                    <Span>옷과 예술을 좋아하는 청년동아리</Span>
                    <Span>I B D A</Span>
                </RightItem>
            ),
            Right: (key) => (
                <LeftItem key={key}>
                    <svg width="50%" viewBox="0 0 686 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M303 0.5H302.5V1V81V81.5H303H383H383.5V81V1V0.5H383H303ZM303 110.5H302.634L302.524 110.848L232.634 330.5H162H83H82.2492H81.8994L81.7795 330.829L1.53027 550.829L1.28539 551.5H2H3H82.2492H163H243H243.366L243.476 551.152L287.911 411.5H398.089L442.524 551.152L442.634 551.5H443H523H603.751H683H684H684.715L684.47 550.829L604.221 330.829L604.101 330.5H603.751H603H524H453.366L383.476 110.848L383.366 110.5H383H303ZM479.138 411.5H552.65L574.037 470.5H497.911L479.138 411.5ZM206.862 411.5L188.089 470.5H111.963L133.35 411.5H206.862ZM313.684 330.5L343 238.363L372.316 330.5H313.684Z"
                            fill="white"
                            stroke="grey"
                            strokeWidth="3px"
                        />
                    </svg>
                </LeftItem>
            ),
        },
        {
            Left: (key) => (
                <LeftItem key={key}>
                    <a href="https://www.instagram.com/ibda_archive/">
                        <Svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20%" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path
                                    d="M3035 12789 c-144 -13 -390 -55 -540 -94 -1169 -301 -2089 -1221
-2390 -2390 -40 -157 -81 -397 -95 -560 -6 -78 -10 -1256 -10 -3346 0 -3508
-2 -3362 55 -3675 157 -855 646 -1617 1358 -2118 498 -350 1058 -549 1677
-596 214 -16 6632 -9 6750 8 576 82 1009 238 1444 519 193 125 323 230 509
413 320 312 548 637 722 1033 134 302 211 587 267 977 17 118 24 6536 8 6750
-45 585 -225 1118 -541 1595 -503 760 -1282 1276 -2173 1440 -313 57 -163 55
-3695 54 -1785 -1 -3291 -6 -3346 -10z m6705 -1099 c927 -114 1678 -775 1905
-1675 69 -274 65 -29 65 -3620 0 -2856 -2 -3258 -15 -3362 -50 -379 -194 -738
-423 -1047 -96 -130 -328 -362 -458 -458 -309 -229 -668 -373 -1047 -423 -104
-13 -506 -15 -3362 -15 -3591 0 -3346 -4 -3620 65 -903 228 -1571 990 -1675
1914 -8 68 -10 1065 -8 3386 l3 3290 28 138 c162 811 724 1453 1494 1707 132
43 345 91 463 103 91 10 6571 6 6650 -3z"
                                />
                                <path
                                    d="M9785 10656 c-278 -65 -491 -272 -559 -547 -23 -93 -21 -255 4 -353
110 -432 583 -666 995 -493 111 46 253 160 316 253 175 258 173 598 -6 849
-89 125 -211 215 -362 268 -75 26 -106 30 -208 33 -78 3 -141 -1 -180 -10z"
                                />
                                <path
                                    d="M6195 9574 c-786 -62 -1494 -384 -2039 -930 -504 -503 -813 -1135
-913 -1864 -24 -177 -24 -596 1 -775 71 -521 231 -950 511 -1370 436 -655
1087 -1123 1837 -1320 470 -123 982 -137 1457 -39 612 126 1160 422 1606 869
507 507 815 1133 912 1855 22 167 25 590 5 750 -94 744 -404 1383 -922 1900
-500 499 -1139 811 -1855 905 -114 16 -494 27 -600 19z m400 -975 c428 -36
853 -207 1195 -479 113 -91 299 -283 386 -400 224 -300 361 -628 421 -1005 24
-154 24 -487 0 -644 -152 -971 -897 -1716 -1868 -1868 -153 -24 -499 -24 -647
0 -732 118 -1341 565 -1662 1220 -332 676 -298 1470 91 2114 177 292 460 575
752 752 399 241 869 350 1332 310z"
                                />
                            </g>
                        </Svg>
                    </a>
                </LeftItem>
            ),
            Right: (key) => (
                <RightItem key={key}>
                    <Span>CONTACT</Span>
                    <Span>
                        <a href="https://www.instagram.com/ibda_archive/">@ibda_archive</a>
                    </Span>
                </RightItem>
            ),
        },
        {
            Left: (key) => (
                <LeftItem key={key}>
                    <Span>아산시 청년센터 나와유의 지원하에 아산을 기점으로 다양한 네트워크 활동과 콘텐츠를 제작하고 있습니다.</Span>
                </LeftItem>
            ),
            Right: (key) => (
                <RightItem key={key}>
                    <a href="http://www.asan.go.kr/naeil/">
                        <Img src="http://localhost:4000/uploads/242738272_227693989388568_6239216232614514867_n.jpg"></Img>
                    </a>
                </RightItem>
            ),
        },
    ];

    const wheelHandler = (e) => {
        const { deltaY } = e;

        if (0 < deltaY) {
            //wheel down
            if (pageNum >= 0 && pageNum < contents.length - 1) {
                setPageNum(pageNum + 1);
            }
        } else if (0 > deltaY) {
            if (pageNum > 0 && pageNum <= contents.length - 1) {
                setPageNum(pageNum - 1);
            }
        }
    };

    const [startY, setStartY] = useState();
    const [endY, setEndY] = useState();
    const touchStartHandler = (e) => {
        return setStartY(e.changedTouches[0].screenY);
    };
    const touchEndHandler = (e) => {
        setEndY(e.changedTouches[0].screenY);
        console.log(startY - endY);
        if (startY - endY === 0) {
            return;
        }
        if (startY - endY > 25) {
            if (pageNum >= 0 && pageNum < contents.length - 1) {
                setPageNum(pageNum + 1);
            }
        } else if (endY - startY > 25) {
            if (pageNum > 0 && pageNum <= contents.length - 1) {
                setPageNum(pageNum - 1);
            }
        }
    };

    return (
        <Container>
            <Box onWheel={wheelHandler} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler}>
                <Left width={pageNum % 2 === 0 ? "60%" : "40%"} pageNum={pageNum}>
                    {/* {contents[pageNum]?.Left} */}
                    {contents.map((item, index) => {
                        return item?.Left(index);
                    })}
                </Left>
                <Right width={pageNum % 2 === 0 ? "40%" : "60%"} pageNum={pageNum}>
                    {/* {contents[pageNum]?.Right} */}
                    {contents.map((item, index) => {
                        return item?.Right(index);
                    })}
                </Right>
            </Box>
        </Container>
    );
}

export default Info;
