import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
export default class VendorMenu extends Component {
    constructor(props) {
      super(props)
    };
    
    componentDidMount(){
        const {data}=this.props;
        let temp = data.map(obj=>{
            return {
                key:obj.id,
                quantity:0
            }
        })
        this.setState({checker:temp})
    }
    increaseCount(index){
        let checker1 = this.state.checker;
        checker1[index].quantity+=1
        this.setState({checker:checker1})
    }
    decreaseCount(index){
        let checker1 = this.state.checker;
        checker1[index].quantity-=(checker1[index].quantity===0)?0:1
        this.setState({checker:checker1})
    }
    render() {
        const {data} = this.props;
        let view = data.map((obj,i)=>{
            return <Card>
            <Card.Body>
            <div className='row'>
            <div className="col-sm-5">
            {obj.name}
            </div>
            <div className="col-sm-3">
            {obj.price}
            </div>
            <div className="col-sm-4">
            <Button variant="success" >
            Up
            </Button>
            {
                0
            }
            <Button variant="danger">
            Down
            </Button>
            </div>
            </div>
            </Card.Body>
            </Card>
        })
        return (
            <div>
                {view}
            </div>
        )
    }
}
