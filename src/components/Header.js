import React from 'react'
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
                   <Image src="holder.js/171x180" roundedCircle />
                   <h1>Hi, I'm Ryan Anderson</h1>
                   <h2>Freelance Web Developer</h2>
                
                </Col>
            </Row>
        </Container>
       
    </>   
    )
}


export default HeaderContainer;