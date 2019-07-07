import React, { Component } from 'react'
import firebase from "../../Firebase/Firebase"
import {Card} from "react-bootstrap"
const database = firebase.database();

export default class OngoingOrders extends Component {
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
    render() {
        const {orders} = this.state;
        const {users} = this.props;
        let menu1={} 

        if(users){
        users.menu.forEach(obj=>{
            menu1[obj.id]=obj.name    
        })
        console.log(menu1)
    }
        
        let view;
        let uid=localStorage.uid;
        if(orders){
            view= Object.keys(orders).map(obj=>{
                let tep=orders[obj];
                return (tep.vendorId===uid && tep.status==="accepted")?<Card>
                <Card.Body>
                <p>Order for {tep.ids.map(obj=>{
                    return menu1[obj]
                })}</p>
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
