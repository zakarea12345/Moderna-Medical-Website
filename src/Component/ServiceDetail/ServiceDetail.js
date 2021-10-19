import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ServiceDetail = () => {
    
    const { serviceID } = useParams();
    const  {services } = useServices();

    const matchedServices = services.find(service => service.id ===parseInt(serviceID)  );
    
   
    // 

    return (
        <Container className='my-5'>
            <Row>
                <Row>
                    <Col>
                        <div className=" mb-5">
                            <h2>Service Detail</h2>
                        </div>
                    </Col>
                </Row>
                <Col md={6} sm={6} xs={12}>
                    <div >
                        <img src={matchedServices?.imgUrl} alt="SingleServiceIMG" className='img-fluid' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <div>
                        <h3>{matchedServices?.serviceTitle}</h3>
                        <p>Details: <br /><span>{matchedServices?.description}</span></p>
                        <Link to='/contact'>Contact us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;