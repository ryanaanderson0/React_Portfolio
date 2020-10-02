import React from 'react'
import Ryan from '../assets/Ryan_Resize2.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'



const HeaderContainer = () => {

    return(
     <>
        <Container style={{background: "linear-gradient(17deg, rgba(0,0,0,1) 0%, rgba(45,134,90,1) 0%, rgba(168,255,213,1) 57%, rgba(181,252,217,1) 99%)", paddingBottom: "15%"}} fluid>
            <Row>
                <Col>
                   <Image style={{width: "300px", marginTop: "10%"}} src={Ryan} roundedCircle />
                   <h1 style={{marginTop: "2%" }}>Hi, I'm Ryan Anderson</h1>
                   <h2>Freelance Web Developer</h2>
                   
                    <p>I'm a recent Seattle transplant with a passion for delicious food, chihuahua cuddles, and clean website design. I have an Associates in Web Development and am pursuing a Bachelors in Computer Science. I have been freelancing for over a year now, mainly using WordPress.
                    </p>
                    <p>Thanks for visiting my portfolio and I look forward to working with you!</p>
                 

                
                </Col>
            </Row>
        </Container>
       
    </>   
    )
}


export default HeaderContainer;