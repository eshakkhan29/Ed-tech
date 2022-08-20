import React from 'react';
import { Link } from 'react-router-dom';
import page404 from '../images/404pages.jpg';

const Page404 = () => {
    return (
        <div className='lg:w-8/12 mx-auto px-2 lg:px-0'>
            <img src={page404} alt="" />
            <div className='text-center'>
                <Link className='text-xl text-white py-2 px-6 bg-secondary rounded-lg' to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Page404;