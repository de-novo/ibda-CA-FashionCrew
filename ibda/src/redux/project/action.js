import axios from "axios";
import {AXIOS_PROJECTS_FAILURE,AXIOS_PROJECTS_REQUEST,AXIOS_PROJECTS_SUCCESS} from './type'




export const axiosProjectsSuccess = (projects) => {
    return {
        type: AXIOS_PROJECTS_SUCCESS,
        payload: projects,
    };
};

export const axiosProjectsFailure = (error) => {
    return {
        type: AXIOS_PROJECTS_FAILURE,
        payload: error,
    };
};

export const axiosProjectsRequest = () => {
    return {
        type: AXIOS_PROJECTS_REQUEST,
    };
};

export const axiosProjects = () => {
    return (dispatch) => {
        dispatch(axiosProjectsRequest);
        axios
            .get("/api")
            .then((res) => {
                dispatch(axiosProjectsSuccess(res.data.project));
            })
            .catch((error) => dispatch(axiosProjectsFailure(error)));
    };
};
