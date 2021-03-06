import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Register = () => {

    const {
        handleName,
        handleEmail,
        handlePassword,
        signUpByEmailPassWord,
        setNameAndPhoto,
        error,
        setError } = useAuth();

    const handleRegistration = e => {
        e.preventDefault();
        signUpByEmailPassWord()
            .then((result) => {
                setNameAndPhoto();
                window.location.reload();
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <>
            <div className="signup-form my-5 py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title">
                                <h2>Please Sign up</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onSubmit={handleRegistration} className='signUpForm my-5'>
                                <input type="text" onBlur={handleName} name="name" id="name" placeholder='Please enter your name...' required />
                                <br />
                                <br />
                                <input type="email" onBlur={handleEmail} name="email" id="email" placeholder='Please enter your email...' required />
                                <br />
                                <br />
                                <input type="password" onBlur={handlePassword} name="pass" id="pass" placeholder='Please enter your password...' required />
                                <br />
                                <br />
                                <br />
                                <button type="submit">Sign up</button>
                                <div>{error}</div>
                                <p className='already-have-ac-txt'>Already have an account? <Link to='/login'>Login Here</Link> </p>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Register;