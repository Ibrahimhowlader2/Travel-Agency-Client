import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './DestinationDetails.css';

const DestinationDetails = () => {

    const { detailsId } = useParams();

    const [details,setDetails] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/destinations/${detailsId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="single_heading">
                <h1>Details Of {details.title}</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> Details </p>
            </div>

            <section className="details">

                <div className="image">
                    <img src={details.services_photo} alt="" />
                </div>

                <div className="content">
                    <h3>{details.title}</h3>
                    <p> {details.description} </p>
                    <p><strong className="days">{details.days}</strong> <strong className="price">$ {details.price}</strong></p>
                    <Link to="/book" ><button className="btn">Book Now</button></Link>
                </div>

            </section>

        </>
    );
};

export default DestinationDetails;