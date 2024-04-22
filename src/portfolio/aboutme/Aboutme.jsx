import React from 'react'
import './aboutme.css'
import { Col, Container, Row } from 'react-bootstrap'
import aboutmeimg from '../../assets/about.jpg'

const About = () => {
    return (
        <section id='aboutme'>
            <Container>
            <Row>
                <Col lg={5}>
                    <div className="left-img">
                    <img src={aboutmeimg} alt="" />
                    </div>
                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                    <div className="me-head">
                    <h3>ABOUT ME</h3>
                    <h2>Frontend Web Developer from Bangladesh</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla explicabo architecto quod fuga beatae suscipit dicta commodi voluptate provident culpa tenetur fugit quas praesentium, illo sapiente consequatur officia omnis quis?</p>
                    </div>
                    <div className="list">
                        <div className="list-left">
                            <div className="namelist">
                                <h5>Name</h5>
                                <span>Rifat Ibna Toukir</span>
                            </div>
                            <div className="namelist">
                                <h5>Email</h5>
                                <span>ritoukir@gmail.com</span>
                            </div>
                            <div className="namelist">
                                <h5>Phone</h5>
                                <span>01852449087</span>
                            </div>
                        </div>
                        <div className="list-right">
                            <div className="namelist">
                                <h5>Age</h5>
                                <span>24 Years</span>
                            </div>
                            <div className="namelist">
                                <h5>Education</h5>
                                <span>BBA</span>
                            </div>
                            <div className="namelist">
                                <h5>Freelance</h5>
                                <span>Available</span>
                            </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        
    )
}

export default About