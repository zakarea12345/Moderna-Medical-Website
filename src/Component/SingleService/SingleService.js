import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {serviceTitle, imgUrl, id} = props.service;
    return (
        <div>
            <Col>
              <Card height="600px" className= "shadow-lg" >
                 <Card.Img height="300px"  variant="top" src={imgUrl} />
               <Card.Body>
                <Card.Title>{serviceTitle}</Card.Title>
                <Link to={`/servicedetail/${id}`}><Button>Know More</Button></Link>
              </Card.Body>
              </Card>
           </Col>
        </div>
    );
};

export default SingleService;