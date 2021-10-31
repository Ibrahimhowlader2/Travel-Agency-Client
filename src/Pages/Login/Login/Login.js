import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle, loginWithEmailAndPass } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleLogin = e => {
        e.preventDefault();

        loginWithEmailAndPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                history.push(redirect_uri)
                console.log(user);
                // ...
            })
            
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }





    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="login-form-container">

                <form onSubmit={handleLogin}>
                    <h3>user login</h3>

                    <input type="email" onBlur={handleGetEmail} placeholder="email" className="box" />

                    <input type="password" onBlur={handleGetPassword} placeholder="password" className="box" />

                    <p> forget your password <a href="/">click here</a> </p>
                    <input type="submit" value="login" className="btn" />
                    <p>or login with</p>
                    <div className="buttons">
                        <button className="btn" onClick={handleGoogleSignIn}> Google </button>
                        <button className="btn"> Github </button>
                    </div>
                    <p> don't have an account <Link to="/register">create one</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Login;