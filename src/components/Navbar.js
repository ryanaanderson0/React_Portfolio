import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavbarContainer = () => {

    return(
     <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Ryan Anderson</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Portfolio</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
        </Navbar>
    </>   
    )
}


export default NavbarContainer;