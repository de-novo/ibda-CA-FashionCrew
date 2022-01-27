import axios from "axios";
import { AXIOS_CONTENTS_FAILURE, AXIOS_CONTENTS_REQUEST, AXIOS_CONTENTS_SUCCESS } from "./type";

export const axiosContentsSucces = (contents) => {
    return {
        type: AXIOS_CONTENTS_SUCCESS,
        payload: contents,
    };
};
export const axiosContentsFailure = (err) => {
    return {
        type: AXIOS_CONTENTS_FAILURE,
        payload: err,
    };
};
export const axiosContentsRequest = () => {
    return {
        type: AXIOS_CONTENTS_REQUEST,
    };
};

export const axiosContents = () => {
    return (dispatch) => {
        dispatch(axiosContentsRequest());
        axios
            .get("/api")
            // .then(res => console.log(res))
            // .then((res) => res.data.contents.json())
            .then((res) => {
            
                dispatch(axiosContentsSucces(res.data.content));
            })
            .catch((err) => dispatch(axiosContentsFailure(err)));
    };
};
