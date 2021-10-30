import React from 'react';
import './AboutUs.css';
import about from '../../images/about-img.png.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className="single_heading">
                <h1>about us</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> about </p>
            </div>

            <section className="about">

                <div className="image">
                    <img src={about} alt="" />
                </div>

                <div className="content">
                    <h3>Get ready for real time adventure</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi
                    </p>
                    <Link to="/" ><button className="btn">Book Now</button></Link>
                </div>
                

            </section>

        </>
    );
};

export default AboutUs;