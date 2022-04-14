import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
    }
    return (
        <div className='register-form'>

            <h2 className='text-success text-center mt-5 mb-3'>This is Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Registered? <Link to='/login' className='text-danger text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;