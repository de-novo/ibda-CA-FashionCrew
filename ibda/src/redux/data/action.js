import axios from "axios";
import {  AXIOS_DATAS_REQUEST, AXIOS_DATAS_SUCCESS, AXIOS_DATAS_FAILURE } from "./type";

export const axiosDatasSuccess = (datas) => {
    return {
        type: AXIOS_DATAS_SUCCESS,
        payload: datas,
    };
};

export const axiosDatasFailure = (error) => {
    return {
        type: AXIOS_DATAS_FAILURE,
        payload: error,
    };
};

export const axiosdatasRequest = () => {
    return {
        type: AXIOS_DATAS_REQUEST,
    };
};

export const axiosDatas = () => {
    return (dispatch) => {
        dispatch(axiosdatasRequest);
        axios
            .get("/api")
            .then((res) => {
                dispatch(axiosDatasSuccess(res.data));
            })
            .catch((error) => dispatch(axiosDatasFailure(error)));
    };
};
