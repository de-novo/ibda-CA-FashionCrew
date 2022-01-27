import "./App.css";
import React, { useEffect, useState,useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import { Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";



import { queryStringToObject,objectToQueryString } from "./utils/url";

//redux
import { connect } from "react-redux";
import { axiosDatas } from "./redux/index";

//main page
import Nav from "./components/Nav";
import Intro from "./components/Intro";

//project
import Project from "./components/project/Index";

//member
import Members from "./components/member/Members";

//content
import Contents from "./components/content/Contents";

// admin page
import useToken from './components/admin/useToken';
import Adminindex from "./components/admin/Index";

// 추가페이지들

function App(props) {
    
    console.log((queryStringToObject("a=1&b=2&c=3")))
    const { token, setToken } = useToken();


    const [uploadTrigger, setUploadTrigger] = useState(false);
    const { axiosDatas ,loading} = props;
    

    // redux 정보가지고오기
    useEffect(() => {

        axiosDatas();

       
    }, [uploadTrigger,axiosDatas]);
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
    

    function useWindowSize() {
        const isClient = typeof window === "object";

       
        const getSize= useCallback(
            () => {
                return {
                    width: isClient ? window.innerWidth : undefined,
                    height: isClient ? window.innerHeight : undefined,
                };
            },
            [isClient],
        )

        const [windowSize, setWindowSize] = useState(getSize);

        useEffect(() => {
            if (!isClient) {
                return false;
            }
            function handleResize() {
                setWindowSize(getSize());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, [isClient,getSize]);
        //   console.log(windowSize)
        return windowSize;
    }

    let windowSize = useWindowSize();

    if (!props.members && !props.projects && !props.photos & !props.contents) {
        return <div>로딩중</div>;
    }
    return (
        
        <div className="App">
            {loading ? (
                <Intro></Intro>
            ) : (
                <main className="main-content">
                     <header>
                <CSSTransition in={scrollTrigger} classNames="nav" timeout={200}>
                    <Nav windowSize={windowSize}></Nav>
                </CSSTransition>
            </header>
                    <Intro></Intro>
                    <Routes>
                        <Route exact path="/"></Route>

                        <Route path="/project">
                            <Project windowSize={windowSize} projects={props.projects} photos={props.photos}></Project>
                        </Route>

                        <Route path="/member">
                            <div className="member_container">
                                <Members windowSize={windowSize}></Members>
                            </div>
                        </Route>

                        <Route path="/content">
                            <Contents></Contents>
                        </Route>

                        <Route path="/admin">
                            <Adminindex
                                uploadTrigger={uploadTrigger}
                                setUploadTrigger={setUploadTrigger}
                                token={token}
                                setToken={setToken}
                                projects={props.projects}
                                members={props.members}
                            ></Adminindex>
                        </Route>
                        <Route path="/">
                            <div class="error">404</div>
                        </Route>
                    </Routes>
                </main>
            )}
        </div>
    );
}

// //오브젝트로 넘기기
const mapDispatchToProps = {
    axiosDatas
};

const mapStateToProps = (state) => {
    return {
        contents: state.datas.contents,
        photos: state.datas.photos,
        projects: state.datas.projects,
        members: state.datas.members,
        loading : state.loading
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
