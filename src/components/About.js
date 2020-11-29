import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const AboutContainer = styled.section`
    background-color: white;
    padding-top: 50px;
    padding-bottom: 100px;

`
const MediumHeader = styled.h2`
    font-size: 3em;
    color: #343a40;
    text-transform: uppercase;
    display: inline;
    background-image: linear-gradient( white 60%, #B4F1CD 55%);
`
const SubHeader = styled.h3`
    font-size: 2.5em;
    color: #343a40;
`
const AboutText = styled.p`
    margin-top: 20px;
    font-size: 1.5em;
    text-align: left;
`
const ShadowButton = styled.button`
    width: 180px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 525;
    color: #000;
    background-color: #B4F1CD;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px;
    box-shadow: 10px 10px #2B2D2F;
    

    &:hover{
    background-color: #243D49;
    box-shadow: 0px 15px 20px rgba(61.0, 102.0, 122.0, 1.0);
    color: #fff;
    transform: translateY(-7px);
 }
`



const About = () => {

    return(
        <>
           <AboutContainer>
                    <MediumHeader>About</MediumHeader>
                    
                    <section style={{padding: "50px"}}>
                    <Row>
                        <Col>
                            <AboutText>I'm a recent Seattle transplant with a passion for clean website design, emerging web technologies, and delicious food. I have an Associates in Web Development and am pursuing a Bachelors in Computer Science. </AboutText>
                        </Col>
                        <Col>
                            <h3>More About Me:</h3>
                            <ShadowButton>View Resume</ShadowButton>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <SubHeader>Technologies I Use</SubHeader>

                        
                        </Col>
                    </Row>
               </section>
           </AboutContainer>

        </>

    )
}

export default About