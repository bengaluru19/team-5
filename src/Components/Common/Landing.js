import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
export default class Landing extends Component {
    render() {
        return (
            <div className="jumbotron mv3">
            <div className="row center">
            <h3 className="center">U-V</h3>
            </div>
            <div className="row center">
            <Link className="btn btn-info mh2 center" to={`/user/login`}>User Login</Link>
            <Link className="btn btn-primary mh2 center" to={`/vendor/login`}>Vendor Login</Link>
            
            </div>
            </div>
        )
    }
}
