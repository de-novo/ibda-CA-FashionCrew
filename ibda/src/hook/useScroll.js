import { useState, useEffect } from "react";

export const useScroll = () => {
    // console.log('scrolled');

    const [scroll, setScroll] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setScroll({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });
    return scroll;
};
