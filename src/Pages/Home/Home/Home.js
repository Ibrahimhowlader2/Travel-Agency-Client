import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Team from '../Team/Team';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <WhyChooseUs></WhyChooseUs>
            <Team></Team>
        </div>
    );
};

export default Home;