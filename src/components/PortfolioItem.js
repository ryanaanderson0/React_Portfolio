import React from 'react'
import styled from 'styled-components'
import upstageImg from "../assets/upstage.directory_screenshot - Copy.png"
import bigsmileImg from "../assets/bigsmile.co_about_crop.png"
import goodgoodImg from "../assets/GoodGood_Capture.png"
import crumbshotImg from "../assets/Crumbshot_Capture.png"

const Image = styled.img`
    margin: 2%;
    border-radius: 15px;
    width: 40%;
    height: 40%;

    box-shadow: 10px 30px;

`
const Div = styled.div`
    background-color: #243D49;

`
const PortfolioItem = () => {

    return (
        <Div>
            <h1>CURRENT PROJECTS</h1>

            <section>
                <Image src={upstageImg}/> 
                <Image src={bigsmileImg} />
            </section>

            <section>
                <Image src={goodgoodImg}/> 
                <Image src={crumbshotImg} />
            </section>
           
         </Div>
        )
    
}
    
export default PortfolioItem;