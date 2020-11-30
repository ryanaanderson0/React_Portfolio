import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContactSection = styled.div`
    margin: auto;
    background-color: #B4F1CD;
    padding: 50px;
    box-shadow: 10px 20px;
    border-radius: 16px;
    width: 65vw;
    
    
`
const Contact = () => {

    return(
        <>
        <Container fluid style={{margin: "100px 0"}}>
            <ContactSection>
            
                <h2>Contact</h2>
                <p>I'd love to hear from you! Drop me a line below</p>
                <Row >
                    <Col >
                        
                        <Form>
                            <Form.Group controlId="contactForm.ControlInput1">
                                <Form.Label style={{textAlign:"start"}}>Email address</Form.Label>
                                <Form.Control size="lg" type="name" placeholder="Name Namerson" />
                            </Form.Group>
                            <Form.Group controlId="contactForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size="lg" type="email" placeholder="name@example.com" />
                            </Form.Group>
                        
                            <Form.Group controlId="contactForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control size="lg" as="textarea" rows={3} placeholder="<3" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
           
                </ContactSection>
             </Container>
        </>

    )
}


export default Contact;