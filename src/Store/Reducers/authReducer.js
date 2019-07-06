import {SET_CURRENT_USER,GET_CURRENT_LOC} from '../Actions/types';
const initialState={
    isAuthenticated:false,
    utype:"",
    user:{},
    location:null
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
        case GET_CURRENT_LOC:
        return{
            ...state,
            location:action.payload
        }
        default:
            return state;
    }
}