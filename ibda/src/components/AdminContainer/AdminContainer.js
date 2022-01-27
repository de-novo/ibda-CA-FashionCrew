import React, { useEffect, useState, useContext, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../utils/api";
import AdminBox from "../AdminBox/AdminBox";
import LoginBox from "../LoginBox/LoginBox";
import { TokenContext } from "../../hook/useToken";
//필요함수 /필요 데이터 뿌리기등
const List = ({ members = [], projects = [], userCodes = [] }) => ({
    project: {
        img: { tag: "input", type: "file" },
        title: { tag: "input", type: "text" },
        start: { tag: "input", type: "date" },
        end: { tag: "input", type: "date" },
        color: { tag: "input", type: "color" },
    },
    plan: {
        title: { tag: "input", type: "text" },
        start: { tag: "input", type: "date" },
        end: { tag: "input", type: "date" },
        color: { tag: "input", type: "color" },
        content: { tag: "textarea", type: "" },
    },
    photo: {
        img: { tag: "input", type: "file" },
        model: {
            tag: "selector",
            id: "member",
            option: [...members],
            dataType: "Array",
        },
        //셀렉터[{ _id: Number, name: String }]
        project: { tag: "selector", id: "project", option: [...projects] }, //셀렉터
        location: { tag: "input", type: "text" },
        photographer: {
            tag: "selector",
            id: "member",
            option: [...members],
        }, //셀렉터
    },
    notice: {
        title: { tag: "input", type: "text" },
        content: { tag: "textarea", type: "" },
    },
    member: {
        name: { tag: "input", type: "text" },
        eg_name: { tag: "input", type: "text" },
        insta: { tag: "input", type: "text" },
        userCode: { tag: "selector", id: "userCode", option: [...userCodes] }, //셀렉터
        subscription: { tag: "selector", type: "", option: [{ title: 2020 }, { title: 2021 }, { title: 2022 }] },
        birth: { tag: "input", type: "date" },
        img: { tag: "input", type: "file" },
    },
});

function AdminContainer() {
    const [formList, setFormlist] = useState(List({}));
    useEffect(() => {
        api.get("/admin").then((res) => {
            const { members, projects, userCodes } = res;
            setFormlist(List({ members, projects, userCodes }));
        });
    }, []);
    const navigate = useNavigate();
    const location = useLocation();

    const { token } = useContext(TokenContext);

    const tabHandler = {
        onClick: (children) => {
            navigate(children.toLowerCase());
        },
        tab: (children) => {
            return location.pathname === `/admin/${children.toLowerCase()}`;
        },
        match: (children) => {
            return `/content/${children}/:content_id`;
        },
    };
    return (
        <div>
            <LoginBox></LoginBox>
            {token ? <AdminBox List={formList} tabHandler={tabHandler} setList={setFormlist}></AdminBox> : null}
        </div>
    );
}

export default AdminContainer;
