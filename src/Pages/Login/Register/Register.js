import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const { signInUsingGoogle, createAccountWithEmailPass,updateName} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleRegister = e => {
        e.preventDefault();

        createAccountWithEmailPass(email, password)
            .then((userCredential) => {
                // Signed in 
                updateName(name)
                // const user = userCredential.user;
                history.push(redirect_uri)
                // ...
            })
            
            
    }
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGetName = e => {
        setName(e.target.value);
    }
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

                <form onSubmit={handleRegister}>
                    <h3>user register</h3>
                    <input type="text" onBlur={handleGetName} placeholder="name" className="box" />
                    <input type="email" onBlur={handleGetEmail} placeholder="email" className="box" />
                    <input type="password" onBlur={handleGetPassword} placeholder="password" className="box" />
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