
import React from 'react'
import { useState, useEffect } from 'react'
import "./More.css"
import headVideo from "../videos/backgroundVideo.mp4"
import plasticBeachWaste from "../images/plasticBeachWaste.jpg"
import "animate.css"
import Navigation from '../Navigation.js'


const More = () => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])



    return (
        <div>
            <Navigation />
            <div className="headImage" style={{
                backgroundSize: 160 - offsetY / 12 + "%",
                opacity: 1 - offsetY / 700,
            }}></div>
            <div className="contain">
                <div className="midPara animate__animated animate__fadeIn">
                    <h3>The plastics crisis is an environmental justice and climate change catastrophe—for our physical health and the world we live in. Only swift, meaningful action will save us now. </h3>
                    <br></br>
                    <p>Each year, the world produces 300 million tons of plastic waste—nearly the weight of the entire human population—with devastating effects for human and climate health. Social injustice is a part of the narrative, too: the people and communities most affected by plastic production and pollution are disproportionately the most vulnerable and least culpable. </p>
                </div>
                <img src={plasticBeachWaste} className="paraImage" alt="plasticBeachWaste" width="800px" maxheight="500px" />
                <div className="midPara">
                    <p>Consumers have been sold on the myth that recycling is a comprehensive solution, fueled by the powerful oil and gas industry, which has committed hundreds of billions of dollars to expanding plastic production. In reality, a garbage truck's worth of plastic clogs and pollutes the ocean every minute, and as many as 51 trillion pieces of plastic choke every square mile of those valuable waters. Nonetheless, less than 10% of all plastics produced are recycled. Without action, there may be more plastic in the ocean than fish by 2050.</p>
                </div>
                <a href = "/action" className="animate__animated animate__fadeIn">Take Action</a>
            </div>
        </div>
    );
}

export default More;