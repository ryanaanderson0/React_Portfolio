import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContactSection = styled.section`
    margin: 50px 0;
`
const Contact = () => {

    return(
        <>
            <ContactSection>
            <Container style={{width: "35%", backgroundColor: "#B4F1CD" , padding: "50px", boxShadow: "10px 20px", borderRadius: "16px"}}>
                <h2>Contact</h2>
                <p>I'd love to hear from you! Drop me a line below</p>
                <Row >
                    <Col >
                        
                        <Form >
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
            </Container>
            </ContactSection>
        </>

    )
}


export default Contact;