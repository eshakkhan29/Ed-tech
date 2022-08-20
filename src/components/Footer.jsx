import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className="footer p-10 text-neutral-content lg:w-8/12 mx-auto">
                <div>
                    <span className="uppercase font-semibold text-2xl text-secondary">Services</span>
                    <NavLink to='/'>JavaScript</NavLink>
                    <NavLink to='/about'>Node JS</NavLink>
                    <NavLink to='/contact'>React JS</NavLink>
                    <NavLink to='/services'>CSS</NavLink>
                    <NavLink to='/services'>HTML5</NavLink>
                </div>
                <div >
                    <span className="uppercase font-semibold text-2xl text-secondary">Company</span>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/services'>Service</NavLink>
                </div>
                <div className='flex items-center justify-center w-full h-full'>
                    <h1 className='text-secondary font-bold text-5xl'>Ed-Tech</h1>
                </div>
            </div>
            <div className='text-center text-white pb-4'>
                <p>Copyright © 2022 - All right reserved by Ed-Tech</p>
            </div>
        </footer>
    );
};

export default Footer;