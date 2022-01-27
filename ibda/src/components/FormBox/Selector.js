import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0.8rem;
`;
const Label = styled.label`
    display: block;
    font-size: 1.8rem;
`;
const Select = styled.select`
    width: 20rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #cccccc;
    font-size: 1.6rem;
`;
function Selector({ onChange, type, name, option, id }) {
    return (
        <Container>
            <Label>{name ?? name}</Label>
            <Select onChange={onChange} name={name} type={type} id={id}>
                <option value={false}>{name ?? null}</option>;
                {option?.map((item, index) => {
                    return (
                        <option key={index} value={item._id === 0 ? item._id : item._id || item?.title}>
                            {item?.name || item?.title}
                        </option>
                    );
                })}
            </Select>
        </Container>
    );
}

export default Selector;
