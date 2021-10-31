import React from 'react';
import './NavbarTwo.css';
import logo from '../../../images/travel-logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const NavbarTwo = () => {

    const { user, logOut } = useAuth();

    return (
        <section className="fixed-top bg-white  shadow">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                            {
                                user?.email ?
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">


                                            {
                                                user?.email ?
                                                    <li>
                                                        <li>
                                                            <Link className="dropdown-item" to="/myBooking">
                                                                My Booking
                                                            </Link>
                                                        </li>
                                                    </li>
                                                    :
                                                    <span></span>
                                            }
                                            {
                                                user?.email ?
                                                    <li>
                                                        <Link className="dropdown-item" to="/addBooking">
                                                            Add New
                                                        </Link>
                                                    </li>
                                                    :
                                                    <span></span>
                                            }
                                            {
                                                user?.email ?
                                                    <li>
                                                        <Link className="dropdown-item" to="/manageBooking">
                                                            MAnage All
                                                        </Link>
                                                    </li>
                                                    :
                                                    <span></span>
                                            }
                                        </ul>
                                    </li>
                                    :
                                    <span></span>
                            }
                        </ul>
                        <div className="d-flex login_btn">

                            {
                                user?.email ?
                                    <> <span className="user-name">{user.displayName} : </span>  <button className="btn" onClick={logOut}>Log Out</button> </> :
                                    <Link as={Link} to="/login"><button className="btn">Login</button></Link>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavbarTwo;