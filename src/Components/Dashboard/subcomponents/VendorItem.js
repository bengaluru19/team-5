import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export default class VendorItem extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                <Card>
                <Card.Body>
                {data.name}
                <img src={data.imgUrl} />
                </Card.Body>
                </Card>    
            </div>
        )
    }
}
