import React, { Component } from 'react'
import {connect} from "react-redux"
import {getVendor, getVendorItems} from "../../Store/Actions/userAction"
import VendorDetails from "./VendorDetails"
import {Nav} from "react-bootstrap"
import VendorOverView from "./VendorOverView";
import VendorMenu from "./VendorMenu"
class Vendor extends Component {
    state={
        view1:"overview"
    }
    componentDidMount(){
        const vid = this.props.match.params.vid;
        this.props.getVendor(vid)
    }
    changeView(text){
        this.setState({view1:text})
    }
    render() {
        const {vendor} = this.props.user;
        const {view1} = this.state
        console.log(vendor)
        let view
        let innerview
        if(vendor){
            if(view1==="overview"){
                innerview=<VendorOverView data={vendor}/>
            }else if(view1==="menu"){
                innerview=<VendorMenu data={vendor.menu} />
            }else{
                innerview=<VendorDetails data={vendor} />
            }
            view=<div>
            <div className="row">
            <Nav variant="pills" defaultActiveKey={this.state.view1}>
  <Nav.Item>
    <Nav.Link eventKey="overview" onSelect={this.changeView.bind(this,"overview")}>Overview</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="menu" onSelect={this.changeView.bind(this,"menu")}>Menu</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="vendor" onSelect={this.changeView.bind(this,"vendor")}>About Vendor</Nav.Link>
  </Nav.Item>
</Nav>
            </div>
            <div className="row mt3">
            <div className="col-sm-12">
            {innerview}
            </div>
            </div>
            </div>
        }else{
            view=<p>Loading</p>
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}

const mapStateToProps = state=>({
    user:state.user
})

export default connect(mapStateToProps,{getVendor})(Vendor)