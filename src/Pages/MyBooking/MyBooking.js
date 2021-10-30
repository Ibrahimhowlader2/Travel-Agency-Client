import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    const { user } = useAuth();
    const [bookings, setBooking] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myBookings/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [user.email]);
    return (
        <>
            <div className="single_heading">
                <h1>My Booking : {bookings.length}</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> My Booking </p>
            </div>
            <section>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Country Name</th>
                            <th>Price</th>
                            <th>Days</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(booking => (
                            <tbody
                                key={booking._id}
                            >
                                <tr>
                                    <td className="btn-td" data-label="Marks%"><img src={booking.services_photo} alt="" /></td>
                                    <td data-label="Country Name">{booking.title}</td>
                                    <td data-label="Price">$ {booking.price}</td>
                                    <td data-label="Age">{booking.days}</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </section>
        </>
    );
};

export default MyBooking;