import Navigation from '../Navigation'
import about1 from '../images/about1.jpg'
// import FadeIn from 'react-fade-in'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './aboutImages/1.png'
import img2 from './aboutImages/2.png'
import img3 from './aboutImages/3.png'
import whyNow1 from './aboutImages/whyNow1.jpg'
import whyNow2 from './aboutImages/whyNow2.jpg'
import whyNow3 from './aboutImages/whyNow3.jpg'

import "./About.css"




const About = () => {
    return (
        <div>
            <Navigation />
            <div className="contain">
                <br></br>
                <div className="headingPara">
                    <h1 className="heading">We are the action platform for the planet.</h1>
                    <p className="heading">We’re on a mission to restore ocean health and tackle the climate crisis in this generation — with you.</p>
                </div>
                <img src={about1} className="aboutImage" width="100%" height="100%" alt="" />
                <br />
                <div className="headingPara">
                    <Container>
                        <Row>
                            <Col>
                                <img src={img1} width="30px" height="30px" alt="" />
                                <p className="pointers">We mobilize millions to win global campaigns.</p>
                            </Col>
                            <Col>
                                <img src={img2} width="30px" height="30px" alt="" />
                                <p className="pointers">We fund the world’s best ocean and climate solutions.</p>
                            </Col>
                            <Col>
                                <img src={img3} width="30px" height="30px" alt="" />
                                <p className="pointers">We tell stories that spark change for people and planet.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="headingPara">
                    <h1 className="heading">Why Now? Why You?</h1>
                    <div className="whyNow">
                        <Container>
                            <Row >
                                <Col>
                                    <img src={whyNow1} width="100%" height="400px" alt="" className="whyNowImages" />
                                    <div className="whyNowText">
                                        <h3>You have the power</h3>
                                        <p>Government action is slow, but when we mobilize together, leaders have to act. We tell you when, why and how you can help.</p>
                                    </div>

                                </Col>
                                <Col>
                                    <img src={whyNow2} width="100%" height="400px" alt="" className="whyNowImages" />
                                    <div className="whyNowText">
                                        <h3>We know what to do</h3>
                                        <p>The answers are already out there. We just need to implement them — fast. We connect every cent you give to the world’s most impactful projects.</p>
                                    </div>
                                </Col>
                                <Col>
                                    <img src={whyNow3} width="100%" height="400px" alt="" className="whyNowImages" />
                                    <div className="whyNowText">
                                        <h3>It’s easy to get started</h3>
                                        <p>Today’s crises can be overwhelming, but small steps have big impact. We’ll help you get started with actions that resonate with you.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default About;