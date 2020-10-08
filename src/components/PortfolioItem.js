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
    box-shadow: 10px 30px #2B2D2F;
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }

`
const PortfolioItem = () => {

    return (
        <div>
            <h1>CURRENT PROJECTS</h1>

            <section>
                <a href="https://upstage.directory/" target="_blank" rel="noopener noreferrer">
                  <Image src={upstageImg}/>   
                </a>
                
                <a href="https://bigsmile.co/" target="_blank" rel="noopener noreferrer">
                    <Image src={bigsmileImg} />
                </a>
                
            </section>

            <section>
                <Image src={goodgoodImg}/> 
                <Image src={crumbshotImg} />
            </section>
           
         </div>
        )
    
}
    
export default PortfolioItem;