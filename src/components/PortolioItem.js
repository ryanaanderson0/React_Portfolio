import React from 'react'
import UpstageImage from "../assets/upstage.directory_screenshot.png"
import Image from 'react-bootstrap/Image'

const PortfolioItem = () => {

    return( 
        <div style={{backgroundColor: "#343a40"}}>
            <img src={UpstageImage} />
        </div>
    )
}

export default PortfolioItem;