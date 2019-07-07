import React, { Component } from 'react'
import firebase from "../../Firebase/Firebase"
import {Card, Button} from "react-bootstrap"
const database = firebase.database();
export default class Cart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:null,
         total:0
      };
    };
    componentDidMount(){
        let uid = localStorage.getItem("uid")
        database.ref("user/"+uid+"/cart").on("value",snapshot=>{
            let data=snapshot.val();
            this.setState({data:data})
        })
    }
    onDelete(id){
        let uid= localStorage.getItem("uid");
        database.ref("user/"+uid+"/cart/"+id).remove().then(obj=>{
            console.log("removed successfully")
        })
        .catch(err=>{
            console.log("remove error")
        })
    }

    render() {
        const {data} = this.state;
        let view
        let total = this.state.total
        
        if(data){
            Object.keys(data).forEach(obj=>{
                let dta=data[obj]
                total+=dta.price
            })
            view=Object.keys(data).map(obj=>{
                let dta1=data[obj]
                return <Card>
                <Card.Body>
                <div className="row">
                <div className="col-md-6">
                <div className="row">
                <h5>Product:</h5>{dta1.name}
                </div>
                <div className="row"> 
                <h5>Price:</h5>{dta1.price}
                </div>
                </div>
                <div className="col-md-6">
                <Button variant="outline-danger" onClick={this.onDelete.bind(this,obj)}>
                Remove from cart
                </Button>
                </div>
                </div>
                </Card.Body>
                </Card>
            })
        }else{
            view=<p>Cart is empty</p>
        }
        return (
            <div>
            <div className="row">
            <h4>Cart</h4>
            <h4>Total: {total} </h4>
            </div>
            <div className="mt3">
            {view}
            </div>
            </div>
        )
    }
}
