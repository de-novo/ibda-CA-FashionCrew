import React from "react";
import { Link } from "react-router-dom";

const Member = (props) => {
    const { member, } = props;
    const userName = member.name;
    const userBirth = member.birth.split('-')[0];
    
    const set = ()=>{
        setTimeout(() => {
            return 'before'
        }, 1000);
    }
    const href = `https://www.instagram.com/${member.insta}/`;
    return (
        <div className="member_box">
            <hr className="left-line"></hr>
            <hr className="diagonal-line"></hr>
            <div className="member">
                <div className="memberinfo_box">
                    <div className="memberinfo">
                        <div className="member_name_role">
                            <p className="info_large _mem_name">{member.eg_name}</p>
                            <p className="info_medium _mem_role">
                                {member.role}
                            </p>
                        </div>
                        <div className="member_insta">
                            <p className="info_medium _mem_insta">
                                INSTA : @{" "}
                                <a href={href}>
                                    {" "}
                                    <span>{member.insta}</span>{" "}
                                </a>
                            </p>
                            <p className="info_micro _mem_contact">CONTACT DM</p>
                        </div>

                      
                    </div>
                </div>
                <div className="memberimg">
                    {" "}
                    <img src={`http://localhost:4000/${member.imgUrl}`} style={{ width: "100%", overflow: "hidden" }} alt="member_img"></img>
                </div>
            </div>
            <div className="memberproject info_small ">
                <Link to={`/project/${userName+'-'+userBirth}`}>
                    <p>
                        {member.eg_name.split(" ")[0]}'s Project <img src="uploads/next_button_vector.svg" alt="next_arrow"></img>
                    </p>
                </Link>{" "}
            </div>
        </div>
    );
};

export default Member;
