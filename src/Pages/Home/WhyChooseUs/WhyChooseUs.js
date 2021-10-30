import React from 'react';
import './WhyChooseUs.css';
import map from '../../../images/Map-Marker.png';
import balloon from '../../../images/Hot-Air-Balloon.png';
import location from '../../../images/Worldwide-Location.png';

const WhyChooseUs = () => {
    return (
        <section className="why_choose_us" id="why_choose_us">
            <h1 className="heading">Why <span>Choose</span> Us</h1>
            <div className="box-container">
                <div className="box">
                    <img src={location} alt="" />
                    <h3>Handpicked Hotels</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum et vel beatae eligendi labore deserunt culpa perspiciatis sequi hic!</p>
                </div>
                <div className="box">
                    <img src={map} alt="" />
                    <h3>World Class Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum et vel beatae eligendi labore deserunt culpa perspiciatis sequi hic!</p>
                </div>
                <div className="box">
                    <img src={balloon} alt="" />
                    <h3>Best Price Guarantee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum et vel beatae eligendi labore deserunt culpa perspiciatis sequi hic!</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;