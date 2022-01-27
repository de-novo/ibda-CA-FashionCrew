import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Textarea from "./Textarea";
import Selector from "./Selector";
import { TokenContext } from "../../hook/useToken";
import useInput from "../../hook/useInput";
const Container = styled.form`
    width: 100%;
    max-width: 96rem;
    margin: 1.6rem auto;
`;
const Button = styled.button`
    margin: 1.6rem auto;
    outline: none;
    background-color: #cccccc;
    border: none;
    padding: 1.6rem 3.2rem;
    border-radius: 5px;
`;
const FlexBox = styled.div`
    display: flex;
    justify-content: center;
`;
const validation = (inputs, form) => {
    return Object?.keys(form)
        .map((item) => {
            return inputs[item] && true;
        })
        .includes(undefined);
};

const arrangeItem = ({ name, formdata, index, onChange }) => {
    return formdata?.tag === "input" ? (
        <Input name={name} type={formdata?.type} id={formdata?.id} onChange={onChange} key={index}></Input>
    ) : formdata?.tag === "textarea" ? (
        <Textarea name={name} type={formdata?.type} id={formdata?.id} onChange={onChange} key={index}></Textarea>
    ) : formdata?.tag === "selector" ? (
        <Selector name={name} type={formdata?.type} id={formdata?.id} option={formdata?.option} onChange={onChange} key={index}></Selector>
    ) : null;
};
function Form({ name, form }) {
    const { setToken } = useContext(TokenContext);
    const { inputs, onChange, onSubmit, onChangeOfArray } = useInput(`/admin/${name}`, validation, form, setToken);
    const [modelNum, setModelNum] = useState(1);
    console.log(inputs?.photographer);

    console.log("렌더링");
    return (
        <Container>
            {Object.entries(form)?.map((item, index) => {
                const name = item[0];
                const formdata = item[1];
                return formdata?.dataType === "Array" ? (
                    <FlexBox key={index}>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                modelNum > 1 ? setModelNum(modelNum - 1) : setModelNum(1);
                            }}
                        >
                            -
                        </Button>
                        {[...Array(modelNum)].map((item, i) => {
                            return arrangeItem({
                                name,
                                formdata: formdata,
                                index: i,
                                onChange: (e) => {
                                    onChangeOfArray(e, i);
                                },
                            });
                        })}
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                setModelNum(modelNum + 1);
                            }}
                        >
                            +
                        </Button>
                    </FlexBox>
                ) : (
                    arrangeItem({ name, formdata, index, onChange })
                );
            })}
            <Button type="submit" onClick={onSubmit}>
                SUBMIT
            </Button>
        </Container>
    );
}

export default Form;
