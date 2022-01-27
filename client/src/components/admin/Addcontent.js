import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Addcontent(props) {
    // console.log("Addcontent", props.token.ACCESS_TOKEN);
    const config = {
        headers: {
            authorization: `Bearer ${props.token}`,
        },
    };
    const navigate = useNavigate();
    const [board, boardSet] = useState('');
    const [title, titleSet] = useState(null);
    const [date, dateSet] = useState(null);
    const [content, contentSet] = useState(null);

    const on_boardHandler = (e) => {
        boardSet(e.currentTarget.value);
    };
    const on_titleHandler = (e) => {
        titleSet(e.currentTarget.value);
    };
    const on_dateHandler = (e) => {
        dateSet(e.currentTarget.value);
    };
    const on_contentHandler = (e) => {
        contentSet(e.currentTarget.value);
    };

    const on_submitHandler = (e) => {
        e.preventDefault();
        let data = {};
        if (board === "Notice") {
            data.board = board;
            data.title = title;
            data.content = content;
            if (board && title && content) {
                axios
                    .post("/api/admin/content", data, config)
                    .then((res) => {
                        if (res.data.NEW_TOKEN) {
                            const NEW_TOKEN = res.data.NEW_TOKEN;
                            console.log("NEW_TOKEN TYPE", typeof NEW_TOKEN);
                            console.log(localStorage.getItem("ACCESS_TOKEN") === NEW_TOKEN);
                            localStorage.setItem("ACCESS_TOKEN", JSON.stringify(NEW_TOKEN));
                            console.log("SET NEW TOKEN");
                            props.setToken(NEW_TOKEN);
                            return alert("토큰이 만료되어 재발급되었습니다. 다시 입력해주세요");
                        }
                    })
                    .catch((e) => {
                        alert("다시로그인해주세요");
                        localStorage.removeItem("ACCESS_TOKEN");
                        console.log("catch", e);
                        return navigate('/');
                    });
                titleSet("");
                contentSet("");
                dateSet("");
                props.upload.setUploadTrigger(!props.upload.uploadTrigger);
            } else {
                alert("모든칸을채워주세요");
            }
        } else if (board === "Plan") {
            data.board = board;
            data.title = title;
            data.date = date;
            data.content = content;
            if (board && title && date && content) {
                axios.post("/api/admin/content", data, config).then((res) => console.log(res));
                titleSet("");
                contentSet("");
                dateSet("");
                props.upload.setUploadTrigger(!props.upload.uploadTrigger);
            } else {
                alert("모든칸을채워주세요");
            }
        } else {
            alert("ERROR");
        }
    };

    return (
        <div className="adminbox" id="add-content">
            <form>
                <div>
                    <p>content board</p>
                    <select onChange={on_boardHandler} value={board}>
                        <option value=''>board</option>
                        <option value="Notice">Notice</option>
                        <option value="Plan">Plan</option>
                    </select>
                </div>
                {board === ''? null : board === "Notice" ? (
                    <>
                        <div>
                            <p>content tittle</p>
                            <input type="text" placeholder="content tittle" className="input" onChange={on_titleHandler} value={title}></input>
                        </div>
                        <div>
                            <p>content</p>
                            <textarea onChange={on_contentHandler} value={content}></textarea>
                        </div>
                        <button type="submit" className="submitbtn" onClick={on_submitHandler}>
                            {" "}
                            Add Content{" "}
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            <p>content tittle</p>
                            <input type="text" placeholder="content tittle" className="input" onChange={on_titleHandler} value={title}></input>
                        </div>{" "}
                        <div>
                            <p>date</p>
                            <input type="date" placeholder="content tittle" className="input" onChange={on_dateHandler} value={date}></input>
                        </div>
                        <div>
                            <p>content</p>
                            <input type="texta" placeholder="content" className="input" onChange={on_contentHandler} value={content}></input>
                        </div>
                        <button type="submit" className="submitbtn" onClick={on_submitHandler}>
                            {" "}
                            Add Content{" "}
                        </button>
                    </>
                )}
                {/*          <>
            <div>
              <p>content tittle</p>
              <input type="text" placeholder="content tittle" className="input"></input>
            </div>
            <div>
              <p>content</p>

              <textarea ></textarea>
            </div>
            <button type="submit" className="submitbtn">
        {" "}
          Add Content{" "}
        </button> 
          </>*/}
            </form>
        </div>
    );
}

export default Addcontent;
