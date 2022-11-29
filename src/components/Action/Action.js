
import React from 'react'
import { useState, useEffect } from 'react'
import "./Action.css"
import headVideo from "../videos/backgroundVideo.mp4"
import actionheadImage from "../images/headImage.jpg"
import SignIn from './SingIn'
import Navigation from '../Navigation'


const Action = () => {

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
                backgroundSize: 160 - offsetY /12 + "%",
                opacity: 1 - offsetY / 700,
            }}></div>
            <div className="contain ">
                <div className="midPara animate__animated animate__fadeIn">
                    <h3>Every year, more than 335 million tonnes of plastic are produced.</h3>
                    <br></br>
                    <p>Only about 10% of it is recycled. The remainder is either burned or dumped in landfills or the ocean, polluting the air we breathe, the food we eat, and the places we live. This pollution frequently has the greatest negative impact on communities of colour and low-income neighbourhoods, which are already disproportionately impacted by climate change and the Covid-19 pandemic. </p>
                    <br></br>
                    <p>Plastic pollution will only worsen if nothing is done. Industry is investing hundreds of millions of dollars in capacity expansion, with the goal of tripling plastic production by 2050. From extraction to production to pollution, these activities will have a negative impact on people's and the planet's health.</p>
                    <br />
                    <h3>A garbage truck's worth of plastic enters the ocean every minute, a rate that could triple by 2040.</h3>
                    <br />
                    <p>Our leaders are currently debating a major piece of legislation to address the plastic crisis: H.R.5845 / S.3263. H.R.5845 / S.3263, which will be introduced in February 2023, will:</p>
                    <br />
                    <ul>
                        <li>Enhance and finance waste management programs</li>

                        <li>Create a nationwide refund program for beverage containers</li>

                        <li>Ban non-recyclable single-use plastic products and bags</li>

                        <li>Encourage the use of recycled materials</li>

                        <li>Spur investment in recycling and composting infrastructure</li>

                        <li>Stop waste from being shipped to developing countries</li>

                        <li>Ensure local and state policies can effectively implement standards</li>

                        <li>Temporarily pause new plastic facilities until EPA issues updates regulations</li>
                    </ul>
                    <br />
                    <p>This is the most comprehensive federal plastic pollution policy ever enacted.</p>
                    <br />
                    <h2>Add your name below to urge our leaders to break free from plastic. Then, help build momentum by sharing the campaign on Facebook and Twitter.
                    </h2>
                </div>
                <SignIn />
                <br></br>
            </div>
        </div>
    );
}

export default Action;