import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./type";

export const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER,
    };
};

export const remobeSubscriber = () => {
    return {
        type: REMOVE_SUBSCRIBER,
    };
};












// const mapStateToProps = (state) => {
//     return {
//         contents: state.contents.items,
//         count : state.subscriber.count
        
//     };
// };
// const mapDispatchToProps = {
//     axiosContents: axiosContents,
//     addSubscriber  //addSubscriber : addSubscriber 
//     addView : (number)=> addView(number)
    
// };



export const addView = (number) => {
    return {
        type: REMOVE_SUBSCRIBER,
        payload: Number(number) // 리듀서에서 ation.payload
    };
};
