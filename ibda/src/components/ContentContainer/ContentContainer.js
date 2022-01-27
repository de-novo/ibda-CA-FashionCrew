import React, { useEffect, useState } from "react";

import ContentBox from "../ContentBox/ContentBox";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import contentService from "../../service/content_service";
function ContentContainer() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [contents, setContents] = useState();

    // const contentsHandler = useCallback(
    //     async (contents) => {
    //         if (location.pathname === "/content/notice") {
    //             console.log("/content/notice");

    //             const contentServiceInstanse = contentService;
    //             const data = await contentServiceInstanse.GetNotices();

    //             setContents({ ...contents, notices: data.notices });
    //         } else if (location.pathname === "/content/plan") {
    //             const contentServiceInstanse = contentService;
    //             const data = await contentServiceInstanse.GetPlans();

    //             setContents({ ...contents, plans: data.plans });
    //         }
    //     },
    //     [location]
    // );

    // useEffect(() => {
    //     contentsHandler();
    //     return () => {};
    // }, [location, contentsHandler]);
    useEffect(() => {
        console.log("ContentContainer");
        const contentServiceInstanse = contentService;
        (async function () {
            if (location.pathname === "/content/notice") {
                const data = await contentServiceInstanse.GetNotices();
                setContents((contents) => {
                    return { ...contents, notices: data.notices };
                });
            } else if (location.pathname === "/content/plan") {
                const data = await contentServiceInstanse.GetPlans();
                setContents((contents) => {
                    return { ...contents, plans: data.plans };
                });
            }
        })();
        return () => {};
    }, [location]);

    const tabHandler = {
        onClick: (children) => {
            navigate(children.toLowerCase());
        },
        tab: (children) => {
            return location.pathname === `/content/${children.toLowerCase()}`;
        },
        match: (children)=>{
            return `/content/${children}/:content_id`
        }
    };
    return (
        <div>
            <ContentBox params={params} location={location} tabHandler={tabHandler} contents={contents || []}></ContentBox>
        </div>
    );
}

export default ContentContainer;
