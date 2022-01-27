import React from "react";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
function index({ contents }) {
    return (
        <div>
            <ContentContainer contents={contents}></ContentContainer>
        </div>
    );
}

export default index;
