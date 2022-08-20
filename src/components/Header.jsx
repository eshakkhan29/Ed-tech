import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-2 bg-white w-full'>
            <div className='lg:w-8/12 mx-auto'>
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink className='btn btn-primary' to='/'>Home</NavLink>
                                <NavLink to='/about'>About us</NavLink>
                                <NavLink to='/'>Contact</NavLink>
                                <NavLink to='/'>Service</NavLink>
                            </ul>
                        </div>
                        <Link className='font-semibold text-3xl' to="/">ED Tech</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <NavLink className='font-semibold text-xl mr-5' to='/'>Home</NavLink>
                            <NavLink className='font-semibold text-xl mr-5' to='/about'>About</NavLink>
                            <NavLink className='font-semibold text-xl mr-5' to='/'>Contact</NavLink>
                            <NavLink className='font-semibold text-xl mr-5' to='/'>Services</NavLink>
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <NavLink className='btn btn-primary' to='/login'>Log in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;