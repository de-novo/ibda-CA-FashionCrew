import React from "react";
import styled from "styled-components";

const LogoSvg = styled.svg`
    width: ${({width})=>width?width:'100%'}
`;
function Logo({width}) {
    return (
        <LogoSvg width={width} height="552" viewBox="0 0 686 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M303 0.5H302.5V1V81V81.5H303H383H383.5V81V1V0.5H383H303ZM303 110.5H302.634L302.524 110.848L232.634 330.5H162H83H82.2492H81.8994L81.7795 330.829L1.53027 550.829L1.28539 551.5H2H3H82.2492H163H243H243.366L243.476 551.152L287.911 411.5H398.089L442.524 551.152L442.634 551.5H443H523H603.751H683H684H684.715L684.47 550.829L604.221 330.829L604.101 330.5H603.751H603H524H453.366L383.476 110.848L383.366 110.5H383H303ZM479.138 411.5H552.65L574.037 470.5H497.911L479.138 411.5ZM206.862 411.5L188.089 470.5H111.963L133.35 411.5H206.862ZM313.684 330.5L343 238.363L372.316 330.5H313.684Z"
                fill="white"
                stroke="grey"
                strokeWidth="3px"
            />
        </LogoSvg>
    );
}

export default Logo;
