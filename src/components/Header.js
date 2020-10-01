import React from 'react'
import Ryan from '../assets/Ryan_Resize2.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



const HeaderContainer = () => {

    return(
     <>
        <Container fluid>
            <Row>
                <Col>
                   <Image style={{width: "300px", marginTop: "10%"}} src={Ryan} roundedCircle />
                   <h1 style={{marginTop: "2%"}}>Hi, I'm Ryan Anderson</h1>
                   <h2>Freelance Web Developer</h2>
                
                </Col>
            </Row>
        </Container>
       
    </>   
    )
}


export default HeaderContainer;