import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const [customerror, setCustomError] = useState('');

    const handelForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;
        if (password === rePassword) {
            createUserWithEmailAndPassword(email, password)
            e.target.reset();
        }
        else {
            setCustomError("password not match")
        }

    }
    if (loading || Gloading) {
        return <Loading />
    }
    if (user || Guser) {
        navigate('/')
    }
    if (Gerror || error) {
        toast.error(`${Gerror ? Gerror.message : ''} ${error ? error.message : ''}`);
    }
    return (
        <div>
            <Header />
            <div className='lg:w-8/12 mx-auto py-10 flex items-center justify-center'>
                <div className='lg:w-5/12 bg-transparent py-5 px-8 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold mb-4 text-secondary'>Sign Up</h1>
                    <hr className='border-gray-300 mb-5' />
                    <form onSubmit={handelForm}>
                        <input
                            className=" placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary"
                            placeholder="Email"
                            type="email"
                            name="email"
                            required />
                        <input
                            className="mt-4  placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary"
                            placeholder="Password"
                            type="password"
                            name="password"
                            required />
                        <input
                            className="mt-4  placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary"
                            placeholder="Retype Password"
                            type="password"
                            name="rePassword"
                            required />
                        <p className='my-3 text-warning'>{customerror}</p>
                        <input
                            className='btn btn-primary mt-3 w-full'
                            type="submit"
                            value="Sign up" />
                    </form>
                    <div>
                        <div className='text-center mt-4'>
                            <p className='text-xl font-medium'>Already have an account <Link to='/login' className='text-blue-500 underline cursor-pointer'>Log In</Link></p>
                        </div>
                    </div>
                    <div class="divider my-7">OR</div>
                    <div className='flex items-center justify-between'>
                        <button onClick={() => signInWithGoogle()} className='py-2 px-8 text-xl bg-red-500 text-white font-semibold rounded-[10px]'>Google</button>
                        <button className='py-2 px-8 text-xl bg-gray-600 text-white font-semibold rounded-[10px]'>Github</button>
                        <button className='py-2 px-8 text-xl bg-blue-500 text-white font-semibold rounded-[10px]'>facebook</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignUp;