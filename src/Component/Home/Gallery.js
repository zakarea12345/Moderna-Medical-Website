import React from 'react';
import img1 from '../../img/about-us-2.jpg';
import img2 from '../../img/dck1.jpg';
import img3 from '../../img/download.jpg';
import img4 from '../../img/eye.jpg';
import img5 from '../../img/heart.jpg';
import img6 from '../../img/Neuromedicine Specialist.jpg';

const Gallery = () => {
    return (
        <div>
            <h1 className="mt-4 text-center text-primary">Our Gallery</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ">
                        <img src={img1} alt="" height="200px" width="100%"/>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={img2} alt="" height="200px" width="100%"/>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={img3} alt="" height="200px" width="100%"/>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={img4} alt="" height="200px" width="100%"/>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={img5} alt="" height="200px" width="100%"/>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={img6} alt="" height="200px" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;