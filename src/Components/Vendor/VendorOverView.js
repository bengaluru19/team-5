import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export default class VendorOverView extends Component {
    render() {
        const {data} = this.props;
        let count=0
        if(data){
        data.ratings.forEach(obj=>{
            count+=obj.reviewStars
        })
    }
        return (
            <div>
                <Card>
                <Card.Body>
                <div>
                <h4>{data.name}</h4>
                <h5>Rating:
                {count}
                </h5>
                </div>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
