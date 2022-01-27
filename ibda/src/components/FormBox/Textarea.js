import React from "react";
import styled from "styled-components";
const Container = styled.div`
    margin: 0.8rem;
`;
const Label = styled.label`
    display: block;
    font-size: 1.8rem;
`;
const TextareaZone = styled.textarea`
    width: 50%;
    height: 60rem;
    font-size: 1.6rem;
    resize: none;

    border-radius: 5px;
    outline: none;
    border: 1px solid #cccccc;
`;
function Textarea({ onChange, type, name }) {
    return (
        <Container>
            <Label>{name ?? name}</Label>
            <TextareaZone type={type} name={name} onChange={onChange}></TextareaZone>
        </Container>
    );
}

export default Textarea;
