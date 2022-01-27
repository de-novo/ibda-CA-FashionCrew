import axios from "axios";
import history from 'browserHistory';
import { useNavigate } from "react-router-dom";
import { getStoeredAuthToken, removeStoredAuthToken } from "./authToken.js";
import { objectToQueryString } from "./url.js";
const defaults = {
    baseURL: process.env.API_URL || "http://localhost:3000",
    headers: () => ({
        "Content-Type": "application/json",
        Authorization: getStoeredAuthToken() ? `Bearer ${getStoeredAuthToken()}` : undefined,
    }),
    error: {
        code: "INTERNAL_ERROR",
        message: "Something went wrong. Please check your internet connection or contact our support.",
        status: 503,
        data: {},
    },
};

const api = (method, url, variavles) => {
    return new Promise((resolve, reject) => {
        axios({
            url: `${defaults.baseURL}${url}`,
            method,
            headers: defaults.headers(),
            params: method === "get" ? variavles : undefined,
            data: method !== "get" ? variavles : undefined,
            paramsSerializer: objectToQueryString,
        }).then((res) => resolve(res.data)).catch(err=>{
            if(err.response.data.error.code==='INVAILD_TOKEN'){
                removeStoredAuthToken();
            }
        });
    });
};
