import React from "react";

import { Container,Name } from "./styles";



function MemberNameCard({ className, member, width, border, hover }) {
    return (
        <Container className={className} width={width} border={border} hover={hover}>
            <Name>{member?.eg_name}</Name>
        </Container>
    );
}

export default MemberNameCard;
