import firebase from "firebase"
const database  = firebase.database()


export const getVendors = (location)=>dispatch=>{
    database.ref("vendor").once("value").then(snapshot=>{
        console.log(snapshot.val())
    })
}

export const getVendorItems = (vid)=>dispatch=>{
    database.ref("vendor/"+vid+"/item").then(snapshot=>{
        console.log(snapshot.val())
    })
}
