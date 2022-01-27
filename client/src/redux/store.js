
import { createStore, applyMiddleware} from "redux";

// 미들웨어
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//reducer 임포트
import rootReducer from "./rootReducer";

////////////////////////////////////////////////////////////////////////////////////



const middleware = [thunk]




// store  셋팅

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));



export default store;