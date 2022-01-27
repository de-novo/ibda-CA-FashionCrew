import axios from "axios";
import {  AXIOS_MEMBERS_REQUEST, AXIOS_MEMBERS_SUCCESS, AXIOS_MEMBERS_FAILURE } from "./type";

export const axiosMembersSuccess = (members) => {
    return {
        type: AXIOS_MEMBERS_SUCCESS,
        payload: members,
    };
};

export const axiosMembersFailure = (error) => {
    return {
        type: AXIOS_MEMBERS_FAILURE,
        payload: error,
    };
};

export const axiosMembersRequest = () => {
    return {
        type: AXIOS_MEMBERS_REQUEST,
    };
};

export const axiosMembers = () => {
    return (dispatch) => {
        dispatch(axiosMembersRequest);
        axios
            .get("/api")
            .then((res) => {
                dispatch(axiosMembersSuccess(res.data.member));
            })
            .catch((error) => dispatch(axiosMembersFailure(error)));
    };
};
