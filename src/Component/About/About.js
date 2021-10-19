import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../img/about-us-2.jpg'

const About = () => {
    return (
        <div>
            <h3 className="text-center fw-bold mt-3">Welcome To Z-Medi-Care</h3>
            <hr className="w-25 text-dark fw-bold mx-auto" />
            <p className="text-center">A hospital is a place where a person goes to be healed when he or she is sick or injured.</p>
            <div className="d-lg-flex p-3 justify-content-center">
                <div className="w-lg-25 border border-dark p-2 m-2"> 
                    <h2>Modern Clinic</h2>
                    <p>
                    Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities
                    </p>
                </div>
                <div className="w-lg-25 border border-dark p-2 m-2">
                    <h2>Qualified Doctors</h2>
                    <p>
                    Someone who is qualified has passed the examinations that they need to pass in order to work in a particular profession.
                    </p>
                </div>
                <div className="w-lg-25 border border-dark p-2 m-2">
                    <h2>Emergency Cases</h2>
                    <p>
                    An emergency department, also known as an accident & emergency department, emergency room, emergency ward or casualty department, is a medical treatment facility specializing in emergency medicine
                    </p>
                </div>
            </div>
            <div className="d-lg-flex p-3">
                <img className="img-fluid" src={img} alt="" />
                <div className="ms-4">
                    <small className="text-primary">ABOUT OUR MEDICAL</small>
                    <h3 className="fw-bold">Happiness is nothing more than good health and a bad memory</h3>
                    <p>
                    It is our pride to mention that our consultants have authority on their respective area of expertise with European and North American degrees. Ibn Sina Trust is enthusiastic to introduce the latest inventions of medical science of Germany, Europe and North America. Our laboratory has 3 Tesla with Biometric MRI, 128 slice CT scan machine and other latest imaging and laboratory machineries. It won’t be excess to mention that we have introduced these machines well ahead of other countries of South Asia. World famous Siemens-Germany, General Electronic-USA, Olympus Japan, Kiazon Japan, Nihonkoden Japan, and Fuji Japan are our proud suppliers.
                    </p>
                    <ol>
                        <li>Qualified Doctors</li>
                        <li>24/7 Help Center</li>
                        <li>Emergency Cases</li>
                        <li>Outdoor Checkup</li>
                        <li>Modern Clinic</li>
                        <li>Breast Screening</li>
                    </ol>
                    <Button>Know More</Button>
                </div>
            </div>
        </div>
    );
};

export default About;