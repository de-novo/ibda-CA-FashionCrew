import axios from "axios";

import { getStoeredAuthToken, removeStoredAuthToken } from "./authToken.js";
import { objectToQueryString } from "./url.js";
const defaults = {
    // baseURL: process.env.API_URL || "http://localhost:3000/api",
    baseURL: process.env.API_URL || "/api",
    headers: () => ({
        "Content-Type": "application/json",
        Authorization: getStoeredAuthToken() ? `Bearer ${getStoeredAuthToken()}` : undefined,
    }),
    formdataheaders: () => ({
        "Content-Type": "multipart/form-data",
        Authorization: getStoeredAuthToken() ? `Bearer ${getStoeredAuthToken()}` : undefined,
    }),
    error: {
        code: "INTERNAL_ERROR",
        message: "Something went wrong. Please check your internet connection or contact our support.",
        status: 503,
        data: {},
    },
};

const api = (method, url, variavles, header) => {
    return new Promise((resolve, reject) => {
        axios({
            url: `${defaults.baseURL}${url}`,
            method,
            headers: header === "FormData" ? defaults.formdataheaders() : defaults.headers(),
            // params: {method === "get" ? variavles : undefined},
            params: method === "get" ? variavles : undefined,
            data: method !== "get" ? variavles : undefined,
            paramsSerializer: objectToQueryString,
        })
            .then((res) => resolve(res.data))
            .catch((err) => {
                if (err.response?.data.error?.code === "INVAILD_TOKEN") {
                    alert(err.response?.data?.message);
                    removeStoredAuthToken();
                } else if (err.response?.statusText === "Forbidden") {
                    alert(err.response.data.message);
                    removeStoredAuthToken();
                }
            });
    });
};

const optimisticUpdate = async (url, { updateFields, currentFields, setLocalData }) => {
    try {
        setLocalData(updateFields);
        await api("put", url, updateFields);
    } catch (err) {
        setLocalData(currentFields);
    }
};

const data = {
    get: (...args) => api("get", ...args),
    post: (...args) => api("post", ...args),
    put: (...args) => api("put", ...args),
    patch: (...args) => api("patch", ...args),
    delete: (...args) => api("delete", ...args),
    optimisticUpdate,
};
export default data;
