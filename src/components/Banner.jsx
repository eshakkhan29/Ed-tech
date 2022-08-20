import React from 'react';
import banner from '../images/banner-bg.jpg';

const Banner = () => {
    return (
        <div className='py-3'>
            <img className='lg:h-[700px] w-full h-96  object-cover' src={banner} alt="banner" />
            <div className='bg-primary shadow-md relative top-[-20px] lg:top-[-30px] rounded-[25px] w-10/12 lg:w-7/12 mx-auto px-5 py-10'>
                <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-10'>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>2500 +</h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Students</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>40 +</h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Real Project</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>80</h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Trainer/Teacher</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold text-secondary'>5 +</h1>
                        <p className='text-xl font-semibold mt-2 text-white'>Total Branches</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;