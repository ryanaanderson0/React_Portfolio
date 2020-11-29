import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const Footer = () => {
    return(
        <>
            <Container fluid style={{backgroundColor: "#343a40"}}>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                    <p>Ryan Anderson &#169; 2020</p>
                        </Col>
                </Row>
             </Container>
        </>
    )
}

export default Footer;