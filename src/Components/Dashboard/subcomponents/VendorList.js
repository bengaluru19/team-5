import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {getVendors} from "../../../Store/Actions/userAction";
import VendorItem from "./VendorItem";
class VendorList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    componentDidMount(){
        this.props.getVendors()
    }
    render() {
        const {vendors} = this.props.user;
        const {location} = this.props.auth;
        const {term,category,radius} = this.props;
        let view;
        if(vendors){
            view=Object.keys(vendors).map((key,i)=>{
                let dist=Math.sqrt( Math.pow((vendors[key].geo.latitude-location.latitude),2)+Math.pow((vendors[key].geo.longitude-location.longitude),2))
                console.log(dist)
                if(dist<=radius){
                if(vendors[key].category===category || category==="all"){
                if(vendors[key].name.toLowerCase().includes(term.toLowerCase())){
                return <VendorItem refer={key} data={vendors[key]} />
            }else{
                return null
            }
        }else{
            return null
            console.log("hello")
        }}else{
            return null
        }
            })
        }else{
            view=<p>Empty list</p>
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}

const mapStateToProps = state=>({
    user:state.user,
    auth:state.auth
})

export default connect(mapStateToProps,{getVendors})(VendorList)