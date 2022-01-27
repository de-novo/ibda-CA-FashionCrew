import { useState, useEffect } from "react";

import api from "../utils/api";
import axios from "axios";
import { storeAuthToken } from "../utils/authToken.js";
import { useNavigate } from "react-router-dom";
function useInput(url, validation, form, setToken) {
    const [inputs, setInputs] = useState({});
    // // // // // // // // // // // // // // // // // // // //
    const navigate = useNavigate();
    useEffect(() => {
        console.log(inputs);
    }, [inputs]);
    // // // // // // // // // // // // // // // // // // // //
    // if (typeof validation !== "function") {
    //     return;
    // }
    const onChange = (e) => {
        const { value, name, dataset, id, files, key } = e.target;

        if (name === "img") {
            return setInputs({
                ...inputs,
                [name]: files[0],
            });
        }
        return setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onChangeOfArray = (e, index) => {
        const { value, name, dataset, id, key } = e.target;

        const target = inputs[name] ?? [];
        target[index] = value;
        return setInputs({
            ...inputs,
            [name]: [...new Set(target)],
        });
    };
    const onReset = () => {
        setInputs();
    };

    const returnForm = (inputs) => {
        let formData = new FormData();

        // if (inputs.img) {
        //     formData.append("img", inputs.img);
        // }
        // formData.append("data", new Blob([JSON.stringify(inputs)], { type: "application/json" }));
        Object.entries(inputs).map((item) => {
            if (item[0] === "img") {
                return formData.append(item[0], item[1]);
            }
            console.log(JSON.stringify(item[0]), JSON.stringify(item[1]));
            return formData.append(item[0], JSON.stringify(item[1]));
        });

        return formData;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validation(inputs, form)) {
            return alert("입력값을 확인해주세요");
        }

        // const formData = await returnForm(inputs);
        // console.log( formData.get("title"));
        // Object.entries(inputs).map((item) => {
        //     return formData.append(`${item[0]}`, `${item[1]}`);
        // });

        const formData = returnForm(inputs);
        console.log(formData);
        // "FormData")
        return api
            .post(url, formData, "FormData")
            .then((res) => {
                console.log(res);
                if (res.accessToken) {
                    console.log('accesstoken 교체')
                    setToken(res.accessToken);

                    navigate("/admin");
                }
                onReset();
            })
            .catch((err) => console.log("err:", err));
    };

    return {
        inputs,
        onChangeOfArray,
        onChange,
        onSubmit,
    };
}

export default useInput;
