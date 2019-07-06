import {SET_CURRENT_USER} from "../Actions/types"
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

export const setCurrentUser = (data)=>{
    return {
        type:SET_CURRENT_USER,
        payload:data
    }
}
