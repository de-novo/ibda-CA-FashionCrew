import React from "react";
import { connect } from "react-redux";
import { axiosDatas } from "../../redux/index";
// import { Link, NavLink, Route, Switch, useParams, useLocation } from "react-router-dom";
import "./slick.css";
import "./slick-theme.css";
import Slideritem from "./Slideritem";
import Slider from "react-slick";

function ProjectTop(props) {
    const settings = {
        beforeChange: (current, next) => {
            console.log('프로젝트탑 인덱스',next)
            console.log('프로젝트탑',props.projects[next])
            props.setNowIndex(next);
           
        },
        
        focusOnSelect: true,
        centerMode: true,
        centerPadding: "0px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: props.projects.length>=7 ? 7: props.projects.length>=5 ? 5 : props.projects.length,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 1600, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: props.projects.length>=5 ? 5 : props.projects.length,
                },
            },{
                breakpoint: 1097, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: props.projects.length>=3 ? 3 : props.projects.length,
                },
            },
            {
                breakpoint: 665, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="slider_container">
            <Slider {...settings}>
                {props.projects.map((item) => {
                    return <Slideritem project={item} key={item._id}></Slideritem>;
                })}
            </Slider>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTop);

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "" }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "" }} onClick={onClick} />;
}
