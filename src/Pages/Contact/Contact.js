import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import contact from '../../images/contact-img.png';

const Contact = () => {
    return (
        <>
            <div className="single_heading">
                <h1>Contact Us</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> Contact Us </p>
            </div>
            <section className="contact" id="contact">

                <div className="row">

                    <div className="image">
                        <img src={contact} alt="" />
                    </div>

                    <form >
                        <div className="inputBox">
                            <input type="text" placeholder="name" />
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <input type="number" placeholder="number" />
                            <input type="text" placeholder="subject" />
                        </div>
                        <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                        <button className="btn">Submit</button>
                    </form>

                </div>
            </section>
        </>
    );
};

export default Contact;