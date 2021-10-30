import React, { useEffect, useState } from 'react';
import DestinationsContent from '../DestinationsContent/DestinationsContent';
import './Destinations.css';

const Destinations = () => {

    const [destinations, setDestinations] = useState([])

    useEffect(() =>
        fetch('https://guarded-reef-12809.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
            })
        , []);


    return (

        <section className="destinations" id="destinations">

            <h1 className="heading">Popular <span>Destinations</span></h1>

            <div className="box-container">

                {
                    destinations.map(destination => <DestinationsContent
                        key={destination._id}
                        destination={destination}
                    
                    ></DestinationsContent>)
                }
            </div>

        </section>


    );
};

export default Destinations;