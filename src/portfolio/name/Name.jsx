import React from 'react'
import './name.css'
import { TypeAnimation } from 'react-type-animation';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaFacebook  , FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa6";



const Name = () => {
    return (
        <>
            <section id='name'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className='namehead'><span>I'M</span> RIFAT IBNA TOUKIR</h1>
                            <TypeAnimation className='topname'
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Front-End Development with React Js', // initially rendered starting point
                                    1000,
                                    'F',
                                    1000,
                                    'Front-End Development with React Js',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            <div className="icons">
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaFacebook   /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaTelegram /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Name