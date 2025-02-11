import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [msg, setMsg] = useState('');
    const [msgType, setMsgType] = useState('');
    //const navigate = useNavigate();

    const handleToggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userName = formData.get('userName') || formData.get('newName');
        const email = formData.get(isSignup ? 'newEmail' : 'email'); // Ensure the email is also captured
        const password = formData.get('password') || formData.get('newPassword');

        // Logging form data for debugging
        console.log('Form Data:', { userName, email, password });

        try {
            const endpoint = isSignup ? 'http://localhost:8000/auth/signup' : 'http://localhost:8000/auth/login';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, email, password })
            });

            const data = await response.json();
            setMsg(data.msg);
            setMsgType(data.msg_type);

            if (response.ok) {
                alert("Request was successful!");
                console.log("Request completed successfully");
            }
        } catch (error) {
            console.error('Error:', error);
            setMsg('Internal server error');
            setMsgType('error');
        }
    };

    return (
        <center>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form id={isSignup ? "signupForm" : "loginForm"} className={styles.formInput} onSubmit={handleSubmit}>
                        <h2>{isSignup ? 'Signup' : 'Welcome'}</h2>
                        <h5>{isSignup ? 'Enter your details' : 'Login to your account'}</h5>
                        {isSignup && <input type="text" placeholder="Name" name="newName" required />}
                        <input type="email" placeholder="Email" name={isSignup ? "newEmail" : "email"} required />
                        {isSignup && <input type="number" placeholder="Mobile Number" name="newMobile" required />}
                        <input type="password" placeholder="Password" name={isSignup ? "newPassword" : "password"} required />
                        <button type="submit" className={styles.btn}>{isSignup ? 'Sign Up' : 'Login'}</button>
                        {msg && <p className={styles[msgType]}>{msg}</p>}
                        <p>
                            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <a href="#" onClick={handleToggleForm}>{isSignup ? 'Login' : 'Sign Up'}</a>
                        </p>
                    </form>
                </div>
            </div>
            <div style={{ height: '300px', width: '100%', position: 'absolute', bottom: '90px', zIndex: '-1' }}>
                <img src="/loginVector.svg" alt="Login Page Vector" style={{ width: "100%", height: "100%" }} />
            </div>
        </center>
    );
};
