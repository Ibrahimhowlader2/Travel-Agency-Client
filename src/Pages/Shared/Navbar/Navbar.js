/* import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/travel-logo.png';

const Navbar = () => {

    const handleMenu = () => {
        document.querySelector('#menu-btn').classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('active');
    }

    window.onscroll = () => {
        document.querySelector('#menu-btn').classList.remove('fa-times');
        document.querySelector('.navbar').classList.remove('active');

        if (window.scrollY > 0) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        };
    }
    window.onload = () => {

        if (window.scrollY > 0) {
            document.querySelector('.header').classList.add('active');
        } else {
            document.querySelector('.header').classList.remove('active');
        };
    }

    const { user, logOut } = useAuth();





    return (
        <>
            <header className="header">
                <div id="menu-btn" onClick={handleMenu}>
                    <span>
                        <FaBars
                            style={{
                                fontSize: '2.8rem',
                                cursor: 'pointer',
                                verticalAlign: 'middle',
                                color: 'var(--light-color)'
                            }}
                        />
                    </span>
                </div>
                <Link to="/" className="logo"><img src={logo} alt="" /></Link>

                <nav className="navbar">
                    <NavLink to="/home"
                        activeStyle={{
                            color: "#FF8800"
                        }}
                    >Home</NavLink>

                    <NavLink to="/about"
                        activeStyle={{
                            color: "#FF8800"
                        }}
                    >About</NavLink>

                    <NavLink to="/contact"
                        activeStyle={{
                            color: "#FF8800"
                        }}
                    >Contact</NavLink>

                    {
                        user?.email ?
                        <NavLink to="/myBooking"
                        activeStyle={{
                            color: "#FF8800"
                        }}
                    >My Booking</NavLink>:
                    <span></span>
                    }
                    {
                        user?.email ?
                            <NavLink to="/manageBooking"
                                activeStyle={{
                                    color: "#FF8800"
                                }}
                            >Manage All</NavLink> :
                            <span></span>
                    }

                    {
                        user?.email ?
                            <NavLink to="/addBooking"
                                activeStyle={{
                                    color: "#FF8800"
                                }}
                            >Add New</NavLink> :
                            <span></span>
                    }

                </nav>
                <div id="login-btn">
                    {
                        user?.email ?
                            <> <span className="user-name">{user.displayName} : </span>  <button className="btn" onClick={logOut}>Log Out</button> </> :
                            <NavLink as={Link} to="/login"><button className="btn">Login</button></NavLink>
                    }
                    

                </div>
            </header>
       
        </>
    );
};

export default Navbar; */