import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner text-start ">

            <div className="container">
                <h1 className="banner_vacation fw-bolder text-light"> <span >New </span> <span className="banner_travel">Collection</span></h1>
                {/* <p>Check out our Spring/Summer Colection 2021</p> */}
                <h5 className="text-light">Check out our Spring/Summer Colection 2021</h5>
                <Link to="/login">
                    <button type="button" className="btn btn-outline-info mt-5 ">Book a Glass</button>
                </Link>
            </div>

        </div>
    );
};

export default Banner;