import {SET_CURRENT_USER,GET_CURRENT_LOC} from "../Actions/types"
//actions for authentication
import firebase from "../../Firebase/Firebase"
const database = firebase.database()
//adding profile ne

export const getCurrentProfile = (uid)=>dispatch=>{
    const user = firebase.auth().currentUser
    database.ref("user/"+uid).once("value").then(snapshot=>{
        const data=snapshot.val()
        data.utype="user"
        dispatch(setCurrentUser(data))
    })
}
export const setCurrentLocation = (position)=>dispatch=>{
    dispatch({
        type:GET_CURRENT_LOC,
        payload:{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        }
    })
}
export const setCurrentUser = (data)=>{
    return {
        type:SET_CURRENT_USER,
        payload:data
    }
}
