import {SET_CURRENT_USER} from '../Actions/types';
const initialState={
    isAuthenticated:false,
    utype:"",
    user:{}
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:action.payload.length===0?false:true,
                utype:action.payload.utype,
                user:action.payload
            }
        default:
            return state;
    }
}