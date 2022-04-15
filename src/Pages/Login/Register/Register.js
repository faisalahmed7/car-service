import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'

const Register = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault()

       
        const email = e.target.email.value;
        const password = e.target.password.value
        createUserWithEmailAndPassword(email,password)
    }
    if (user){
        navigate('/home')
    }
    return (
        <div className='register-form'>

            <h2 className='text-success text-center mt-5 mb-3'>This is Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already Registered? <Link to='/login' className='text-danger text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;