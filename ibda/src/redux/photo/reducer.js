
import {  AXIOS_PHOTOS_FAILURE, AXIOS_PHOTOS_REQUEST, AXIOS_PHOTOS_SUCCESS } from "./type";


const initialState = {
    items: [],
    loading: false,
    error: null,
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_PHOTOS_REQUEST:  
            return {
                ...state,
                loading: true,
            };

        case AXIOS_PHOTOS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case AXIOS_PHOTOS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default photosReducer;
