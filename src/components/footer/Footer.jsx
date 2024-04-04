import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import footleftimg from '../../assets/Vector.png'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="foot-left">
                                <img src={footleftimg} alt="" />
                                <p>Rifat Ibna Toukir</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="foot-right">
                                <div className="link">
                                    <a href="#">Twitter X</a>
                                    <a href="#">LinkdIn</a>
                                    <a href="#">Instagram</a>
                                </div>
                                <div className="copyright">
                                    <p>Copyright. Portfolio 2024</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer