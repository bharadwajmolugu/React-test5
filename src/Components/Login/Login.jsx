import React, { useState, useEffect } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    useEffect(() => {
        document.title = 'E-Adda ~Login';
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const loginHandler = (e) => {
        let valid = true;
        let errors = { email: '', password: '' };

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(email)) {
            errors.email = 'Invalid email format';
            valid = false;
        }

        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        }

        setErrors(errors);

        if (!valid) {
            e.preventDefault();
        }
    };

    return (
        <div>
            <form className='loginForm'>
                <input
                    className='form-control w-50'
                    type='text'
                    placeholder='Enter your email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                    className='form-control w-50'
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <Link onClick={loginHandler} className='text-decoration-none btn btn-primary' to='/PageNotFound'>Login</Link>
            </form>
            <div className='signup'>
                <p>New user..?</p>
                <Link className='text-decoration-none' to='/signup'>SignUp</Link>
            </div>
        </div>
    );
};

export default Login;
