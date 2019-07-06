import {GET_VENDOR_ITEMS,GET_VENDOR_ITEM,ADD_TO_CART,REMOVE_FROM_CART,GET_VENDORS} from "../Actions/types"

const initialState={
    vendorItems:null,
    vendorItem:null,
    vendors:null,
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
        default:
            return state;
    }
}