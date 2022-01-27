import React, { useState } from "react";
import NoticeItem from "./NoticeItem";

function Notices(props) {
    const [view, setView] = useState(-5);
    const [max, setMax] = useState(false);
    const contents = props.contents.slice(view).reverse();
    const contentsCount = props.contents.length;
    const view_btn_Handler = () => {
        if (view > -contentsCount) {
            setView(view - 5);
        } else {
            setMax(true);
        }
    };

    const [tap, setTap] = useState();

    return (
        <>
            <div className="content_box">
                <div className="content_num large"><p>NUMBER</p></div>
                <div className="content_title large"><p>TITLE</p></div>
                <div className="content_date large"><p>DATE</p></div>
            </div>

            {contents.map((item) => {
                // console.log(item)
                return (
                    <>
                        <NoticeItem item={item} tap={tap} setTap={setTap}  key={item._id}></NoticeItem>{" "}
                        {tap===item._id?<div className="content_box">
                            <div className="notice_con large">{item.content}</div>
                        </div> : null}
                    </>
                );
            })}
            {max ? <div>마지막글입니다</div> : <button onClick={view_btn_Handler}>더보기</button>}
        </>
    );
}

export default Notices;
