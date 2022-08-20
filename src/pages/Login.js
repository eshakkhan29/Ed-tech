import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
    return (
        <div className='bg-gray-200'>
            <Header />
            <div className='lg:w-8/12 mx-auto h-[90vh] flex items-center justify-center'>
                <div className='lg:w-5/12 bg-transparent py-5 px-8 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold mb-4'>Log in</h1>
                    <hr className='border-gray-300 mb-5' />
                    <form>
                        <input
                            className=" placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-600"
                            placeholder="Email"
                            type="email"
                            name="email"
                            required />
                        <input
                            className="mt-4  placeholder:text-slate-500 block bg-white w-full border border-gray-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-600"
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
                        <div className='flex items-center justify-between mt-4'>
                            <p className='text-xl font-medium  text-blue-500 cursor-pointer underline'>Forget Password?</p>
                            <p className='text-xl font-medium'>New to <Link to='/signup' className='text-blue-500 underline cursor-pointer'>Sign Up</Link></p>
                        </div>
                    </div>
                    <div class="divider my-7">OR</div>
                    <div className='flex items-center justify-between'>
                        <button className='py-2 px-8 text-xl bg-red-500 text-white font-semibold rounded-[10px]'>Google</button>
                        <button className='py-2 px-8 text-xl bg-gray-600 text-white font-semibold rounded-[10px]'>Github</button>
                        <button className='py-2 px-8 text-xl bg-blue-500 text-white font-semibold rounded-[10px]'>facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;