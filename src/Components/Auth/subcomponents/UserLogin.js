import React, { Component } from 'react'

export default class UserLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         phone:"",
         otp:""
      };
    };
    onChangeText(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
    }
    
    render() {
        return (
            <div>
            <form>
            <div class="form-group">
              <label for="otp">Phone Number:</label>
              <input type="tel" pattern="[0-9]{10}" class="form-control" id="phone" placeholder="Enter Phone Number" name="phone" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="otp">OTP</label>
              <input type="password" class="form-control" id="otp" name="otp" placeholder="enter otp" />
            </div>
            {
            //     <div class="form-group form-check">
            //   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            //   <label class="form-check-label" for="exampleCheck1">Check me out</label>
            // </div>
        }
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            </div>
        )
    }
}
