import React from "react";
import styled from "styled-components";

import TabButton from "../TabButton/TabButton";
import Formbox from "../FormBox/Formbox";
//view 담당
const Container = styled.div`
    margin: 3.2rem;
`;
function AdminBox({ List, tabHandler }) {
 


    
    return (
        <Container>
            {Object.keys(List)?.map((item, index) => {
                return (
                    <TabButton key={index} tabHandler={tabHandler}>
                        {item}
                    </TabButton>
                );
            })}
            {Object.keys(List)?.map((item, index) => {
                return <Formbox name={item} form={List[item]} key={index}></Formbox>;
            })}
        </Container>
    );
}

export default AdminBox;
