import { useState } from "react";
import axios from "axios";

function Addmember(props) {
    const [img, imgSet] = useState();
    const [userCode, userCodeSet] = useState();
    const [subscription, subscriptionSet] = useState();
    const [name, nameSet] = useState();
    const [eg_name, eg_nameSet] = useState();
    const [insta, instaSet] = useState();
    const [birth, birthSet] = useState();
    const [role, roleSet] = useState();

    // const [hasError, hasErrorSet] = useState(true); //false 여야함

    const on_imgHandler = (e) => {
        imgSet(e.currentTarget.files[0]);
    };

    const on_usercodeHandler = (e) => {
        let setrole =
            Number(e.currentTarget.value) === 0
                ? "ADMIN"
                : Number(e.currentTarget.value) === 1
                ? "DESIGNER"
                : Number(e.currentTarget.value) === 2
                ? "PHOTOGRAPHER"
                : Number(e.currentTarget.value) === 3
                ? "MODEL"
                : Number(e.currentTarget.value) === 4
                ? "DEVELOPER"
                : null;

        roleSet(setrole);
        userCodeSet(e.currentTarget.value);
    };

    const on_subscriptionHandler = (e) => {
        subscriptionSet(e.currentTarget.value);
    };
    const on_nameHandler = (e) => {
        nameSet(e.currentTarget.value);
    };
    const on_eg_nameHandler = (e) => {
        eg_nameSet(e.currentTarget.value);
    };
    const on_instaHandler = (e) => {
        instaSet(e.currentTarget.value);
    };
    const on_birthHandler = (e) => {
        birthSet(e.currentTarget.value);
    };

    const on_submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("img", img);
        formData.append("userCode", userCode);
        formData.append("role", role);
        formData.append("subscription", subscription);
        formData.append("name", name);
        formData.append("eg_name", eg_name);
        formData.append("insta", insta);
        formData.append("birth", birth);

        let hasimg = formData.get("img") !== "undefined";
        let hasUsercode = formData.get("userCode") !== "undefined";
        let hasSubscription = formData.get("subscription") !== "undefined";
        let hasName = formData.get("name") !== "undefined";
        let hasEgname = formData.get("eg_name") !== "undefined";
        let hasinsta = formData.get("insta") !== "undefined";
        let hasbirth = formData.get("birth") !== "undefined";

        // const config = {
        //   header: { "content-type": "multipart/form-data" },
        // };

        if (hasimg && hasUsercode && hasSubscription && hasName && hasEgname && hasinsta && hasbirth) {
            axios
                .post("/api/admin/member", formData)
                .then((result) => {
                    if (result.data) {
                        console.log(result.data);
                    } else {
                        console.log("멤버추가실패");
                    }
                })
                .catch((error) => {
                    if (error) {
                        console.log(error);
                    }
                });
            console.log(e.target);
            imgSet("");
            userCodeSet("");
            subscriptionSet("");
            nameSet("");
            eg_nameSet("");
            instaSet("");
            birthSet("");
            props.upload.setUploadTrigger(!props.upload.uploadTrigger);
            // axios.post(
            //   '/api/iamges/uploadfiles',

            // ).then((result)=>{
            //   if(result.data.success){
            //     console.log(result.data)
            //   }else{
            //     console.log('사진업로드실패')
            //   }
            // })
        } else {
            alert("모든칸을 채워주세요");
        }
    };

    return (
        <div className="adminbox" id="add-member">
            <form encType="multipart/form-data">
                <div>
                    <p>profile image </p>
                    <input className="input" type="file" accept="image/*" onChange={on_imgHandler} value={img === "" ? img : null}></input>
                </div>
                <div>
                    <p>User-code</p>
                    <select onChange={on_usercodeHandler} value={userCode}>
                        <option value="undefined">역할</option>
                        <option value="0">Admin</option>
                        <option value="1">Designer</option>
                        <option value="2">Photographer</option>
                        <option value="3">Model</option>
                        <option value="4">Developer</option>
                    </select>
                </div>
                <div>
                    <p>Year of subscription</p>
                    <select onChange={on_subscriptionHandler} value={subscription}>
                        <option value="undefined">가입년도</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <p>Name</p>
                    <input className="input" type="text" placeholder="Name" onChange={on_nameHandler} value={name}></input>
                </div>
                <div>
                    <p>Eg_Name</p>
                    <input className="input" type="text" placeholder="Eg_Name" onChange={on_eg_nameHandler} value={eg_name}></input>
                </div>
                <div>
                    <p>Insta</p>
                    <input className="input" type="text" placeholder="insta" onChange={on_instaHandler} value={insta}></input>
                </div>
                <div>
                    <p>Birth</p>
                    <input className="input" type="date" onChange={on_birthHandler} value={birth}></input>
                </div>
                <button type="submit" className="submitbtn" onClick={on_submitHandler}>
                    {" "}
                    Add Member{" "}
                </button>
            </form>
        </div>
    );
}
export default Addmember;
