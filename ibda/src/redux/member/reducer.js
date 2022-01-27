
import { AXIOS_MEMBERS_REQUEST, AXIOS_MEMBERS_SUCCESS, AXIOS_MEMBERS_FAILURE } from "./type";




const initialState = {
    items : [],
    loading : false,
    error : null  
};



const membersReducer = (state = initialState, action)=>{
    switch(action.type){
        case AXIOS_MEMBERS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case AXIOS_MEMBERS_SUCCESS:
            return{
                ...state,
                items :action.payload,
                loading : false
            }
        case AXIOS_MEMBERS_FAILURE:
            return{
                ...state,
                error : action.payload,
                loading : false 
            }
        default : return state
    }
}

export default membersReducer