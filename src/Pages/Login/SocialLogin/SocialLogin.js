import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;

    if(loading || githubLoading){
        return <Loading></Loading>
    }

    if (error || githubError) {

        errorElement = 
            <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
       

    }

    if (user || user1) {
        navigate('/home')

    }
    return (
        <div>
            <div
                className='d-flex align-items-center justify-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>

            </div>
            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} style={{ borderRadius: '25px' }} className='btn bg-info w-50 d-block mx-auto my-2 '>
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    style={{ borderRadius: '25px' }} className='btn bg-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    <span className='px-2'>GitHub Sign In</span>
                </button>
                <button style={{ borderRadius: '25px' }} className='btn bg-info w-50 d-block mx-auto '>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;