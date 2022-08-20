import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlineLogout } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-white w-full sticky z-50 top-0 shadow-md shadow-primary'>
            <div className='lg:w-8/12 mx-auto'>
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/services'>Service</NavLink>
                                <NavLink to='/about'>About us</NavLink>
                                <NavLink to='/contact'>Contact</NavLink>
                            </ul>
                        </div>
                        <Link className='font-semibold text-3xl text-primary' to="/">Ed-Tech</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <NavLink className='font-semibold text-xl mr-8 hover:text-primary text-secondary' to='/'>Home</NavLink>
                            <NavLink className='font-semibold text-xl mr-8 hover:text-primary text-secondary' to='/services'>Services</NavLink>
                            <NavLink className='font-semibold text-xl mr-8 hover:text-primary text-secondary' to='/about'>About</NavLink>
                            <NavLink className='font-semibold text-xl mr-8 hover:text-primary text-secondary' to='/contact'>Contact</NavLink>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        {user?.uid ?
                            <>
                                <button onClick={() => signOut(auth)} className='font-semibold text-xl text-red-500 hover:text-red-700'><MdOutlineLogout className='inline-block' />Log out</button>
                                <img className='h-[40px] w-[40px] rounded-full ml-3' src={user?.photoURL} alt="user" />
                                <span className='text-lg text-primary font-medium ml-3'>{user?.displayName}</span>
                            </>
                            : <NavLink className='btn btn-primary' to='/login'>Log in</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;