import React from "react";
import styled from "styled-components";

import NoticeListCard from "../NoticeListCard/NoticeListCard";
import TabButton from "../TabButton/TabButton";

import NoticeCard from "../NoticeCard/NoticeCard";
import PlanCalendar from "../PlanCalendar/PlanCalendar";
import PlanCard from "../PlanCard/PlanCard";
const Container = styled.div`
    max-width: 96rem;
    margin: 3.2rem auto;
    width: 100%;
    heigth: 100%;
    position: relative;
`;
function ContentBox({ tabHandler, contents }) {
    // const navigate = useNavigate();
    return (
        <Container>
            <TabButton tabHandler={tabHandler}>Notice</TabButton>
            <TabButton tabHandler={tabHandler}>Plan</TabButton>
            <NoticeListCard contents={contents?.notices}>
                {/* {contents?.map((item, index) => {
                    return <NoticeListItem notice={item} key={index} onClick={()=>{navigate(`notice/${item?._id}`)}}/>;
                })} */}
            </NoticeListCard>
            <NoticeCard contents={contents?.notices}></NoticeCard>
            <PlanCalendar contents={contents?.plans || []}></PlanCalendar>
            <PlanCard contents={contents?.plans}></PlanCard>
        </Container>
    );
}

export default ContentBox;
