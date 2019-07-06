import {GET_VENDOR_ITEMS,GET_VENDOR_ITEM,GET_VENDOR,ADD_TO_CART,REMOVE_FROM_CART,GET_VENDORS} from "../Actions/types"

const initialState={
    vendorItems:null,
    vendorItem:null,
    vendors:null,
    vendor:null,
    cart:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_VENDOR_ITEMS:
            return {
                ...state,
                vendorItems:action.payload
            }
        case GET_VENDOR_ITEM:
        return {
            ...state,
            vendorItem:action.payload
        }
        case GET_VENDORS:
        return {
            ...state,
            vendors:action.payload
        }
        case GET_VENDOR:
        return{
            ...state,
            vendor:action.payload
        }
        case ADD_TO_CART:
        return {
            ...state,
            cart:[...state.cart,action.payload]
        }
        case REMOVE_FROM_CART:
        return {
            ...state,
            cart:[...state.cart.slice(0,action.payload),...state.cart.slice(action.payload+1)]
        }
        return 
        default:
            return state;
    }
}