import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Challenge.css"
import mangrove from '../images/mangrove.png'
import { useState } from 'react';
import DonationForm from './DonationForm';
import Timeline from './Timeline.js';
import tick from '../icons/tick.png'
import Navigation from '../Navigation'

const Challenge = () => {

    return (
        <div>
            <Navigation />
            <div className="contain">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className = "heading">Help us plant more <div className="mangroveFont">Mangrove</div> trees!</h1>
                <p className = "heading">These remarkable ocean trees are environmental superheroes.</p>
                <Container >
                <Row>
                    <Col>
                        <div className="midPara">
                            <img src={mangrove} className="challengeImage" width="200" height="240" alt="" />
                            <br />
                            <p>Join us to plant a forest of superpowered ocean trees that fight climate change and protect wildlife.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <DonationForm />
                    </Col>
                </Row>
                </Container>
                <div className="midPara">
                    <h2>Our Goal</h2>
                </div>
                <Timeline />
                <div className="midPara">
                    <h2>How it works</h2>
                    <ul>
                        <li>100% of your donation plants trees</li>
                        <li>Easily view your tree locations</li>
                        <li>Track growth of your trees over time</li>
                        <li>Invite friends to plant with you</li>
                    </ul>
                    <a href="/challenge" className="animate__fadeInUp">Donate Above</a>
                    <div className="mangroveFont">Tip: You can also choose to plant trees as a gift!</div>
                </div>
            </div>
        </div>
    );
}

export default Challenge;