import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMatch } from "react-router-dom";

const Container = styled.div`
    position: relative;
    // background-color: blue;
    text-align: left;
`;
const InfoBox = styled.div`
    text-align: left;
    font-size: 1.8rem;
    padding: 1.6rem;
    border-bottom: 1px solid #cccccc;
`;
const Title = styled.h1`
    text-align: left;
    margin: 0.8rem;
    font-weight: 500;
    // font-size: 2.4rem;
`;
const Info = styled.span`
    margin: 0.8rem;
`;
const Boundary = styled.div`
    display: inline-block;
    width: 0.2rem;
    border-right: 1px solid #cccccc;
    height: 1.2rem;
`;

const Article = styled.div`
    text-align: left;
    padding: 1.6rem;
    margin: 0.8rem;
    font-size: 1.6rem;
    min-height: 60rem;
    border-bottom: 1px solid #cccccc;
`;

function NoticeCard({ contents }) {
    const match = useMatch("/content/notice/:id");
    const [content, setContent] = useState();
    useEffect(() => {
        const content = contents?.filter((item) => {
            return Number(item._id) === Number(match?.params.id);
        })[0];
        if (content) {
            setContent(content);
        }

        //data 가져오기
        return () => {};
    }, [match, contents, setContent]);
    return (
        <>
            {match ? (
                <Container>
                    <InfoBox>
                        <Title>{content?.title}</Title>
                        <Info>{content?.writer?.name}</Info>
                        <Boundary></Boundary>
                        <Info>{content?.date.slice(0,10)}</Info>
                    </InfoBox>
                    <Article>
                        <span>{content?.content}</span>
                    </Article>
                </Container>
            ) : null}
        </>
    );
}

export default NoticeCard;
