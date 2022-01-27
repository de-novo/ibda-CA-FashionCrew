import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { axiosDatas} from "../../redux/index";

import Photos from "./Photos";
function Member(props) {
    const [user, setUser] = useState();
    const { member } = useParams();
    let name = member.split("-")[0];
    let birth = Number(member.split("-")[1]);
    const navigate = useNavigate();
    let [projectId, setProjectId] = useState([]);
    const { photos, projects, members, windowSize } = props;
    const [selector, setSelector] = useState();
    const href = user ? `https://www.instagram.com/${user.insta}/` : null;
    const [photo, setPhoto] = useState();
    const [loading, setloading] = useState(false);

    const on_buttonHandler = () => {
        navigate.goBack();
    };

    let imgUrl = user ? user.imgUrl : null;
    let photolength = photos.filter((item) => {
        return item.model === member;
    }).length;

    const on_selectorHandler = (e) => {
        setSelector(e.currentTarget.value);
    };

    useEffect(() => {
  
        let photoset = photos.filter((item) => {
            return item.model === member;
        });
        if (selector === "undefined" || null) {
            setPhoto(photoset);
        } else {
            photoset = photoset.filter((item) => {
                return Number(item.project) === Number(selector);
            });
            setPhoto(photoset);
        }
    }, [selector, member, photos]);

    useEffect(() => {

        let copy = [];
        let userset = members.filter((item) => {
            let userBirth = Number(item.birth.split("-")[0]);
            let userName = item.name;
            return name === userName && userBirth === birth;
        })[0];
        let photoset = photos.filter((item) => {
            return item.model === member;
        });

        console.log("ggg");
        photos.map((item) => {
            // console.log(item.model, member);
            // console.log(item.model === member);
            console.log(copy);
            return item.model === member ? (!copy.includes(item.project) ? copy.push(item.project) : null) : null;
        });
        setProjectId(copy);
        setUser(userset);
        setPhoto(photoset);
        setloading(true);
    }, [photos, member, birth, members, name]);

    const optionSet = () => {
        let result = [];
        projectId.map((id) => {
            let filter = projects.filter((project) => {
                return Number(project._id) === Number(id);
            })[0];
            // console.log(filter)
            if (filter) {
                return result.push(<option value={filter._id}>{filter.title}</option>);
            }
            return null;
        });
        return result.sort((a,b)=>{
            return a.props.value-b.props.value
        });
    };

    return (
        <>
            {loading ? (
                user ? (
                    <div>
                        <div className="profile-box">
                            <div className="profile-img">
                                <img style={{ width: "100%", overflow: "hidden" }} src={`http://localhost:4000/${imgUrl}`} alt={`member-img`} />
                            </div>
                            <div className="profile-txt-box">
                                <div>
                                    <p className="xxlarge">{user ? user.name : null}</p>
                                    <p className="xlarge">{user ? user.eg_name : null}</p>
                                    <p className="large">{user ? user.role : null}</p>
                                </div>
                                <div className="profile-txt-Num xlarge">
                                    <span>Project {projectId.length}</span>
                                    <span>Photo {photo ? photolength : null}</span>
                                    <p className="large sub"> subscription:{user ? user.subscription : null}</p>
                                </div>
                                <div className="profile-txt-insta">
                                    <p className="large">
                                        insta:<a href={href}>@{user ? user.insta : null}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="close_btn">
                                {" "}
                                <button onClick={on_buttonHandler} className="btn">
                                    x
                                </button>{" "}
                            </div>
                        </div>

                        <select onChange={on_selectorHandler} className="selector">
                            <option value="undefined">Project Filter</option>
                            <option value="undefined">All</option>

                            {optionSet()}
                        </select>
                        <div className="member_photo_box">
                            <Photos windowSize={windowSize} photo={photo}></Photos>
                        </div>
                    </div>
                ) : (
                    <div class="error">404</div>
                )
            ) : null}
        </>
    );
}
const mapDispatchToProps = {
    axiosDatas
  };
  
  const mapStateToProps = (state) => {
      return {
        contents: state.datas.contents,
        photos: state.datas.photos,
        projects: state.datas.projects,
        members: state.datas.members,
      };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Member);
