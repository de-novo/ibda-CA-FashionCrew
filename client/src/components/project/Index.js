import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Member from "./Member_project";
import PhotoPage from "./Photo_page";
import Project from "./Project";

function Index(props) {
    const { windowSize, projects, photos } = props;
    // console.log(projects)
    return (
        <div>
            <Routes>
                <Route exact path="/project">
                    <Project windowSize={windowSize} projects={projects} photos={photos} />
                </Route>
                <Route path="/project/:member/:id">
                    <PhotoPage></PhotoPage>
                </Route>
                <Route path="/project/:member">
                    <Member windowSize={windowSize}></Member>
                </Route>

                <Route path="/project">
                    <div class="error">404</div>
                </Route>
            </Routes>
        </div>
    );
}

export default Index;
