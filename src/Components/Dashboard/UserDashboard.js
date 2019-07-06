import React, { Component } from 'react'
import {connect} from "react-redux"
import {getCurrentProfile,setCurrentLocation} from "../../Store/Actions/authAction"
import PropTypes from "prop-types"
import VendorList from "./subcomponents/VendorList"
import {Card,Nav} from "react-bootstrap"
class UserDashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
         search:"",
         constraints:{},
         category:"all",
         term:"",
         radius:3,
         types:[]
      };
      this.searchChange = this.searchChange.bind(this)
      this.searchList = this.searchList.bind(this)
    };
    
    componentDidMount(){
        const uid = localStorage.getItem("uid")
        this.props.getCurrentProfile(uid)
        let temp=this
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                temp.props.setCurrentLocation(position)
            })
        }else{
            console.log("geolocation error")
        }
    }
    searchChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    contraintSelect(text){
        this.setState({category:text})
    }
    searchList(e){
        e.preventDefault()
        const {search} = this.state
        this.setState({term:search})
    }
    radiusSelect(rad){
        this.setState({radius:rad})
    }
    render() {
        const {user} = this.props.auth;
        const {vendors} = this.props.user;
        let view;
        let options;
        let optionlist=[]
        if(vendors){
            options=Object.keys(vendors).map(obj=>{
                let tempD=vendors[obj]
                if (optionlist.includes(tempD.category)){
                    return null
                }else{
                    optionlist.push(tempD.category)
                    return <Nav.Link eventKey={tempD.category} onSelect={this.contraintSelect.bind(this,tempD.category)}>{tempD.category}</Nav.Link>

                }                 
            })
        }else{
            options=null
        }
        
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
            <Card>
            <Card.Body>
            <Nav variant="pills" defaultActiveKey="all" className="flex-column">
        <Nav.Link eventKey="all" onSelect={this.contraintSelect.bind(this,"all")}>All</Nav.Link>
        {options}
            </Nav>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
            <Nav variant="pills" defaultActiveKey={3} className="flex-column">
        <Nav.Link eventKey={3} onSelect={this.radiusSelect.bind(this,3)}>3</Nav.Link>
        <Nav.Link eventKey={10} onSelect={this.radiusSelect.bind(this,100)}>10</Nav.Link>
            </Nav>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-9">
            <VendorList term={this.state.term} contraints={this.state.constraints} radius={this.state.radius} category={this.state.category}/>
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
    auth: PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
}

const mapStateToProps = state=>({
    auth:state.auth,
    user:state.user
})

export default connect(mapStateToProps,{getCurrentProfile,setCurrentLocation})(UserDashboard);