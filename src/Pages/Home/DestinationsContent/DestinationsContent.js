import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsContent = (props) => {

    const {_id, services_photo, title, description } = props.destination || {}

    return (
        <div className="box">
                    <img src={services_photo} alt="" />
                    <div className="info">
                        <h3>{title}</h3>
                        <p>{description.slice(0,120)}</p>
                        <Link to={`/details/${_id}`}><button  className="btn">Details</button></Link>
                    </div>
                </div>
    );
};

export default DestinationsContent;