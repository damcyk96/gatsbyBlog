import React from 'react'
import { Navbar,  Nav,  } from 'react-bootstrap';
import {Link} from 'gatsby'

export default () => {
    return (
        <Navbar expand="lg" variant="dark" bg="primary">
            <Navbar.Brand href="/">React Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            <Nav>
      <Link style={{ color: "white", fontSize: "30px", marginRight: "30px" }} to="/about">About </Link>
      <Link style={{ color: "white", fontSize: "30px" }} to="/blog">Blog </Link>
     
    </Nav>
  
        </Navbar>
    )
}