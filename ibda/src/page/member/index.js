import React from "react";
import MemberBox from "../../components/MemberBox/MemberBox";
import MemberNameCard from "../../components/MemberNameCard/MemberNameCard";
import MemberContainer from "../../components/MemberContainer/MemberContainer";
function Member({ members, photos }) {
    return (
        <div>
            <MemberContainer members={members} photos={photos}></MemberContainer>
        </div>
    );
}

export default Member;
