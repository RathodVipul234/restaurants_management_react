import React, { Component } from 'react'
import {Nav,Navbar,Container,Form } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default class NavBarMenu extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg" className="bg-dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#" >Restaurant Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav><Link to='/' className='navbar-url'>Home</Link></Nav>
                <Nav><Link to='/list' className='navbar-url'>List</Link></Nav>
                <Nav><Link to='/detail' className='navbar-url'>Detail</Link></Nav>
                <Nav><Link to='/create' className='navbar-url'>Create</Link></Nav>
                <Nav><Link to='/search' className='navbar-url'>Search</Link></Nav>
                {/* <Nav><Link to='/update/:id' className='navbar-url'>Update</Link></Nav> */}
                {
                    localStorage.getItem('login')?
                    <Nav><Link to='/logout' className='navbar-url'>Logout</Link></Nav>
                    :
                    <Nav><Link to='/login' className='navbar-url'>Login</Link></Nav>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    )
  }
}
