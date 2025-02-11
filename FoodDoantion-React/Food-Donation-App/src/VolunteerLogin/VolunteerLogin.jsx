import React, { useState } from 'react';
import styles from './VolunteerLogin.module.css';
export const VolunteerLogin = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <center>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    {!isSignup ? (
                        <form id="loginForm" className={styles.formInput}>
                            <h2>Welcome Volunteer</h2>
                            <h5>Login to your account</h5>
                            <input type="email" placeholder="Email" name="email" required />
                            <input type="password" placeholder="Password" name="password" required />
                            <button type="submit" className={styles.btn}>Login</button>
                            <p>
                                Don't have an account?{' '}
                                <a href="#" onClick={handleToggleForm}>
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    ) : (
                        <form id="signupForm" className={styles.formInput} style={{marginTop:'70px'}}>
                            <h2 > Signup</h2>
                            <h5 style={{marginBottom:'10px'}}>Enter your details</h5>
                            <input type="text" placeholder="Name" name="newName" required />
                            <input type="email" placeholder="Email" name="newEmail" required />
                            <input type="number" placeholder="Mobile Number" name="newMobile" required />
                            <input type="password" placeholder="Password" name="newPassword" required />
                            <button type="submit" className={styles.btn}>Sign Up</button>
                            <p>
                                Already have an account?{' '}
                                <a href="#" onClick={handleToggleForm}>
                                    Login
                                </a>
                            </p>
                        </form>
                    )}
                </div>
            </div>
            {/* <div className={styles.bg}></div> */}
            <div style={{height:'300px',width:'100%',position:'absolute',bottom:'90px',zIndex:'-1'}}>
                <img
                    src="/loginVector.svg"
                    alt="Login Page Vector"
                    style={{
                    width: "100%",
                    height: "100%",
                    }}
                />
            </div>

        </center>
    );
};
