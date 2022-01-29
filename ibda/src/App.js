import "./App.css";
import React from "react";

// import { useWindowSize } from "./hook/useWindowSize";

import Page from "./page/Router";
function App() {
    // const WindowSize = useWindowSize();

    // 스크롤 네브바
    // const [scrollTrigger, scrollTriggerSet] = useState(false);
    // const handleScroll = () => {
    //     // console.log('scrolled');
    //     if (window.scrollY > 40) {
    //         scrollTriggerSet(true);
    //         return;
    //     }
    //     scrollTriggerSet(false);
    //     return;
    // };
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // });

    return (
        <div className="App">
            <Page></Page>
        </div>
    );
}

export default App;
