//actions for authentication
import firebase from "../../Firebase/Firebase"
const database = firebase.database()
//adding profile ne

export const getCurrentProfile = (uid)=>dispatch=>{
    const user = firebase.auth().currentUser
    database.ref("user/"+uid).once().then(snapshot=>{
        disptach(setCurrentUser(snapshot.val()))
    })
}

export const getVendors = (location)=>dispatch=>{

}

export const setCurrentUser = (data)=>{
    return {
        type:SET_CURRENT_USER,
        payload:data
    }
}
