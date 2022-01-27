
import {AXIOS_PROJECTS_FAILURE,AXIOS_PROJECTS_REQUEST,AXIOS_PROJECTS_SUCCESS} from './type'




const initialState = {
    items: [],
    loading: false,
    error: null,
};




const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case AXIOS_PROJECTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case AXIOS_PROJECTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default projectsReducer;
