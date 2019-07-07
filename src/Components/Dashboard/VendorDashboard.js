import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import Switch from "react-switch"
import {getVendorAccount} from "../../Store/Actions/authAction"
import OrderList from "../Order/OrderList"
import OngoingOrders from "../Order/OngoingOrders";
import {Card} from "react-bootstrap"
class VendorDashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         availability:false
      };
      this.handleChange = this.handleChange.bind(this);
    };
    handleChange(checked) {
        this.setState({ availability:checked });
      }
    
    componentDidMount(){
        let uid = localStorage.getItem("uid")
        this.props.getVendorAccount(uid)
        // if(Object.keys(user).length>0){
        //     console.log("validated")
        // }else{
        //     this.props.history.push("/vendor/register")
        // }
    }
    render() {
        const {user} = this.props.auth;
        let view ;
        if(Object.keys(user).length>0){
            view=<div>
            <div className="row mt3" style={{contentAlign:"right"}}>
            <div className="col-sm-8">
            <p>welcome ,</p><h5>{user.name}</h5>
            </div>
            <div className="col-sm-4">
            <Switch onChange={this.handleChange} checked={this.state.availability} />
            </div>
            </div>
            {
                this.state.availability?<div className="row mt3">
                <div className="col-sm-8">
                <Card>
                <Card.Header>
                <h5>Online Orders for you</h5>
                </Card.Header>
                <Card.Body>
                <OrderList users={user} />
                </Card.Body>
                </Card>
                </div>
                <div className="col-sm-4">
                <Card>
                <Card.Header>
                <h5>Ongoing Orders</h5>
                </Card.Header>
                <Card.Body>
                <OngoingOrders users={user}/>                
                </Card.Body>
                </Card>
                </div>
                </div>:<p>click on open for business for getting some</p>
            }
            
            </div>
        }else{
            view = <p>Loading ...</p>
        }
        return (
            <div>
            {view}
            </div>
        )
    }
}

const mapStateToProps = state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{getVendorAccount})(withRouter(VendorDashboard))