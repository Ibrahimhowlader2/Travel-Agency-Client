import React, { useEffect, useState } from 'react';
import './ManageAll.css';
import { Link } from 'react-router-dom';

const ManageAll = () => {

    const [destinations, setDestinations] = useState([])

    useEffect(() =>
        fetch('https://guarded-reef-12809.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
            })
        , []);


    const handleDelete = id => {
        const url = `https://guarded-reef-12809.herokuapp.com/destinations/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure you want to delete ?')
                    const remaining = destinations.filter(destination => destination._id !== id);
                    setDestinations(remaining);
                }
            })
    }

    return (
        <>
            <div className="single_heading">
                <h1>Manage All</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> Manage All </p>
            </div>
            <section className="manage-content">
                <div className="box-container">
                    {
                        destinations.map(destination => <div
                            className="box"
                            key={destination._id}

                        >
                            <img src={destination.services_photo} alt="" />
                            <div className="content">
                                <h3>{destination.title} </h3>
                                <p>{destination.description.slice(0, 80)}</p>
                                <div className="price-days"><strong >{destination.days}</strong> <strong >$ {destination.price}</strong></div>
                                <div className="buttons">
                                    <Link to="/book" ><button className="btn">book now</button></Link>
                                    <button className="btn" onClick={() => handleDelete(destination._id)} >Delete now</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </>

    );
};

export default ManageAll;