import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
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
                <div className="col-md-9">
                <Link to={`/user/Search/vendor/${refer}`} >
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
