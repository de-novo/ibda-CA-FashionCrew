import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Project from "./project";
import { useWindowSize } from "../hook/useWindowSize";
import { connect } from "react-redux";
import { axiosDatas } from "../redux";
import Member from "./member";
import Content from "./content";
import Admin from "./admin";
import Home from "./home";
import Info from "./info";
function Page(props) {
    const WindowSize = useWindowSize();

    return (
        <div>
            <Nav WindowSize={WindowSize} />
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/project" element={<Project photos={props.photos} projects={props.projects} />}>
                    <Route path=":id" element={<Project photos={props.photos} projects={props.projects} />}></Route>
                </Route>
                <Route path="/member" element={<Member members={props.members} photos={props.photos}></Member>}></Route>
                <Route path="/content" element={<Content members={props.members} photos={props.photos} contents={props.contents}></Content>}>
                    <Route path="notice" element={<Content members={props.members} photos={props.photos} contents={props.contents}></Content>}>
                        <Route path=":id" element={<Content members={props.members} photos={props.photos} contents={props.contents}></Content>} />
                    </Route>{" "}
                    <Route path="plan" element={<Content members={props.members} photos={props.photos} contents={props.contents}></Content>}>
                        <Route path=":id" element={<Content members={props.members} photos={props.photos} contents={props.contents}></Content>} />
                    </Route>
                </Route>
                <Route path="/admin" element={<Admin members={props.members} photos={props.photos}></Admin>}>
                    <Route path=":path" element={<Admin members={props.members} photos={props.photos}></Admin>} />
                </Route>
                <Route path='/info' element={<Info></Info>}></Route>
            </Routes>
        </div>
    );
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
