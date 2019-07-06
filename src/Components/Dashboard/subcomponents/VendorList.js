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
        const {vendors} = this.props.user
        let view;
        if(vendors){
            view=Object.keys(vendors).map((key,i)=>{
                return <VendorItem data={vendors[key]} />
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
    user:state.user
})

export default connect(mapStateToProps,{getVendors})(VendorList)