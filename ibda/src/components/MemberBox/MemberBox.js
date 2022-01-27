import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import MemberNameCard from "../MemberNameCard/MemberNameCard";
import styled, { css } from "styled-components";

import { Container, Arrow, Containerhover, CSS } from "./styles";

function MemberBox({ member, index }) {
    return (
        <Container hover={Containerhover} className="박스" index={index}>
            <MemberNameCard className="name" member={member}></MemberNameCard>
            <MemberCard className="MemberCard" CSS={CSS.MemberCard} member={member}  index={index}></MemberCard>
            <Arrow className="arrow"></Arrow>
        </Container>
    );
}

export default MemberBox;
