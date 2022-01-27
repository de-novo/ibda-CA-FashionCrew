import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoticeListItem from '../NoticeListItem/NoticeListItem.js'
const Container = styled.div`
    width: 100%;

    height: 100%;
    position: relative;
`;
const Table = styled.table`
    width: 100%;
    font-size: 1.6rem;
    border-collapse: collapse;
`;
const Col = styled.col`
    width: 15%;
    background-color: white;
`;
const Head = styled.thead``;
function NoticeCard({ contents }) {
    const match = useMatch("/content/notice");
    const navigate = useNavigate();
    return (
        <Container >
            {match ? (
                <Table>
                    <caption>NOTICE</caption>
                    <colgroup>
                        <Col width={"15%"}></Col>
                        <col width={"70%"}></col>
                        <col width={"15%"}></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>DATE </th>
                            <th>TITLE</th>
                            <th>WRITER </th>
                        </tr>
                    </thead>
                    {contents?.map((item, index) => {
                    return <NoticeListItem notice={item} key={index} onClick={()=>{navigate(`notice/${item?._id}`)}}/>;
                })}
                </Table>
            ):null}
        </Container>
    );
}

export default NoticeCard;
