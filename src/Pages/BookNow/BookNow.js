import React from 'react';
import { Link } from 'react-router-dom';
import './BookNow.css';
import book_img from '../../images/booking.png';

const BookNow = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <>
            <div className="single_heading">
                <h1>Book Now</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> Book Now </p>
            </div>
            <section className="booking_now">
                <div className="row">
                <div className="image">
                    <img src={book_img} alt=""/>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <h3>where to</h3>
                        <input type="text" placeholder="place name"/>
                    </div>
                    <div className="inputBox">
                        <h3>how many</h3>
                        <input type="number" placeholder="number of guests"/>
                    </div>
                    <div className="inputBox">
                        <h3>arrivals</h3>
                        <input type="date"/>
                    </div>
                    <div className="inputBox">
                        <h3>leaving</h3>
                        <input type="date"/>
                    </div>
                    <input type="Submit" className="btn"/>
                </form>
                </div>
            </section>
        </>
    );
};

export default BookNow;