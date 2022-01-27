import React from "react";

import PhotoCard from "../PhotoCard.js/PhotoCard";
import Logo from "../Logo/Logo";
import { Container, Box, Info, LogoBox, Profile, Name, Role, Insta } from "./styles";
function MemberCard({ className, member, photos, ratio, inline, CSS, index }) {
    return (
        <Container index={index} className={className} member={member} photos={photos} inline={inline} ratio={ratio} CSS={CSS}>
            <Box>
                <PhotoCard item={member} width={"100%;"}></PhotoCard>
                <Info>
                    {" "}
                    <LogoBox>
                        <Logo></Logo>
                    </LogoBox>
                    <Profile>
                        <Name>
                            {member?.name} / {member?.eg_name}
                        </Name>

                        <Role>{member?.role}</Role>
                        <Insta>CONTACT @{member?.insta}</Insta>
                    </Profile>
                </Info>
            </Box>
        </Container>
    );
}

export default MemberCard;
