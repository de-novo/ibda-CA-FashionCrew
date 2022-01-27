import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { axiosDatas } from "../../redux/index";

function Photo_page(props) {
    const { member, id } = useParams();
    const { photos } = props;
    let name = member;
    console.log(member, id);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const on_buttonHandler = () => {
        navigate.goBack();
    };
    useEffect(() => {
        console.log("gggggg");
        let photoset = photos.filter((item) => {
            return item.model === name && Number(item._id) === Number(id);
        })[0];

        setPhoto(photoset);
    }, [id, name, photos]);

    return (
        <>
            {photo ? (
                <div className="photo_modal">
                    <div className="img-box">
                        <img style={{ width: "100%", overflow: "hidden" }} src={photo ? `http://localhost:4000/${photo.imgUrl}` : null} alt="member-profile"></img>
                    </div>
                    <div className="close_btn_">
                        {" "}
                        <button className="btn close_btn_" onClick={on_buttonHandler}>
                            x
                        </button>{" "}
                    </div>
                </div>
            ) : (
                <div class="error">404</div>
            )}
        </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Photo_page);
