import React from 'react'
import { connect } from "react-redux";
import { axiosDatas } from "../../redux/index";
// import { Link, NavLink, Route, Switch, useParams, useLocation } from "react-router-dom";


function Projectlist(props) {




    // props.project.imgUrl
    return (
       
        <div className='project_item_container'>
        <div className='project_item_box'>
            <div className='project_img_box'><img src={props.project.imgUrl} alt='project_img'></img></div>
            <div className='project_info_box'> <p>{props.project._id}</p>
            <p>{props.project.concept}</p></div>
        </div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Projectlist)
