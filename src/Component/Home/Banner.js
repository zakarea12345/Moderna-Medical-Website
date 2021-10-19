import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/heart.jpg';
import img2 from '../../img/istockphoto-1307543555-170667a.jpg';
import img3 from '../../img/Neuromedicine Specialist.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
          <Carousel className="slider">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </>
    );
};

export default Banner;