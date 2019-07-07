import React, { Component } from 'react'
import firebase from "../../../Firebase/Firebase"
import {connect} from "react-redux"
import {createVendorAccount} from "../../../Store/Actions/authAction"
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
        console.log(this.state.selectedFile)
            let data={
                name:this.state.name,
                location:this.state.selectedFile
            }
        let uid = localStorage.getItem("uid")
        this.props.createVendorAccount(data,uid)
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
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

export default connect(null,{createVendorAccount})(VendorRegister);