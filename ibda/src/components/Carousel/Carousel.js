import React, { useContext } from "react";
import { Slide } from "./styles";
import { useNavigate } from "react-router-dom";
import PhotoCard from "../PhotoCard.js/PhotoCard";
import { ThemeContext } from "styled-components";

function Carousel({ projects }) {
    const theme = useContext(ThemeContext);

    const navigate = useNavigate();
    const settings = {
        beforeChange: async (current, next) => {
            navigate(`${projects[next] ? projects[next]._id : "/project"}`);
        },
        // initialSlide: initialSlide,

        focusOnSelect: true,
        centerMode: true,
        centerPadding: "0px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 1700, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: projects.length >= 7 ? 7 : projects.length,
                },
            },
            {
                breakpoint: 1600, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: projects.length >= 5 ? 5 : projects.length,
                },
            },
            {
                breakpoint: 1200, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: projects.length >= 3 ? 3 : projects.length,
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
        <div>
            <Slide {...settings}>
                {projects?.map((item, index) => (
                    <PhotoCard theme={theme} item={item} key={index} info={true}></PhotoCard>
                ))}
            </Slide>
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "" }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "" }} onClick={onClick} />;
}

export default Carousel;
