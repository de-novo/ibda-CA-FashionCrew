import axios from "axios";
import { AXIOS_PHOTOS_FAILURE, AXIOS_PHOTOS_REQUEST, AXIOS_PHOTOS_SUCCESS } from "./type";



export const axiosPhotosSuccess = (photos) => {
    return {
        type: AXIOS_PHOTOS_SUCCESS,
        payload: photos,
    };
};

export const axiosPhotosFailure = (error) => {
    return {
        type: AXIOS_PHOTOS_FAILURE,
        payload: error,
    };
};

export const axiosPhotosRequest = () => {
    return {
        type: AXIOS_PHOTOS_REQUEST,
    };
};

export const axiosPhotos = () => {
    return (dispatch) => {
        dispatch(axiosPhotosRequest);
        axios
            .get("/api")
            .then((res) => {
              
                dispatch(axiosPhotosSuccess(res.data.photo));
            })
            .catch((error) => dispatch(axiosPhotosFailure(error)));
    };
};
