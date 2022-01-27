import React from "react";
import styled, { css } from "styled-components";
import { Container,Name } from "./styles";



function MemberNameCard({ className, member, width, border, hover }) {
    return (
        <Container className={className} width={width} border={border} hover={hover}>
            <Name>{member?.eg_name}</Name>
        </Container>
    );
}

export default MemberNameCard;
