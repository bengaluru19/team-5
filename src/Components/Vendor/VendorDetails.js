import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export default class VendorDetails extends Component {
    render() {
        const {data} = this.props
        console.log(data)
        return (
            <div>
                <Card>
                <Card.Img variant="" style={{height:"14rem"}} src={data.imgUrl} />
                <Card.Body>
                <h5>{data.name}</h5>
                <p>{data.about}</p>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
