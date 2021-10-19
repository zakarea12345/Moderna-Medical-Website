import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const {services} = useServices({});
    return (
        <div>
            <Container>
             <h1 className="text-primary text-center">
                Our Services  
             </h1>
             <Row xs={1} md={3} className="g-4" >
               {
                    services.map(service =>  <SingleService key ={service.id} service={service}></SingleService>)
                }
              </Row>
            </Container>
        </div>
    );
};

export default Services;