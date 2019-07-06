import React, { Component } from 'react'
import firebase from "../../../Firebase/Firebase"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from "prop-types"
class UserLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         phone:"",
         otp:"",
         confirmResult:null
      };
      
      this.onChangeText = this.onChangeText.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
      this.onClick = this.onClick.bind(this)
    };
    componentDidMount () {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
    {
       size:"invisible"
        // other options
    });
    }
    onClick() {
        const phoneNumber = this.state.phone;
        const appVerifier = window.recaptchaVerifier;
        firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmResult1 => {
          // success
          this.setState({confirmResult:confirmResult1})
        })
        .catch(error => {
          // error
          console.log(error)
        });
    }
    onChangeText(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        //changing
        this.state.confirmResult.confirm(this.state.otp).then(object=>{
            console.log(object,"success")
            if(object.isNewUser){
                console.log("new user")
            }else{
                localStorage.setItem("uid",object.user.uid)
                this.props.history.push("/user/dashboard")
        }
    })    
}
    
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <h5>login as a User</h5>
              </div>
            <div className="form-group">
              <label htmlFor="otp">Phone Number:</label>
              <input type="tel" pattern="+(91)[0-9]{10}" onChange={this.onChangeText} className="form-control" id="phone" placeholder="Enter Phone Number" name="phone" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              <input id="recaptcha-container" type="button" value="get OTP" className="btn btn-warning" onClick={this.onClick} />
              </div>
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input type="password" className="form-control" onChange={this.onChangeText} id="otp" name="otp" placeholder="enter otp" />
            </div>
            {
            //     <div class="form-group form-check">
            //   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            //   <label class="form-check-label" for="exampleCheck1">Check me out</label>
            // </div>
        }
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
            </div>
        )
    }
}

export default connect(null)(withRouter(UserLogin))