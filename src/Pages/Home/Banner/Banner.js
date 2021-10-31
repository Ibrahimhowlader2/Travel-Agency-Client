import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section className="banner" id="banner">

                <div className="content">

                    <h1>Lifelong memories just a
                       <br /><span>Few seconds away</span></h1>
                    <p>Let’s start your journey with us, your dream will come true. Inventore, earum ea dolores commodi iste sed nobis. Ab, quidem. Eum, delectus?</p>
                    <Link to="/book"><button className="btn">Book Now</button></Link>

                </div>

            </section>
        </div>
    );
};

export default Banner;