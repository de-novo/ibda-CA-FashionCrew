import { combineReducers } from "redux";

//리듀서들 임포트
import subscribersReducer from "./prac/reducer";

import contentsReducer from "./content/reducer";
import membersReducer from "./member/reducer";
import photosReducer from "./photo/reducer"
import projectsReducer from "./project/reducer";

import datasReducer from "./data/reducer";
const rootReducer = combineReducers({
    contents : contentsReducer,
    members : membersReducer,
    photos :photosReducer,
    projects : projectsReducer,

    datas : datasReducer,

    subscribers : subscribersReducer
})

export default rootReducer