import React, { useState, useEffect } from "react";
import Plans from "./Plans";

import { connect } from "react-redux";

import { axiosDatas } from "../../redux/index";
import { useParams, useNavigate } from "react-router-dom";

// [...props.contents.filter((content) => content.board == "Plan"), ...props.projects]
function Plan(props) {
    const navigate = useNavigate();

    let { id, title } = useParams();
    console.log("props", props);
    console.log("id:", id);
    console.log("title:", title);
    const [item, itemSet] = useState();
    const [loding, SetLodig] = useState(false);

    useEffect(() => {
        if (props.contents && props.projects) {
            let filterItem = [...props.contents, ...props.projects].filter((item) => Number(item._id) === Number(id) && item.title === title);
            console.log("filterItem", filterItem);
            itemSet(filterItem[0]);
        } else {
        }
        SetLodig(true);
    }, [props, id, title]);

    return (
        <div>
            {loding ? (
                item ? (
                    <div className="plan_item_box">
                        <div className="close_btn_box">
                            <button
                                className="btn"
                                onClick={() => {
                                    navigate("/content/plan");
                                }}
                            >
                                X
                            </button>
                        </div>
                        <div className="plan_itme">
                            <div className="plan_item_plan">
                                <Plans contents={[...props.contents.filter((content) => content.board === "Plan")]} projects={props.projects}></Plans>
                            </div>
                            <div className="plan_item_plan ">
                                <p className="plan_info"> Title : {item.title}</p>

                                {item.start ? (
                                    <p className="plan_info">
                                        {" "}
                                        Period : {item.start}~{item.end}
                                    </p>
                                ) : (
                                    <p className="plan_info"> Date : {item.date}</p>
                                )}

                                {/* <p className= 'plan_info'> Date : {item.date}</p> */}
                                {item.concept ? null : <p className="plan_info"> Content : {item.content}</p>}
                                {/* <p className= 'plan_info'> Content : {item.content}</p> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="error">404</div>
                )
            ) : (
                <div>loading</div>
            )}
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
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Plan);
