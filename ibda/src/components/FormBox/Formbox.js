import React from "react";
import Form from "./Form";
import { useMatch } from "react-router-dom";

// 탭 관리

function Formbox({ name, form }) {
    const match = useMatch(`/admin/${name}`);
    return <div>{match ? <Form name={name} form={form}></Form> : null}</div>;
}

export default Formbox;
