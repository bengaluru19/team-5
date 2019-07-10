import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import {connect} from "react-redux" 
class Navigation extends Component {
    render() {
      const {auth} = this.props;
      const uid = localStorage.getItem("uid");
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Link to="/" className="f3 text-gray">U-V</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
    {  // <Nav.Link href="#features">Features</Nav.Link>
      // <Nav.Link href="#pricing">Pricing</Nav.Link>
      // <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      //   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      //   <NavDropdown.Divider />
      //   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      // </NavDropdown>
  }
  {
    
  }

  </Nav>
    {
      auth.utype==="user"?<Link className="mh2" to={`/cart/${uid}`}>cart</Link>:null
    }
    {
      auth.isAuthenticated?<Link className="mh2" to={`/`}>logout</Link>:null
    }
  </Navbar.Collapse>
</Navbar>
                
            </div>
        )
    }
}

const mapStateToProps = state=>({
  auth:state.auth
})

export default connect(mapStateToProps)(Navigation)