import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import firebase from "firebase";

const database = firebase.database();
export default class VendorItem extends Component {
   
    render() {
        const {data,refer} = this.props
        return (
            <div>
                <Card>
                <Card.Body >
                <div className="row">
                <div className="col-md-3">
                <img src={data.imgUrl} />
                </div>
                <div className="col-md-6">
                <Link to={`/user/search/vendor/${refer}`} >
                {data.name}
                </Link>
                </div>
                </div>
                </Card.Body>
                </Card>    
            </div>
        )
    }
}
