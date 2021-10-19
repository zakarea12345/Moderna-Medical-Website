import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Gallery from './Gallery';
import OurProfessional from './OurProfessional';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <OurProfessional></OurProfessional>
        </div>
    );
};

export default Home;