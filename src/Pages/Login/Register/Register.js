import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async e => {
        e.preventDefault()


        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        console.log('Updated profile');
        navigate('/home')

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        // navigate('/home')
        console.log('user', user)
    }

    return (
        <div className='register-form'>

            <h2 className='text-success text-center mt-5 mb-3'>This is Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your Name' required />
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms"> Accept Car Service Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms"> Accept Car Service Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto d-block btn btn-primary mt-2 '
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Registered? <Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;