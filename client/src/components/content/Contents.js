import React from "react";

import { connect } from "react-redux";
import { axiosDatas } from "../../redux/index";
import Notices from "./Notices";
import Plans from "./Plans";

import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Plan from "./Plan";

const Contents = (props) => {
    // useEffect(() => {
    //     plansSet([...props.contents.filter((content) => content.board == "Plan"), ...props.projects])
    //     console.log('Contents PlasSet')
    // }, [location])

    const NoticeSet = (
        <div className="Noticebox">
            <p className="info_large"> - NOTICE -</p>
            <div>
                <Notices contents={[...props.contents.filter((content) => content.board === "Notice")]}></Notices>
            </div>
        </div>
    );

    console.log(props);

    const plansSet = (
        <>
            <div className="plan_container">
                <Plans contents={[...props.contents.filter((content) => content.board === "Plan")]} projects={props.projects}></Plans>
            </div>
        </>
    );

    return (
        <div>
            <div className="btn_box_">
                <div>
                    <button className="btn" value="Notice">
                        <Link to="/content/notice">NOTICE</Link>
                    </button>
                    <span className="btn">/</span>
                    <button className="btn" value="Plan">
                        <Link to="/content/plan">PLAN</Link>
                    </button>
                </div>
            </div>

            <Routes>
                <Route exact path="/content/notice">
                    {NoticeSet}
                </Route>
                <Route exact path="/content/plan">
                    {plansSet}
                </Route>
                <Route path="/content/plan/:id/:title">
                    <Plan contents={[...props.contents.filter((content) => content.board === "Plan")]} projects={props.projects}></Plan>
                </Route>
                <Route path="/content/notice">
                    {" "}
                    <div class="error">404</div>
                </Route>
            </Routes>
        </div>
    );
};

const mapDispatchToProps = {
    axiosDatas,
};

const mapStateToProps = (state) => {
    return {
        contents: state.datas.contents,
        photos: state.datas.photos,
        projects: state.datas.projects,
        members: state.datas.members,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contents);
