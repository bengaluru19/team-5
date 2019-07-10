import React, { Component } from 'react'
import firebase from "../../../Firebase/Firebase"
import {connect} from "react-redux"
import {createVendorAccount} from "../../../Store/Actions/authAction"
import {withRouter} from "react-router-dom"
const database = firebase.database()
class VendorRegister extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         location:null,
         selectedFile:null
      };
      this.onChangeHandler=this.onChangeHandler.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.getGeoLocation=this.getGeoLocation.bind(this)
    };
    onChangeHandler(e){
        this.setState({selectedFile:e.target.files[0]})
    }
    getGeoLocation(){
        let temp=this
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                temp.setState({location:{
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                }})
            })
        }else{
            console.log("geolocation error")
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault()
        const rdata={
            name:this.state.name,
            geo:this.state.location,
            phone:this.props.match.params.phno
        }
        const uid = localStorage.getItem("uid")
        database.ref("vendor/"+uid).push(rdata).then(res=>{
            this.props.history.push("/vendor/dashboard")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <button type="button" onClick={this.getGeoLocation}>
                Determine Location
                </button>
                </div>{
                // <div className="form-group">
                // <input type="file" name="file" onChange={this.onChangeHandler}/>
                // </div>
                }
                <button type="submit">
                submit
                </button>
                </form>
            </div>
        )
    }
}

export default connect(null,{createVendorAccount})(withRouter(VendorRegister));