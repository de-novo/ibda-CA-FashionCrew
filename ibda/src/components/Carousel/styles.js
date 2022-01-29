import Slick from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export const Slide = styled(Slick)`
    margin: 3.2rem 0;
    .slick-slide {
        opacity: 0.8;
        transition: all 0.5s;
    }
    .slick-center {
        font-size: ${({ theme }) => theme.font.size.L};
        transform: scale(1.2);
        opacity: 1;
        z-index: 5;
    }
    .slick-arrow {
        width: 4rem;
        height: 100%;
    }
    .slick-prev {
        left: 0;
        z-index: 5;
    }
    .slick-next {
        right: 0;
    }
`;
