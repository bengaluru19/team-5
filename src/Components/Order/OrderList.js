import React, { Component } from 'react'
import firebase from "../../Firebase/Firebase"
import {Button,Card} from "react-bootstrap"
const database=firebase.database();
class OrderList extends Component {
    constructor(props) {
      super(props)
      this.state = {
         orders:null
      };
    };
    componentDidMount(){
        database.ref("orders").on("value",snapshot=>{
            console.log(snapshot.val())
            this.setState({orders:snapshot.val()})
        })
    }
    acceptOrder(obj){
        let updates={}
        updates["orders/"+obj+"/status"]="accepted"
        database.ref().update(updates).then(res=>{
            console.log("success")
        })
        .catch(err=>{
            console.log("failure")
        })
    }
    rejectOrder(obj){
        let updates={}
        updates["orders/"+obj+"/status"]="rejected"
        database.ref().update(updates).then(res=>{
            console.log("success")
        })
        .catch(err=>{
            console.log("failure")
        })
    }
    render() {
        const {orders} = this.state;
        let view;
        let uid=localStorage.uid;
        const {users} = this.props;
        let menu1={} 

        if(users){
        users.menu.forEach(obj=>{
            menu1[obj.id]=obj.name    
        })
        console.log(menu1)
    }
        
        if(orders){
            view= Object.keys(orders).map(obj=>{
                let tep=orders[obj];
                return (tep.vendorId===uid && tep.status==="pending")?<Card>
                <Card.Body>
                <p>Order for {tep.ids.map(obj=>{
                    return menu1[obj]
                })}</p>
                <Button variant="success" onClick={this.acceptOrder.bind(this,obj)}>Accept</Button>
                <Button variant="danger" onClick={this.rejectOrder.bind(this,obj)}>Reject</Button>
                </Card.Body>
                </Card>:null
            })
        }else{
            view=null
        }
        return (
            <div>
            {view}               
            </div>
        )
    }
}
export default OrderList