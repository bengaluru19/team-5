import React, { Component } from 'react'
import firebase from "firebase";
import {withRouter} from "react-router-dom";
const database = firebase.database()
class UserRegister extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             name:""
        }
        this.onsubmitHandler=this.onsubmitHandler.bind(this)
        this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onsubmitHandler(e){
        e.preventDefault()
        const phno=this.props.match.params.phno;
        const reqData={
                phone:phno,
                name:this.state.name,
                email:this.state.email     
        }
        database.ref("user/"+localStorage.getItem("uid")).set(reqData).then(obj=>{
            this.props.history.push("/user/dashboard")
        })
        .catch(err=>{
            console.log(err)
        })
    }   
    
    onChangeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmitHandler}>
                <div className="form-group">
                <input type="email" name="email" className="form-control" onChange={this.onChangeHandler} placeholder="enter your email" />
                </div>
                <div className="form-group">
                <input type="text" name="name" className="form-control" onChange={this.onChangeHandler} placeholder="enter your name" />
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-info">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(UserRegister);