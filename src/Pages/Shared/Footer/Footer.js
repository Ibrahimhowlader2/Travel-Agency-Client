import React from 'react';
import './Footer.css';
import { FaPhone,FaMailBulk,FaLocationArrow,FaGlobe, FaFacebookSquare, FaInstagram, FaTwitter,FaArrowRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import payment_img from '../../../images/payment.png';

const Footer = () => {
    return (
        <IconContext.Provider value={{ className: "react_footer_icon" }}>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h1 className="heading">Quick <span>Links</span> </h1>
                        <Link to="/home" className="links"> <span><FaArrowRight/></span> Home </Link>
                        <Link to="/about" className="links"> <span><FaArrowRight/></span> About </Link>
                        <Link to="/appointment" className="links"> <span><FaArrowRight/></span> Appointment </Link>
                        <Link to="/contact" className="links"> <span><FaArrowRight/></span> Contact </Link>
                    </div>
                    <div className="box">
                        <h1 className="heading">Our <span>Services</span> </h1>
                        <Link to="/home" className="links"> <span><FaArrowRight/></span> Home </Link>
                        <Link to="/about" className="links"> <span><FaArrowRight/></span> About </Link>
                        <Link to="/appointment" className="links"> <span><FaArrowRight/> </span> Appointment </Link>
                        <Link to="/contact" className="links"> <span><FaArrowRight/></span> Contact </Link>
                    </div>

                    <div className="box">
                        <h1 className="heading">Contact <span>Info</span> </h1>
                        <a href="/" className="links"> <span><FaPhone/></span> +8801629161451</a>
                        <a href="/" className="links"> <span><FaMailBulk /></span> sibrahim.ih@gmail.com</a>
                        <a href="/" className="links"> <span><FaGlobe /></span> Sibrahim.ih.com</a>
                        <a href="/" className="links"> <span><FaLocationArrow /></span> Shariatpur, Dhaka - Bangladesh </a>
                    </div>
                    <div className="box">
                        <h1 className="heading">Follow <span>Us</span> </h1>
                        <a href="/" className="links"> <span><FaFacebookSquare /></span> FaceBook</a>
                        <a href="/" className="links"> <span><FaTwitter /></span> Twitter </a>
                        <a href="/" className="links"> <span><FaInstagram /></span> Instagram</a>
                        <a href="/" className="links"><img src={payment_img} alt="" /></a>
                    </div>
                </div>

                <div className="credit"> created by <span> Ibrahim Howlader </span> | all rights reserved </div>


            </section>
        </IconContext.Provider>
    );
};

export default Footer;