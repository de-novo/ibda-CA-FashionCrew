import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const { default: axios } = require("axios");
const { useState } = require("react");

// async function loginUser(credentials) {
//     const token = localStorage.getItem("token");
//     // console.log(token);
//     return axios
//         .post("/api/admin", JSON.stringify(credentials), {
//             headers: {
//                 "Content-Type": `application/json`,
               
//             },
//         })
//         .then((res) => res.data);
// }
async function loginUser(credentials) {
    // const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    // const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");
    // console.log(token);
    return axios
        .post("/api/admin", JSON.stringify(credentials), {
            headers: {
                "Content-Type": `application/json`,
            },
        })
        .then((res) => res.data);
}

function Admincode(props) {
    let [admin_code, admin_codeSet] = useState();
    let [pw, pwSet] = useState();

    // console.log(props.token);
    const navigate = useNavigate();

    
    const on_admin_codeHandler = (e) => {
        admin_codeSet(e.currentTarget.value);
    };

    const on_pwHandler = (e) => {
        pwSet(e.currentTarget.value);
    };

    const on_submitHandler = async(e) => {
        e.preventDefault();

        let data = {
            admin_code: admin_code,
            pw: pw,
        };
        const TOKEN = await loginUser(data);
        console.log('TOKEN = ',TOKEN);
        props.setToken(TOKEN?TOKEN.ACCESS_TOKEN:null);
    };

    return (
        <div className="adminbox">
            {props.token ? null : (
                <form>
                    <input type="text" placeholder="admin-code" className="admininput" id="admin-code" onChange={on_admin_codeHandler}></input>
                    <input type="text" placeholder="pw" className="admininput" id="pw" onChange={on_pwHandler}></input>
                    <button type="submit" className="submitbtn" onClick={on_submitHandler}>
                        확인
                    </button>
                </form>
            )}
            {/* <form>
        <input type="text" placeholder="admin-code" className="admininput" id="admin-code" onChange={on_admin_codeHandler}></input>
        <input type="text" placeholder="pw" className="admininput" id="pw" onChange={on_pwHandler}></input>
        <button type="submit" className="submitbtn" onClick={on_submitHandler}>
          확인
        </button>
      </form> */}
        </div>
    );
}

export default Admincode;

// Admincode.propTypes = {
//     setToken: PropTypes.func.isRequired,
// };
