import firebase from "../../Firebase/Firebase"
import {GET_VENDOR_ITEM,GET_VENDOR_ITEMS, GET_VENDORS,GET_VENDOR, ADD_TO_CART, REMOVE_FROM_CART} from "./types"
const database = firebase.database()

export const getVendors = ()=>dispatch=>{
    database.ref("vendor").once("value").then(snapshot=>{
        const data = snapshot.val();
        console.log(data)
        dispatch({
            type:GET_VENDORS,
            payload:data
        })
    })
}

export const getVendor = (vid)=>dispatch=>{
    database.ref("vendor/"+vid).once("value").then(snapshot=>{
        dispatch({
            type: GET_VENDOR,
            payload: snapshot.val()
        })
    })
}

export const getVendorItems = (vid)=>dispatch=>{
    database.ref("vendor/"+vid+"/menu").once("value").then(snapshot=>{
        dispatch({
            type:GET_VENDOR_ITEMS,
            payload:snapshot.val()
        })
    })
}

export const getVendorItem = (vid,index)=>dispatch=>{
    database.ref("vendor/"+vid+"/menu/"+index).once("value").then(snapshot=>{
        const value = snapshot.val()
        dispatch({
            type:GET_VENDOR_ITEM,
            payload:value
        })
    })
}

export const addToCart = (Iid,quantity)=>dispatch=>{
    dispatch({
        type:ADD_TO_CART,
        payload:{
            Iid:Iid,
            quantity:quantity
        }
    })
}

export const removeFromCart = (index)=>dispatch=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:index
    })
}