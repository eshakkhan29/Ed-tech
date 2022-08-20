import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handelForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    if (loading || Gloading) {
        return <Loading />
    }
    if (Guser || user) {
        navigate(from, { replace: true })
    }
    if (Gerror || error) {
        toast.error(`${Gerror ? Gerror.message : ''} ${error ? error.message : ''}`);
    }
    return (
        <div>
            <Header />
            <div className='lg:w-8/12 lg:px-0 px-2  mx-auto py-20 flex items-center justify-center'>
                <div className='lg:w-5/12 w-11/12  bg-white py-5 lg:px-8 px-4 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold mb-4 text-secondary'>Log In</h1>
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
                            className='btn btn-primary mt-3 w-full'
                            type="submit"
                            value="Log in" />
                    </form>
                    <div>
                        <div className='flex lg:flex-row flex-col gap-3 items-center justify-between mt-4'>
                            <p className='text-xl font-medium  text-blue-500 cursor-pointer underline'>Forget Password?</p>
                            <p className='text-xl font-medium'>New to <Link to='/signup' className='text-blue-500 underline cursor-pointer'>Sign Up</Link></p>
                        </div>
                    </div>
                    <div class="divider my-7">OR</div>
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-3'>
                        <button onClick={() => signInWithGoogle()} className='py-2 text-xl w-full bg-red-500 text-white font-semibold rounded-[10px]'>Google</button>
                        <button className='py-2 text-xl w-full bg-gray-600 text-white font-semibold rounded-[10px]'>Github</button>
                        <button className='py-2 text-xl w-full bg-blue-500 text-white font-semibold rounded-[10px]'>facebook</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;