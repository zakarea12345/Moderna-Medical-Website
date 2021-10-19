import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import { FloatingLabel, Form, Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <>
        <h1 className="fw-bold text-center">Contact Us</h1>
        <hr className="w-25 text-dark fw-bold mx-auto" />
        <div className="contact mt-4 d-lg-flex justify-content-around">
          <div>
            <FontAwesomeIcon icon={faLocationArrow} className="fs-1" />
            <h2 className="fw-bold">Location</h2>
            <p>Adress: 15/8 Dhanmondi, Dhaka.</p>
          </div>
          <div >
            <FontAwesomeIcon icon={faMailBulk} className="fs-1" />
            <h2 className="fw-bold">Email</h2>
            <a href="">z-medi-care@clinic.com</a>
            <a href="">z-medi-care@gmail.com</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="fs-1" />
            <h2 className="fw-bold">Phone</h2>
            <p className="fw-bold">01797719606</p>
          </div>
        </div>
        <div className="bg-dark text-light mt-3 text-center">
           <h1>Drop your message for any info or question.</h1>
           <input type="text" placeholder="Name" className="w-75" />
           <br />
           <br />
           <input type="text" placeholder="Your Email" className="w-75" />
           <br />
           <br />
           <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
             as="textarea"
             className="w-75 mx-auto"
             placeholder="Message"
             style={{ height: '100px' }}
            />
           </FloatingLabel>
           <br />
           <Button className=" mb-3">Submit</Button>
        </div>
        </>
    );
};

export default Contact;