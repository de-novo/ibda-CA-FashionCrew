import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import Adminnav from "./Adminnav";

import Admincode from "./Admincode";

import Addproject from "./Addproject";
import Addmember from "./Addmember";
import Addphoto from "./Addphoto";
import Addcontent from "./Addcontent";

function index(props) {
    // console.log("index", props);
    return (
        <div>
            <Admincode token={props.token} setToken={props.setToken}></Admincode>
            {props.token ? (
                <>
                    <Adminnav></Adminnav>{" "}
                    <Routes>
                        {" "}
                        <Route path="/admin/member">
                            <Addmember upload={{ uploadTrigger: props.uploadTrigger, setUploadTrigger: props.setUploadTrigger }} token={props.token} setToken={props.setToken}></Addmember>
                        </Route>
                        <Route path="/admin/project">
                            <Addproject upload={{ uploadTrigger: props.uploadTrigger, setUploadTrigger: props.setUploadTrigger }}  token={props.token} setToken={props.setToken}></Addproject>
                        </Route>
                        <Route path="/admin/photo">
                            <Addphoto token={props.token}  setToken={props.setToken} upload={{ uploadTrigger: props.uploadTrigger, setUploadTrigger: props.setUploadTrigger }} projecslist={props.projects} members={props.members}></Addphoto>
                        </Route>
                        <Route path="/admin/content">
                            <Addcontent token={props.token} setToken={props.setToken} upload={{ uploadTrigger: props.uploadTrigger, setUploadTrigger: props.setUploadTrigger }}></Addcontent>
                        </Route>
                    </Routes>
                </>
            ) : null}
        </div>
    );
}

export default index;
