import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'


const Div = styled.div`
    padding: 25%;
`

const LargeHeader = styled.h1`
    font-size: 3.5em;
    color: #EBEBEB;
    padding-bottom: 25px;
`

const Strong = styled.strong`
    font-size: 1em;
    text-transform: uppercase;
    background-color: #B4F1CD;
    color: black;
    padding: 8px;
    margin: 10px;
    box-shadow: 10px 20px;
`


const HeaderContainer = () => {

    return(

     <Div>
        <Container fluid>
            <Row>
                <Col>
                   <LargeHeader>Hi, I'm <Strong>Ryan Anderson</Strong></LargeHeader>
                   <LargeHeader>I'm a Freelance Web Developer</LargeHeader>
                   
                    {/* <p>I'm a recent Seattle transplant with a passion for delicious food, chihuahua cuddles, and clean website design. I have an Associates in Web Development and am pursuing a Bachelors in Computer Science. I have been freelancing for over a year now, mainly using WordPress.
                    </p>
                    <p>Thanks for visiting my portfolio and I look forward to working with you!</p> */}
                    
                </Col>
            </Row>
        </Container> 
    </Div>   
    )
}


export default HeaderContainer;