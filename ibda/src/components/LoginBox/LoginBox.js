import React, { useContext } from "react";
import useInput from "../../hook/useInput";
import Input from "../FormBox/Input";
import styled from "styled-components";
import { TokenContext } from "../../hook/useToken";
const Button = styled.button`
    margin: 1.6rem auto;
    outline: none;
    background-color: #cccccc;
    border: none;
    padding: 1.6rem 3.2rem;
    border-radius: 5px;
`;
function LoginBox() {
    const { token, setToken } = useContext(TokenContext);
    const { inputs, onChange, onSubmit } = useInput("/admin/login", () => {}, {}, setToken);
    return (
        <>
            {" "}
            {!token ? (
                <form>
                    <Input type="text" name="ID" onChange={onChange}></Input>
                    <Input autocomplete="current-password" type="password" name="PW" onChange={onChange}></Input>
                    <Button onClick={onSubmit}>LOGIN</Button>
                </form>
            ) : null}
        </>
    );
}

export default LoginBox;
