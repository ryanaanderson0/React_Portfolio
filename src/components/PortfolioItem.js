import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import upstageImg from "../assets/upstage.directory_screenshot - Copy.png"
import bigsmileImg from "../assets/bigsmile.co_about_crop.png"
import goodgoodImg from "../assets/GoodGood_Capture.png"
import crumbshotImg from "../assets/Crumbshot_Capture.png"
import htmlIcon from "../assets/HTML.png"
import cssIcon from "../assets/css3.png"
import phpIcon from "../assets/php.png"
import reactIcon from "../assets/reactJs.png"
import mongodbIcon from "../assets/mongodb.png"
import mysqlIcon from "../assets/mySQL.png"
import wordpressIcon from "../assets/wordpress.png"
import bootstrapIcon from "../assets/bootstrap.png"
import jsIcon from "../assets/js.png"

const Image = styled.img`
    margin: 2%;
    border-radius: 15px;
    box-shadow: 10px 30px #2B2D2F;
    transition: all .2s ease-in-out;
    width: 65%;

    &:hover{
        transform: scale(1.1);
    }
`

const ShadowButton = styled.button`
    width: 180px;
    height: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 525;
    color: #fff;
    background-color: #243D49;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 10px;
    box-shadow: 10px 10px #2B2D2F;
    

    &:hover{
    background-color: #B4F1CD;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #000;
    transform: translateY(-7px);
 }

`
const PortfolioContent = styled.section`
    padding: 8%;
`


const PortfolioItem = () => {

    return (
        <>
            
            <Container style={{backgroundColor: "#b5bfc4", maxWidth: "100vw"}}>

                <h1 style={{ display: "inline", backgroundImage: "linear-gradient( #b5bfc4 60%, #B4F1CD 55%)"}}>CURRENT PROJECTS</h1>

                <Row>
                    <Col xs={12} md={6}>
                        <a href="https://upstage.directory/" target="_blank" rel="noopener noreferrer">
                            <Image src={upstageImg}/>   
                        </a>
                    </Col>
                    <Col xs={12} md={6}>
                        <PortfolioContent >
                        <h3>Upstage Directory</h3>

                        <p>I used WordPress to create an app landing page/ blog. I used custom css and WordPress plugins to create a platform fit for the app.</p>

                        
                        <section>
                            <h4>Technologies Used:</h4>
                            
                            <img src={cssIcon} style={{width: "15%"}}/>
                            <img src={wordpressIcon} style={{width: "15%"}} />
                        </section>
                           
                        <section>
                            <ShadowButton>Source Code</ShadowButton>
                            <ShadowButton>Live Link</ShadowButton>
                        </section>
                        </PortfolioContent>
                    </Col>
                </Row>
                    <hr style={{border: ".25px solid #343a40", width: "45vw"}}/>
                <Row>
                    <Col xs={12} md={6}>
                        <a href="https://gghf.com/" target="_blank" rel="noopener noreferrer">
                            <Image src={goodgoodImg} />   
                        </a>
                    </Col>
                    <Col xs={12} md={6}>
                        <PortfolioContent>
                            <h2>Good Good Hemp Farm</h2>

                            <p>I used WordPress to create an app landing page/ blog. I used custom css and WordPress plugins to create a platform fit for the app.</p>
                        <section>
                            <h4>Technologies Used:</h4>
                            
                            <p>WordPress Icon</p>
                            <p>CSS3 Icon</p>
                        </section>
                           
                        <section>
                            <ShadowButton>Source Code</ShadowButton>
                            <ShadowButton>Live Link</ShadowButton>
                        </section>
                        </PortfolioContent>
                    </Col>
                </Row>

                <hr style={{border: ".25px solid #343a40", width: "45vw"}}/>

                <Row>
                    <Col xs={12} md={6}>
                        <a href="https://bigsmile.co" target="_blank" rel="noopener noreferrer">
                            <Image src={bigsmileImg} />   
                        </a>
                    </Col>
                    <Col xs={12} md={6}>
                        <PortfolioContent>
                                <h2>Big Smile Co.</h2>

                                <p>I used WordPress to create an app landing page/ blog. I used custom css and WordPress plugins to create a platform fit for the app.</p>
                            <section>
                                <h4>Technologies Used:</h4>
                                
                                <p>WordPress Icon</p>
                                <p>CSS3 Icon</p>
                            </section>
                            
                            <section>
                                <ShadowButton>Source Code</ShadowButton>
                                <ShadowButton>Live Link</ShadowButton>
                            </section>
                        </PortfolioContent>
                    </Col>
                </Row>

                <hr style={{border: ".25px solid #343a40", width: "45vw"}}/>
                
                <Row>
                    <Col xs={12} md={6}>
                        <a href="https://crumbshotblog.com" target="_blank" rel="noopener noreferrer">
                            <Image src={crumbshotImg} />   
                        </a>
                    </Col>
                    <Col xs={12} md={6}>
                        <PortfolioContent>
                                <h2>Crumb Shot Food Blog.</h2>

                                <p>I used WordPress to create an app landing page/ blog. I used custom css and WordPress plugins to create a platform fit for the app.</p>
                            <section>
                                <h4>Technologies Used:</h4>
                                
                                <p>WordPress Icon</p>
                                <p>CSS3 Icon</p>
                            </section>
                            
                            <section>
                                <ShadowButton>Source Code</ShadowButton>
                                <ShadowButton>Live Link</ShadowButton>
                            </section>
                        </PortfolioContent>
                    </Col>
                </Row>



           </Container>
         </>
        )
    
}
    
export default PortfolioItem;