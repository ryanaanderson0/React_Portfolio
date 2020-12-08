import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'




const Div = styled.div`
   height: 100vh;
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
const GreetingSection = styled.section `
    padding-top: 20vh;

`
const SocialMediaSection = styled.section`
    height: 65vh;
`


const HeaderContainer = () => {

    return(
    <>
     <Div>
        <Container fluid>
            <Row>
                <Col>
                    <GreetingSection>
                        <LargeHeader>Hi, I'm <Strong>Ryan Anderson</Strong></LargeHeader>
                        <LargeHeader>I'm a Web Developer</LargeHeader>  
                    </GreetingSection>         
                </Col>
            </Row>

            <Row>
                <Col>
                    <SocialMediaSection>
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "50px", color: "white", margin: "10px"}}/>
                        <FontAwesomeIcon icon={faGithub} style={{fontSize: "50px", color: "white", margin: "10px"}}/>
                        <FontAwesomeIcon icon={faCodepen} style={{fontSize: "50px" ,color: "white", margin: "10px"}}/>

                    </SocialMediaSection>         
                </Col>
            </Row>
        </Container> 
    </Div> 
    </>  
    )
}


export default HeaderContainer;