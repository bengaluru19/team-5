import React, { Component } from 'react'
import {Nav} from "react-bootstrap"
import UserLogin from "./subcomponents/UserLogin"
import VendorLogin from "./subcomponents/VendorLogin"
export default class Login extends Component {
    state={
        regtab: "userLogin"
    }
    changeView(text){
        this.setState({regtab:text})
    }
    render() {
        return (
            <div>
            <div>
            <Nav justify variant="tabs" defaultActiveKey="userLogin">
      <Nav.Item>
        <Nav.Link eventKey="userLogin" onSelect={this.changeView.bind(this,"userLogin")}>User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="vendorLogin" onSelect={this.changeView.bind(this,"vendorLogin")}>Vendor</Nav.Link>
      </Nav.Item>
    </Nav>
            </div>
            <div>
            {
                this.state.regtab==="userLogin"?<UserLogin/>:<VendorLogin/>
            }
            </div>
          </div>
        )
    }
}
