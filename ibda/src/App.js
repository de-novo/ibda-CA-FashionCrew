import "./App.css";
import React, { useEffect, useState, useCallback } from "react";

import { queryStringToObject } from "./utils/url";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useWindowSize } from "./hook/useWindowSize";
//redux
import { connect } from "react-redux";
import { axiosDatas } from "./redux/index";

//main page
import Nav from "./components/Navbar/Nav";

import Carousel from "./components/Carousel/Carousel";
// 추가페이지들
import Page from "./page/Router";
function App(props) {
    const [uploadTrigger, setUploadTrigger] = useState(false);
    const { axiosDatas, loading } = props;
    const WindowSize = useWindowSize();
    // redux 정보가지고오기
    useEffect(() => {
        axiosDatas();
    }, [uploadTrigger, axiosDatas]);

    console.log(props.projects);

    // 스크롤 네브바
    const [scrollTrigger, scrollTriggerSet] = useState(false);
    const handleScroll = () => {
        // console.log('scrolled');
        if (window.scrollY > 40) {
            scrollTriggerSet(true);
            return;
        }
        scrollTriggerSet(false);
        return;
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    if (!props.members && !props.projects && !props.photos & !props.contents) {
        return <div>로딩중</div>;
    }
    return (
        <div className="App">
            <Page></Page>
        </div>
    );
}

// //오브젝트로 넘기기
const mapDispatchToProps = {
    axiosDatas,
};

const mapStateToProps = (state) => {
    return {
        contents: state.datas.contents,
        photos: state.datas.photos,
        projects: state.datas.projects,
        members: state.datas.members,
        loading: state.loading,
    };
};

//함수로 넘기기
// const mapDispatchToProps = (dispatch)=>{
//     console.log('dispatch'+dispatch)
//     return{
//         addSubscriber :  ()=>dispatch(addSubscriber),
//         axiosContents : ()=>dispatch(axiosContents)
//     }
//

export default connect(mapStateToProps, mapDispatchToProps)(App);
