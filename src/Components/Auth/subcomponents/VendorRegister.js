import React, { Component } from 'react'

export default class VendorRegister extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         location:null,
         pic:null
      };
    };
    
    render() {
        return (
            <div>
                <form>
                <div className="form-group">
                <input type="text" name="name" value={this.state.name}/>
                </div>
                <div className="form-group">
                <input type="file" name="file"/>
                </div>
                </form>
            </div>
        )
    }
}
