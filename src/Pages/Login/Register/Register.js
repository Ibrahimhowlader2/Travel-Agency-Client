import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {

    const handleRegister = e => {
        console.log("registration");
        e.preventDefault();
    }

    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className="login-form-container">

                <form onSubmit={handleRegister}>
                    <h3>user register</h3>
                    <input type="text" placeholder="name" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <input type="password" placeholder="password" className="box" />
                    <p> forget your password <a href="/">click here</a> </p>
                    <input type="submit" value="Register" className="btn" />
                    <p>or login with</p>
                    <div className="buttons">
                        <button className="btn" onClick={handleGoogleSignIn}> Google </button>
                        <button className="btn"> Github </button>
                    </div>
                    <p> Already have an account <Link to="/login">Login here</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Register;