import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    

    const {
        signInWithEmail,
        signInByGoogle,
        handleEmail,
        handlePassword,
        setUser } = useAuth();

    const location = useLocation();
    const hostory = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                hostory.push(redirectURL);
            })
    }

    const handleEmailPassSignIn = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setUser(result.user);
                hostory.push(redirectURL);
            })
    }


    return (
        <>
            <div className="login-form my-5 py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title">
                                <h2>Please Login</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={handleEmailPassSignIn} className='loginForm mt-5 mb-3'>
                                <input type="email" onBlur={handleEmail} name="email" id="email" placeholder='Please enter your email...' />
                                <br />
                                <br />
                                <input type="password" onBlur={handlePassword} name="pass" id="pass" placeholder='Please enter your password...' />
                                <br />
                                <br />
                                <Button type="submit">Login</Button>
                                <p className='already-have-ac-txt'>New Here? <Link to='/register'>Register</Link> </p>
                            </Form>
                            <Button onClick={handleGoogleSignIn}> Login with Google</Button>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LogIn;