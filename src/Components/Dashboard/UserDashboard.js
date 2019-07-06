import React, { Component } from 'react'
import {connect} from "react-redux"
import {getCurrentProfile} from "../../Store/Actions/authAction"
import PropTypes from "prop-types"
import VendorList from "./subcomponents/VendorList"
class UserDashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search:"",
         constraints:{},
         term:""
      };
      this.searchChange = this.searchChange.bind(this)
      this.searchList = this.searchList.bind(this)
    };
    
    componentDidMount(){
        const uid = localStorage.getItem("uid")
        this.props.getCurrentProfile(uid)
    }
    searchChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    searchList(e){
        e.preventDefault()
        const {search} = this.state
        this.setState({term:search})
    }
    render() {
        const {user} = this.props.auth;
        let view;
        if(Object.keys(user).length>0){
            view=<div>            
            <div>
            <div className="row">
            <div className="col-md-4">
            Welcome {user.name}
            </div>
            <div className="col-md-8">
            <form onSubmit={this.searchList}>
            <input type="text" name="search" className="form-control" value={this.state.search} onChange={this.searchChange} placeholder="search topic" />
            <button type="submit" className="btn btn-primary">Search</button>
            </form>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-3">
            filtering options
            </div>
            <div className="col-md-9">
            <VendorList term={this.state.term} contraints={this.state.constraints} />
            </div>
            </div>
            </div>
        }else{
            view=<div>Loading....</div>
        }
        
        return (
            <div className="mt3">
                {view}
            </div>
        )
    }
}
UserDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{getCurrentProfile})(UserDashboard);