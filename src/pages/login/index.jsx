import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
            <div>
                <p>Don't have an account?{' '}</p>
                <Link to="/signup">
                    <p>Sign Up</p>
                </Link>
            </div>
            <div>
                <Link to="/forgot-password">
                    <p>Forgot Password?</p>
                </Link>
            </div>
        </div>
    );
};

export default Login;
