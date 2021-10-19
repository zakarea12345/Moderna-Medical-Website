import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
    <div className="footer p-3 mt-4">
        <Container>
          <Row className="justify-content-md-center text-light">
            <Col xs={12} md={3}>
                <div>
                  <h1>Contact Us</h1>
                  <a href="">z-medi-care@clinic.com</a>
                  <a href="">z-medi-care@gmail.com</a>
                  <p>Call: 01797719606</p>
                  <p>Adress: 15/8 Dhanmondi, Dhaka.</p>
                </div>
            </Col>
           <Col xs={12} md={3}>
               <div>
                    <h1>Quick Links</h1>
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </Col>
            <Col xs={12} md={3}>
                <div>
                    <h1>Our Services</h1>
                    <p>Dental Care</p>
                    <p>Cardiology</p>
                    <p>Neuro Care</p>
                    <p>Medicine</p>
                    <p>Nephrology</p>
                    <p>Ambulance</p>
                </div>
            </Col>
            <Col xs={12} md={3}>
                <div>
                    <h1>Feedback</h1>
                    <input type="text" placeholder="Name" className="w-100" />
                    <br />
                    <br />
                    <input type="text" placeholder="Your Email" className="w-100" />
                    <br />
                    <br />
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                     <Form.Control
                      as="textarea"
                      placeholder="Message"
                      style={{ height: '100px' }}
                     />
                    </FloatingLabel>
                    <br />
                    <Button>Submit</Button>

                    </div>
            </Col>
          </Row>
        </Container>
        <p className="text-light text-center mt-4">Copyright ©2021 Z-Medi-Care</p>
    </div>
    );
};

export default Footer;