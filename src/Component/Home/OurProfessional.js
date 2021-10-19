import React from 'react';
import img1 from '../../img/dr1.jpg';
import img2 from '../../img/dr2.jpg';
import img3 from '../../img/dr3.jpg';

const OurProfessional = () => {
    return (
        <div>
            <h4 className="text-primary text-center mt-4">Our Professional</h4>
            <h1 className="fw-bold text-center">Trust the professionals</h1>
            <div className="d-lg-flex justify-content-around">
               <div className="shadow-lg p-3">
                   <img src={img1} alt="" />
                   <h3>Suresh Basu</h3>
                   <p>He is cardiac specialist.</p>
               </div>
               <div className="shadow-lg p-3">
                   <img src={img2} alt="" />
                   <h3>Sahin khondokar</h3>
                   <p>He is diabetic specialist.</p>
               </div>
               <div className="shadow-lg p-3">
                   <img src={img3} alt="" />
                   <h3>Ratul</h3>
                   <p>He is kidney specialist.</p>
               </div>
            </div>
        </div>
    );
};

export default OurProfessional;