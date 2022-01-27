
import { AXIOS_CONTENTS_FAILURE, AXIOS_CONTENTS_REQUEST, AXIOS_CONTENTS_SUCCESS } from "./type";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_CONTENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case AXIOS_CONTENTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case AXIOS_CONTENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default contentsReducer;
