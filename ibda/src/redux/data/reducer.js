
import { AXIOS_DATAS_REQUEST, AXIOS_DATAS_SUCCESS, AXIOS_DATAS_FAILURE } from "./type";




const initialState = {
    projects : [],
    photos : [],
    contents : [],
    members : [],
    loading : false,
    error : null  
};



const datasReducer = (state = initialState, action)=>{
    switch(action.type){
        case AXIOS_DATAS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case AXIOS_DATAS_SUCCESS:
            return{
                ...state,
                projects :action.payload.project,
                photos :action.payload.photo,
                contents :action.payload.content,
                members :action.payload.member,
                loading : false
            }
        case AXIOS_DATAS_FAILURE:
            return{
                ...state,
                error : action.payload,
                loading : false 
            }
        default : return state
    }
}

export default datasReducer