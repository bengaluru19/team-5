import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import firebase from "../../Firebase/Firebase"
const database = firebase.database()
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
    
    addToCart(data){
        let uid = localStorage.getItem("uid");
        database.ref("user/"+uid+"/cart").push(data);
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
            
            <Button variant="outline-success" onClick={this.addToCart.bind(this,obj)}>Add to Card</Button>
            
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
