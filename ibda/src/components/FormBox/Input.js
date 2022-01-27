import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0.8rem;
`;

const InputBar = styled.input.attrs(({ type, name, min, max, autocomplete  }) => ({
    type: type,
    name: name,
    min: min,
    max: max,
    autocomplete : autocomplete ,
}))`
    width: 20rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cccccc;
    font-size: 1.6rem;
    &[type="file"]::file-selector-button {
        outline: none;
        border: 1px solid #cccccc;
        background-color: #cccccc;
    }
`;
const Label = styled.label`
    display: block;
    font-size: 1.8rem;
`;
function Input({ onChange, type, name }) {
    return (
        <Container>
            <Label>{name ?? name}</Label>
            <InputBar type={type} name={name} onChange={onChange}></InputBar>
        </Container>
    );
}

export default Input;
