import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MemberNameCard from "../MemberNameCard/MemberNameCard";
import MemberBox from "../MemberBox/MemberBox";
import memberService from "../../service/member_service";
const Container = styled.div`
    width: 100%;
    // background-color: green;
    height: 100%;
    position: absolute;
    margin-top: 3.6rem;
`;
const Box = styled.div`
    margin: auto;
    width: 100%;
`;
const Border = styled.div`
    z-index: -5;
    width: 10%;
    height: 100%;
    background-color: transparent;
    &.top {
        top: -3.6rem;
    }
    @media only screen and (max-width: 1300px) {
        width: 20%;
    }
    position: absolute;
    top: 0;
    border-right: 1px solid #cccccc;
`;

function MemberContainer() {
    const [members, setMembers] = useState();
    const [photos, setPhotos] = useState();
    useEffect(() => {
        (async function () {
            const Data = await memberService.GetMembers();
            console.log(Data.members)
            setMembers(Data.members);
        
        })();
    }, [setMembers, memberService]);
    return (
        <Container>
            <Border className="top"></Border>
            <Box className="바보">
                {/* <MemberBox member={members[1]} photos={photos}></MemberBox> */}
                {/* <MemberBox member={members[0]} photos={photos}></MemberBox> */}
                {/* <MemberBox member={members[0]} photos={photos}></MemberBox> */}

                {members?.map((item, index) => {
                    if (item.name === "admin") {
                        return;
                    }
                    return <MemberBox member={item} photos={photos} key={index} index={index}></MemberBox>;
                })}
            </Box>
            <Border className="바보"></Border>
        </Container>
    );
}

export default MemberContainer;
