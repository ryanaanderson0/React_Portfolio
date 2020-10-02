import React from 'react'
import UpstageImage from "../assets/upstage.directory_screenshot - Copy.png"
import BigSmile from "../assets/bigsmile.co_about_crop.png"
import GoodGood from "../assets/GoodGood_Capture.png"
import Crumbshot from "../assets/Crumbshot_Capture.png"
import Image from 'react-bootstrap/Image'
import './portfolioItem.css'

const PortfolioItem = () => {

    return( 
        <div style={{backgroundColor: "#343a40" , display: "block"}}>
            <section>
                <Image src={UpstageImage} style={{ margin:"20px", width: "30%"}} rounded />
                <Image src={BigSmile} style={{ margin:"20px", width: "30%"}} rounded />
            </section>
            <section>
                <Image src={GoodGood} style={{ margin:"20px", width: "30%"}} rounded />
                <Image src={Crumbshot} style={{ margin:"20px", width: "30%"}} rounded />
            </section>

            
                
        </div>
    )
}

export default PortfolioItem;