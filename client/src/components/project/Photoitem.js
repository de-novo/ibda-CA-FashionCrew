import React from "react";
import { Link } from "react-router-dom";

function Photoitem(props) {


    let name = props.member ? props.member.name : null;
    let birth = props.member ? props.member.birth.split("-")[0] : null;
    
    // console.log(props.sumRatio, "props.item", props.item, (props.item.imgRatio * 100) / props.sumRatio);
    return (
        <Link to={`/project/${name +"-"+ birth}/${props.item._id}`}>
            <div className="photo_container" style={{ width: (props.item.imgRatio * 100) / props.sumRatio + "%" }}>
                <div className="photo_box">
                    <div className="photo_img_box">
                        <img src={`http://localhost:4000/${props.item.imgUrl}`} alt="project_photo"></img>
                    </div>
                    <div className="photo_info_box">
                        <p>No.{props.item._id} </p>
                        <p>{name} </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Photoitem;
